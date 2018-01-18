"use strict";

var confluenceProtractorBase = require('confluence-protractor-base').confluenceProtractorBase;
var ConfluenceBase = confluenceProtractorBase.pageObjects.ConfluenceBase;

function RandomPage() {
	ConfluenceBase.apply(this, arguments);
}

RandomPage.prototype = new ConfluenceBase();

module.exports = RandomPage;
