package net.seibertmedia.confluence.randompage;

import javax.inject.Named;

import org.springframework.beans.factory.annotation.Autowired;

import com.atlassian.confluence.pages.PageManager;
import com.atlassian.plugin.spring.scanner.annotation.component.Scanned;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;

@Named
@Scanned
public class RandomPage {

	@ComponentImport
	private final PageManager pageManager;

	@Autowired
	public RandomPage(final PageManager pageManager) {
		this.pageManager = pageManager;
	}
}