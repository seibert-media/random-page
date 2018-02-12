"use strict";

var confluenceProtractorBase = require('confluence-protractor-base').confluenceProtractorBase;

var pageObjectUtils = confluenceProtractorBase.utils.pageObjectUtils;

pageObjectUtils.setDefaultElementTimeout(2 * 1000);
pageObjectUtils.setDefaultLoadingTimeout(20 * 1000);

var config = require('lodash').merge(confluenceProtractorBase.protractorConfig.config, {
	baseUrl: 'http://localhost:1990/confluence/',
	seleniumAddress: "http://localhost:4445/wd/hub",
	specs: [
		'specs/common/uploadPlugin.spec.js', // upload the plugin first
		'specs/common/prepareTestSetup.spec.js',
		'specs/*.spec.js'
		// ,'specs/common/cleanupTestSetup.spec.js' // enable if you want to clean up your instance after tests
	]
});

console.log('protractorConfig:', config);

exports.config = config;
