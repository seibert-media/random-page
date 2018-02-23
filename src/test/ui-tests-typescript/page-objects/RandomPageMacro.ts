import {ExpectedConditions, by, element, browser} from "protractor";
const EC = ExpectedConditions;

import {protractorConfig, pageObjectUtils, ConfluenceMacro} from "confluence-protractor-base";
const DEFAULT_LOADING_TIMEOUT = protractorConfig.DEFAULT_LOADING_TIMEOUT;
const asyncElement = pageObjectUtils.asyncElement;

const MACRO_PARAMS = {
	macroName: "Random Page", // name when searching the macro browser
	dataMacroName: "random-page-macro", // macro locator for the edit mode
	macroViewLocator: by.id("randomPageWrapper") // macro locator for view mode
};

export class RandomPageMacro extends ConfluenceMacro {

	private params: {pageCount: number};

	constructor(params: {pageCount: number}) {
		super(MACRO_PARAMS);
		this.params = params;
	}

	// overwrite this method for setting macro values
	public insertMacroParams () {
		this.setPageCount();
	};

	public getRandomPages () {
		RandomPageMacro.waitForMacroToBeLoaded();

		return element(this.macroViewLocator).all(by.css("li"));
	}

	private setPageCount () {
		if (this.params.pageCount) {
			// asyncElement waits until the element is actually displayed
			const pageCountInput = asyncElement(by.id("macro-param-pageCount"));
			pageCountInput.clear();
			pageCountInput.sendKeys(this.params.pageCount);
		}
	}

	static waitForMacroToBeLoaded () {
		browser.wait(EC.invisibilityOf(RandomPageMacro.loadingIndicator()),
			DEFAULT_LOADING_TIMEOUT,
			"RandomPage macro did not load within " + DEFAULT_LOADING_TIMEOUT + "ms");
	}

	static loadingIndicator () {
		return element(by.css(".spinner"));
	}
}
