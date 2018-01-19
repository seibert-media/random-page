package net.seibertmedia.confluence.randompage;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

	public List<RandomPageDto> getPages(final int pageCount) {
		List<AbstractPage> pages = searchService.searchPages();

		return pages.stream()
				.collect(toShuffledStream())
				.limit(pageCount)
				.map(RandomPageDto::fromPage)
				.collect(Collectors.toList());
	}

	private static <T> Collector<T, ?, Stream<T>> toShuffledStream() {
		return Collectors.collectingAndThen(Collectors.toList(), collected -> {
			Collections.shuffle(collected);
			return collected.stream();
		});
	}
}