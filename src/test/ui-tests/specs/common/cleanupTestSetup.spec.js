"use strict";

var sharedPageObjects = require("./sharedPageObjects");
var forEach = require("lodash.foreach");

describe("Cleanup Test Setup", function () {

	beforeAll(function () {
		sharedPageObjects.randomPage.authenticateAsAdmin();
	});

	// remove space (including pages)
	forEach(sharedPageObjects.spaces, function (space, spaceKey) {
		it("removes space '" + spaceKey + "'", function () {
			space.remove();
		});

		it("ensures space '" + spaceKey + "'' is removed", function () {
			space.waitForSpaceToDisappearFromSpaceDirectory();
		});
	});
});
