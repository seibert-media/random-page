"use strict";

var failFastReporter = require('confluence-protractor-base').confluenceProtractorBase.jasmineReporters.failFastReporter;

var sharedPageObjects = require('./sharedPageObjects');
var forEach = require('lodash.foreach');

describe('Prepare Test Setup', function () {

	beforeAll(function () {
		// if something goes wrong while preparation -> stop immediately
		failFastReporter.enable();
		// login and 'websudo'
		sharedPageObjects.randomPage.authenticateAsAdmin();
	});

	afterAll(failFastReporter.disable);

	// create test spaces
	forEach(sharedPageObjects.spaces, function (space, spaceKey) {
		it('creates space "' + spaceKey + '"', function () {
			space.create();
		});

		it('exists space "' + spaceKey + '"', function () {
			// make sure space is in index and appears in space directory
			space.waitForSpaceToAppearInSpaceDirectory();
		});
	});

	// create test pages
	forEach(sharedPageObjects.pages, function (page) {
		it('adds page "' + page.getPageName() + '" to space "' + page.getSpaceKey() + '"', function () {
			page.create();
		});
	});
});
