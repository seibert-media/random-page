import {ConfluencePage, ConfluenceSpace, failFastReporter} from "confluence-protractor-base";
import {sharedPageObjects} from "./sharedPageObjects";
import {forEach} from "lodash";

describe("Prepare Test Setup", () => {

	beforeAll(() => {
		// if something goes wrong while preparation -> stop immediately
		failFastReporter.enable();
		// login and "websudo"
		sharedPageObjects.randomPage.authenticateAsAdmin();
	});

	afterAll(failFastReporter.disable);

	// create test spaces
	forEach(sharedPageObjects.spaces, (space: ConfluenceSpace, spaceKey: string) => {
		it("creates space '" + spaceKey + "'", () => {
			space.create();
		});

		it("exists space '" + spaceKey + "'", () => {
			// make sure space is in index and appears in space directory
			space.waitForSpaceToAppearInSpaceDirectory();
		});
	});

	// create test pages
	forEach(sharedPageObjects.pages, (page: ConfluencePage) => {
		it("adds page '" + page.getPageName() + "' to space '" + page.getSpaceKey() + "'", () => {
			page.create();
		});
	});
});
