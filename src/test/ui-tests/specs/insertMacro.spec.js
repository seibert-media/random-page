"use strict";

var confluenceProtractorBase = require("confluence-protractor-base").confluenceProtractorBase;
var ConfluencePage = confluenceProtractorBase.pageObjects.ConfluencePage;

var sharedPageObjects = require("./common/sharedPageObjects");
var RandomPageMacro = require("../page-objects/RandomPageMacro");

describe("RandomPageMacro", function () {

	// create a new page for this test
	var page = new ConfluencePage("Tomato", sharedPageObjects.spaces.Vegetable.getSpaceKey());

	beforeAll(function () {
		// login to Confluence first
		sharedPageObjects.randomPage.loginAsAdmin();
	});

	afterAll(function () {
		// clean up after the spec is done
		page.remove();
	});

	describe("Insertion and Configuration", function () {
		var pageCount = 5;
		var macro = new RandomPageMacro({pageCount: pageCount});

		it('creates page', function () {
			var pageTitleLocator = by.css('#title-text');

			page.create();

			expect(element(pageTitleLocator).getText()).toBe(page.getPageName());
		});

		it("opens editor", function () {
			page.edit();
			page.getEditor().waitUntilEditorOpened();
		});

		it("inserts macro", function () {
			macro.insertMacroViaBracket();

			expect(macro.isMacroPresent()).toBe(true);
		});

		it("saves and closes the editor", function () {
			page.getEditor().save();
			page.getEditor().waitUntilEditorClosed();

			expect(macro.isMacroPresent()).toBe(true);
		});

		it("shows '" + pageCount + "' pages", function () {
			var randomPages = macro.getRandomPages();

			expect(randomPages.count()).toBe(pageCount);
		});
	});
});
