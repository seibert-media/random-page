import {failFastReporter, UniversalPluginManager} from "confluence-protractor-base";

describe("Random Page (plugin installation)", () => {

	const universalPluginManager = new UniversalPluginManager();

	const PLUGIN_UPLOAD_TIMEOUT = 4 * 60 * 1000; // 4 minutes

	beforeAll(() => {
		failFastReporter.enable();
		universalPluginManager.authenticateAsAdmin();
	});

	afterAll(failFastReporter.disable);

	it("installs the plugin", () => {
		const mavenVersion = universalPluginManager.parseMavenVersionFromPom();
		// "randompage" -> plugin <artifactId> from pom.xml
		const pluginPath = "./target/randompage-" + mavenVersion + ".obr";
		// "Random Page" -> plugin <name> from pom.xml
		universalPluginManager.uploadPlugin("Random Page", pluginPath, PLUGIN_UPLOAD_TIMEOUT);
	}, PLUGIN_UPLOAD_TIMEOUT);

});
