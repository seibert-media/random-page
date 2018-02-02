"use strict";

import {by, element} from "protractor";

import {pageObjectUtils} from "confluence-protractor-base";
const asyncElement = pageObjectUtils.asyncElement;

import {RandomPageAdministration} from "../page-objects/RandomPageAdministration";
import {sharedPageObjects} from "./common/sharedPageObjects";

describe("RandomPageAdministration", () => {

	const administration = sharedPageObjects.randomPageAdministration;

	beforeAll(() => {
		administration.authenticateAsAdmin();
	});

	afterAll(() => {
		administration.resetDefaults();
	});

	it('opens administration action', () => {
		administration.randomPageAdminAction.open();

		expect(element(by.css(".admin-heading")).getText()).toBe("Random Page Configuration");
	});

	describe("PagesLimit", () => {
		const newPagesLimit = "99";

		it('has default pages limit', () => {
			expect(administration.getPagesLimit()).toBe(RandomPageAdministration.DEFAULT_PAGES_LIMIT);
		});

		it("changes value and saves action", () => {
			administration.setPagesLimit(newPagesLimit);

			administration.save();
		});

		it("shows success message", () => {
			expect(asyncElement(by.css("#random-page-admin-container .success")).isPresent()).toBeTruthy();
		});

		it("persists new value", () => {
			expect(administration.getPagesLimit()).toBe(newPagesLimit);
		});
	});
});
