"use strict";

var confluenceProtractorBase = require('confluence-protractor-base').confluenceProtractorBase;
var asyncElement = confluenceProtractorBase.utils.pageObjectUtils.asyncElement;

var RandomPageAdministration = require("../page-objects/RandomPageAdministration");

var sharedPageObjects = require("./common/sharedPageObjects");

describe("RandomPageAdministration", function () {

	var administration = sharedPageObjects.randomPageAdministration;

	beforeAll(function () {
		administration.authenticateAsAdmin();
	});

	afterAll(function () {
		administration.resetDefaults();
	});

	it('opens administration action', function () {
		administration.randomPageAdminAction.open();

		expect(element(by.css(".admin-heading")).getText()).toBe("Random Page Configuration");
	});

	describe("PagesLimit", function () {
		var newPagesLimit = "99";

		it('has default pages limit', function () {
			expect(administration.getPagesLimit()).toBe(RandomPageAdministration.DEFAULT_PAGES_LIMIT);
		});

		it("changes value and saves action", function () {
			administration.setPagesLimit(newPagesLimit);

			administration.save();
		});

		it("shows success message", function () {
			expect(asyncElement(by.css("#random-page-admin-container .success")).isPresent()).toBeTruthy();
		});

		it("persists new value", function () {
			expect(administration.getPagesLimit()).toBe(newPagesLimit);
		});
	});
});
