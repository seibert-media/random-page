import {confluenceProtractorBase, pageObjectUtils} from "confluence-protractor-base";

pageObjectUtils.setDefaultElementTimeout(2 * 1000);
pageObjectUtils.setDefaultLoadingTimeout(20 * 1000);

export const config = require('lodash').merge(confluenceProtractorBase.protractorConfig.config, {
	baseUrl: 'http://confluence:8090/',
	params: {
		confluenceConfig: 'default',
		configOverwrite: {
			USERS: {
			}
		}
	},
	specs: [
		'specs/common/uploadPlugin.spec.ts', // upload the plugin first
		'specs/common/prepareTestSetup.spec.ts',
		'specs/*.spec.ts',
		// ,'specs/common/cleanupTestSetup.spec.ts' // enable if you want to clean up your instance after tests
	]
});

console.log('protractorConfig:', config);