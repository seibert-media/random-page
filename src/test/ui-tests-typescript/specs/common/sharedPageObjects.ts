"use strict";

import {ConfluenceSpace, ConfluencePage} from "confluence-protractor-base";

import {RandomPage} from "../../page-objects/RandomPage";
import {RandomPageAdministration} from "../../page-objects/RandomPageAdministration";

const fruitSpaceKey = "FRUIT";
const cheeseSpaceKey = "CHEESE";
const vegetableSpaceKey = "VEGETABLE";

export const sharedPageObjects = {
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
