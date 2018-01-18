package net.seibertmedia.confluence.randompage;

import static java.util.stream.Collectors.toList;

import java.util.List;

import javax.inject.Named;

import org.springframework.beans.factory.annotation.Autowired;

import com.atlassian.confluence.pages.AbstractPage;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;

import net.seibertmedia.confluence.randompage.rest.RandomPageDto;
import net.seibertmedia.confluence.randompage.search.RandomPageSearchService;

@Named
@Scanned
public class RandomPage {

	private final RandomPageSearchService searchService;

	@Autowired
	public RandomPage(final RandomPageSearchService searchService) {
		this.searchService = searchService;
	}

	public List<RandomPageDto> getPages(final int limit) {
		List<AbstractPage> pages = searchService.searchPages(limit);

		return pages.stream()
				.map(RandomPageDto::fromPage)
				.collect(toList());
	}
}