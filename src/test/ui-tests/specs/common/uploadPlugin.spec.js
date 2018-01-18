"use strict";

var confluenceProtractorBase = require('confluence-protractor-base').confluenceProtractorBase;
var UniversalPluginManager = confluenceProtractorBase.pageObjects.UniversalPluginManager;

var failFastReporter = confluenceProtractorBase.jasmineReporters.failFastReporter;

describe('Random Page (plugin installation)', function () {

	var universalPluginManager = new UniversalPluginManager();

	var PLUGIN_UPLOAD_TIMEOUT = 4 * 60 * 1000; // 4 minutes

	beforeAll(function () {
		failFastReporter.enable();
		universalPluginManager.authenticateAsAdmin();
	});

	afterAll(failFastReporter.disable);

	it('installs the plugin', function () {
		var mavenVersion = universalPluginManager.parseMavenVersionFromPom();
		// 'randompage' -> plugin <artifactId> from pom.xml
		var pluginPath = './target/randompage-' + mavenVersion + '.obr';
		// 'Random Page' -> plugin <name> from pom.xml
		universalPluginManager.uploadPlugin('Random Page', pluginPath, PLUGIN_UPLOAD_TIMEOUT);
	}, PLUGIN_UPLOAD_TIMEOUT);

});
