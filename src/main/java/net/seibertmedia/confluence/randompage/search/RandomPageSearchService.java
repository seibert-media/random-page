package net.seibertmedia.confluence.randompage.search;

import static java.util.stream.Collectors.toList;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.StreamSupport;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.atlassian.bonnie.Handle;
import com.atlassian.confluence.core.ContentEntityObject;
import com.atlassian.confluence.pages.AbstractPage;
import com.atlassian.confluence.pages.PageManager;
import com.atlassian.confluence.search.service.ContentTypeEnum;
import com.atlassian.confluence.search.v2.ContentSearch;
import com.atlassian.confluence.search.v2.ISearch;
import com.atlassian.confluence.search.v2.InvalidSearchException;
import com.atlassian.confluence.search.v2.SearchFilter;
import com.atlassian.confluence.search.v2.SearchManager;
import com.atlassian.confluence.search.v2.SearchQuery;
import com.atlassian.confluence.search.v2.SearchResult;
import com.atlassian.confluence.search.v2.SearchResults;
import com.atlassian.confluence.search.v2.SearchSort;
import com.atlassian.confluence.search.v2.SearchSort.Order;
import com.atlassian.confluence.search.v2.query.ContentTypeQuery;
import com.atlassian.confluence.search.v2.query.InSpaceQuery;
import com.atlassian.confluence.search.v2.searchfilter.ArchivedSpacesSearchFilter;
import com.atlassian.confluence.search.v2.searchfilter.ChainedSearchFilter;
import com.atlassian.confluence.search.v2.searchfilter.ContentPermissionsSearchFilter;
import com.atlassian.confluence.search.v2.searchfilter.SpacePermissionsSearchFilter;
import com.atlassian.confluence.search.v2.sort.CreatedSort;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

import bucket.core.persistence.hibernate.HibernateHandle;
import net.seibertmedia.confluence.randompage.settings.RandomPageSettingsDao;

@Named
@Scanned
public class RandomPageSearchService {

	private static final Logger logger = LoggerFactory.getLogger(RandomPageSearchService.class);

	@ComponentImport
	private final SearchManager searchManager;
	@ComponentImport
	private final PageManager pageManager;
	private final RandomPageSettingsDao settingsDao;

	@Autowired
	public RandomPageSearchService(
			final SearchManager searchManager,
			final PageManager pageManager,
			final RandomPageSettingsDao settingsDao) {
		this.searchManager = searchManager;
		this.pageManager = pageManager;
		this.settingsDao = settingsDao;
	}

	public List<AbstractPage> searchPages() {
		final SearchQuery query = pagesQuery();
		final int pageLimit = settingsDao.getRandomPageLimit();

		try {
			logger.debug("search for pages with query '{}' and pageCount '{}'", query, pageLimit);
			final SearchResults results = searchPages(query, pageLimit);
			return getAbstractPagesFromSearchResults(results);
		} catch (final InvalidSearchException e) {
			logger.error("problems searching pages; query {}", query, e);
			return new ArrayList<>();
		}
	}

	private SearchQuery spacesQuery(final Set<String> spaceKeys) {
		return new InSpaceQuery(spaceKeys);
	}

	private SearchQuery pagesQuery() {
		return new ContentTypeQuery(ContentTypeEnum.PAGE);
	}

	private SearchResults searchPages(final SearchQuery query, final int pageCount) throws InvalidSearchException {
		final SearchSort searchSort = new CreatedSort(Order.DESCENDING);
		final SearchFilter searchFilter = getSearchFilter();

		final ISearch search = new ContentSearch(query, searchSort, searchFilter, 0, pageCount);

		return searchManager.search(search);
	}

	private SearchFilter getSearchFilter() {
		final SearchFilter contentPermissionsFilter = ContentPermissionsSearchFilter.getInstance();
		final SearchFilter spacePermissionsFilter = SpacePermissionsSearchFilter.getInstance();
		// false in ArchivedSpacesSearchFilter constructor means: don't invert meaning and don't include archived spaces
		final SearchFilter archivedSpacesFilter = new ArchivedSpacesSearchFilter(false);
		return new ChainedSearchFilter(contentPermissionsFilter, spacePermissionsFilter, archivedSpacesFilter);
	}

	private List<AbstractPage> getAbstractPagesFromSearchResults(final SearchResults results) {
		logger.debug("found {} results ({})", results.size(), results);

		return StreamSupport.stream(results.spliterator(), false)
				.map(this::getAbstractPage)
				.filter(Objects::nonNull)
				// lucene search might return cached elements, so we have to check if the post has been deleted meanwhile
				.filter(abstractPage -> !abstractPage.isDeleted())
				.collect(toList());
	}

	private AbstractPage getAbstractPage(SearchResult searchResult) {
		final Handle handle = searchResult.getHandle();

		final long id;
		if (handle instanceof HibernateHandle) {
			id = ((HibernateHandle) handle).getId();
		} else {
			logger.error("Expected HibernateHandle but got " + handle.getClass().getSimpleName());
			return null;
		}

		final ContentEntityObject entity = pageManager.getById(id);

		if (entity instanceof AbstractPage) {
			return ((AbstractPage) entity).getLatestVersion();
		}

		return null;
	}
}