"use strict";

var confluenceProtractorBase = require("confluence-protractor-base").confluenceProtractorBase;
var ConfluenceSpace = confluenceProtractorBase.pageObjects.ConfluenceSpace;
var ConfluencePage = confluenceProtractorBase.pageObjects.ConfluencePage;

var RandomPage = require("../../page-objects/RandomPage");
var RandomPageAdministration = require("../../page-objects/RandomPageAdministration");


var fruitSpaceKey = "FRUIT";
var cheeseSpaceKey = "CHEESE";
var vegetableSpaceKey = "VEGETABLE";

var sharedPageObjects = {
	randomPage: new RandomPage(),
	randomPageAdministration: new RandomPageAdministration(),
	spaces: {
		Fruit: new ConfluenceSpace(fruitSpaceKey, "Fruit"),
		Cheese: new ConfluenceSpace(cheeseSpaceKey, "Cheese"),
		Vegetable: new ConfluenceSpace(vegetableSpaceKey, "Vegetable")
	},
	pages: {
		Apple: new ConfluencePage("Apple", fruitSpaceKey),
		Banana: new ConfluencePage("Banana", fruitSpaceKey),
		Cherry: new ConfluencePage("Cherry", fruitSpaceKey),
		Cheddar: new ConfluencePage("Cheddar", cheeseSpaceKey),
		Carrot: new ConfluencePage("Carrot", vegetableSpaceKey)
	}
};

module.exports = sharedPageObjects;
