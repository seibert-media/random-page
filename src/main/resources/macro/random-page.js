SeibertMedia.namespace("SeibertMedia.RandomPage");

/** @class */
SeibertMedia.RandomPage.Model = (function (AJS, Backbone) {
	"use strict";

	var RandomPage = Backbone.Model.extend({
		defaultLimit: 1,
		url: AJS.contextPath() + "/rest/random-page/1.0/random-page",
		/** @param {int} limit
		 *  @return {JQueryXHR} */
		getRandomPages: function (limit) {
			return Backbone.ajax({
				url: this.url + "?limit=" + limit || this.defaultLimit,
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
