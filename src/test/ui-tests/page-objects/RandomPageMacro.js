"use strict";

var EC = require("protractor").ExpectedConditions;

var confluenceProtractorBase = require('confluence-protractor-base').confluenceProtractorBase;
var DEFAULT_LOADING_TIMEOUT = confluenceProtractorBase.utils.pageObjectUtils.DEFAULT_LOADING_TIMEOUT;
var asyncElement = confluenceProtractorBase.utils.pageObjectUtils.asyncElement;

var ConfluenceMacro = confluenceProtractorBase.pageObjects.ConfluenceMacro;

var MACRO_PARAMS = {
	macroName: "Random Page", // name when searching the macro browser
	dataMacroName: "random-page-macro", // macro locator for the edit mode
	macroViewLocator: by.id("randomPageWrapper") // macro locator for view mode
};

/**
 * @extends {ConfluenceMacro}
 * @param params {object}
 * @param? params.pageCount {int} number of random pages to be shown
 * @constructor
 */
function RandomPageMacro(params) {

	ConfluenceMacro.apply(this, [MACRO_PARAMS]);
	var self = this;
	self.params = params;

	// overwrite this method for setting macro values
	this.insertMacroParams = function () {
		self.setPageCount();
	};

	this.setPageCount = function () {
		if (self.params.pageCount) {
			// asyncElement waits until the element is actually displayed
			var pageCountInput = asyncElement(by.id("macro-param-pagecount"));
			pageCountInput.clear();
			pageCountInput.sendKeys(self.params.pageCount);
		}
	};

	this.loadingIndicator = function () {
		return element(by.css(".spinner"));
	};

	this.waitForMacroToBeLoaded = function () {
		browser.wait(EC.invisibilityOf(self.loadingIndicator()),
			DEFAULT_LOADING_TIMEOUT,
			"RandomPage macro did not load within " + DEFAULT_LOADING_TIMEOUT + "ms");
	};

	this.getRandomPages = function () {
		this.waitForMacroToBeLoaded();

		return element(this.macroViewLocator).all(by.css("li"));
	};
}

RandomPageMacro.prototype = new ConfluenceMacro(MACRO_PARAMS);

module.exports = RandomPageMacro;
