import {sharedPageObjects} from "./sharedPageObjects";
import {forEach} from "lodash";
import {ConfluenceSpace} from "confluence-protractor-base";

describe("Cleanup Test Setup", () => {

	beforeAll(() => {
		sharedPageObjects.randomPage.authenticateAsAdmin();
	});

	// remove space (including pages)
	forEach(sharedPageObjects.spaces, (space: ConfluenceSpace, spaceKey: String) => {
		it("removes space '" + spaceKey + "'", () => {
			space.remove();
		});

		it("ensures space '" + spaceKey + "'' is removed", () => {
			space.waitForSpaceToDisappearFromSpaceDirectory();
		});
	});
});
