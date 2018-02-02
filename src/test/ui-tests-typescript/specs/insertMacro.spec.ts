import {by, element} from "protractor";
import {ConfluencePage} from "confluence-protractor-base";

import {sharedPageObjects} from "./common/sharedPageObjects";
import {RandomPageMacro} from "../page-objects/RandomPageMacro";

describe("RandomPageMacro", () => {

	// create a new page for this test
	const page = new ConfluencePage("Tomato", sharedPageObjects.spaces.Vegetable.getSpaceKey());

	beforeAll(() => {
		// login to Confluence first
		sharedPageObjects.randomPage.loginAsAdmin();
	});

	afterAll(() => {
		// clean up after the spec is done
		page.remove();
	});

	describe("Insertion and Configuration", () => {
		const pageCount = 5;
		const macro = new RandomPageMacro({pageCount: pageCount});

		it('creates page', () => {
			const pageTitleLocator = by.css('#title-text');

			page.create();

			expect(element(pageTitleLocator).getText()).toBe(page.getPageName());
		});

		it("opens editor", () => {
			page.edit();
			page.getEditor().waitUntilEditorOpened();
		});

		it("inserts macro", () => {
			macro.insertMacroViaBracket();

			expect(macro.isMacroPresent()).toBe(true);
		});

		it("saves and closes the editor", () => {
			page.getEditor().save();
			page.getEditor().waitUntilEditorClosed();

			expect(macro.isMacroPresent()).toBe(true);
		});

		it("shows '" + pageCount + "' pages", () => {
			const randomPages = macro.getRandomPages();

			expect(randomPages.count()).toBe(pageCount);
		});
	});
});
