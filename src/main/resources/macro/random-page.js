SeibertMedia.namespace("SeibertMedia.RandomPage");

/** @class */
SeibertMedia.RandomPage.Model = (function (AJS, Backbone) {
	"use strict";

	var RandomPage = Backbone.Model.extend({
		defaultPageCount: 1,
		url: AJS.contextPath() + "/rest/random-page/1.0/random-page",
		/** @param {int} pageCount
		 *  @return {JQueryXHR} */
		getRandomPages: function (pageCount) {
			return Backbone.ajax({
				url: this.url + "?pageCount=" + pageCount || this.defaultPageCount,
				type: "GET",
				contentType: "application/json",
				headers: {
					"Accept": "application/json",
					"X-Atlassian-Token": AJS.Meta.get("atl-token")
				}
			});
		}
	});

	return RandomPage;
}(
	AJS,
	Backbone
));
