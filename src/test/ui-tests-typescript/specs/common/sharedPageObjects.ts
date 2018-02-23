import {ConfluenceSpace, ConfluencePage} from "confluence-protractor-base";

import {RandomPage} from "../../page-objects/RandomPage";
import {RandomPageAdministration} from "../../page-objects/RandomPageAdministration";

const fruitySpaceKey = "FRUITY";
const cheesySpaceKey = "CHEESY";
const vegetalSpaceKey = "VEGETAL";

export const sharedPageObjects = {
	randomPage: new RandomPage(),
	randomPageAdministration: new RandomPageAdministration(),
	spaces: {
		Fruit: new ConfluenceSpace(fruitySpaceKey, "Fruity (TS)"),
		Cheese: new ConfluenceSpace(cheesySpaceKey, "Cheesy (TS)"),
		Vegetable: new ConfluenceSpace(vegetalSpaceKey, "Vegetal (TS)")
	},
	pages: {
		Apple: new ConfluencePage("Apple", fruitySpaceKey),
		Banana: new ConfluencePage("Banana", fruitySpaceKey),
		Cherry: new ConfluencePage("Cherry", fruitySpaceKey),
		Cheddar: new ConfluencePage("Cheddar", cheesySpaceKey),
		Carrot: new ConfluencePage("Carrot", vegetalSpaceKey)
	}
};
