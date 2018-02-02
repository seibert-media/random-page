import {ConfluenceAction, ConfluenceBase} from "confluence-protractor-base";
import {by, element} from "protractor";

export {RandomPageAdministration}

class RandomPageAdministration extends ConfluenceBase {

	static readonly DEFAULT_PAGES_LIMIT: string = "100";

	public randomPageAdminAction = new ConfluenceAction({
		path: 'admin/plugins/randompage/admin.action'
	});

	public getPagesLimitElement() {
		return element(by.id("pagesLimit"));
	};

	public getPagesLimit() {
		return this.getPagesLimitElement().getAttribute('value');
	};

	public setPagesLimit(newPagesLimit) {
		const pagesLimitElement = this.getPagesLimitElement();
		pagesLimitElement.clear();
		pagesLimitElement.sendKeys(newPagesLimit);
	};

	public resetDefaults() {
		this.setPagesLimit(RandomPageAdministration.DEFAULT_PAGES_LIMIT);
		this.save();
	};

	public save() {
		return element(by.id("confirm")).click();
	};

	public cancel() {
		return element(by.id("cancel")).click();
	};
}
