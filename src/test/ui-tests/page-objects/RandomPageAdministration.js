"use strict";

var confluenceProtractorBase = require("confluence-protractor-base").confluenceProtractorBase;
var ConfluenceBase = confluenceProtractorBase.pageObjects.ConfluenceBase;
var ConfluenceAction = confluenceProtractorBase.pageObjects.ConfluenceAction;

function RandomPageAdministration() {
	ConfluenceBase.apply(this, arguments);

	var self = this;

	this.randomPageAdminAction = new ConfluenceAction({
		path: 'admin/plugins/randompage/admin.action'
	});

	this.getPagesLimitElement = function() {
		return element(by.id("pagesLimit"));
	};

	this.getPagesLimit = function () {
		return self.getPagesLimitElement().getAttribute('value');
	};

	this.setPagesLimit = function (newPagesLimit) {
		var pagesLimitElement = self.getPagesLimitElement();
		pagesLimitElement.clear();
		pagesLimitElement.sendKeys(newPagesLimit);
	};

	this.resetDefaults = function() {
		self.setPagesLimit(RandomPageAdministration.DEFAULT_PAGES_LIMIT);
		self.save();
	};

	this.save = function () {
		return element(by.id("confirm")).click();
	};

	this.cancel = function () {
		return element(by.id("cancel")).click();
	};
}

RandomPageAdministration.prototype = new ConfluenceBase();
RandomPageAdministration.DEFAULT_PAGES_LIMIT = "100";

module.exports = RandomPageAdministration;
