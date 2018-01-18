SeibertMedia.namespace("SeibertMedia.RandomPage");

/** @class */
SeibertMedia.RandomPage.View = (function ($, AJS, Backbone, Model, Soy) {
	"use strict";

	var RandomPageView = Backbone.View.extend({
		el: $("#randomPageWrapper"),
		model: new Model(),
		initialize: function () {
			this.render();
		},
		render: function () {
			var $el = $("#randomPageWrapper"); // line 8 does not work...
			$el.spin();
			this.model.getRandomPages($el.data("limit")).always(function() {
				$el.spinStop();
			}).done(function (randomPages) {
				$el.html(Soy.randomPages({pages: randomPages}));
			}).fail(function (err) {
				AJS.debug("failed to load random pages", err);
			})
		}
	});

	RandomPageView.create = function () {
		return new RandomPageView();
	};

	return RandomPageView;
}(
	AJS.$,
	AJS,
	Backbone,
	SeibertMedia.RandomPage.Model,
	SeibertMedia.RandomPage.Soy
));