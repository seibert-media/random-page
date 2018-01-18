SeibertMedia.namespace("SeibertMedia.RandomPage");

(function (AJS) {
	"use strict";

	AJS.toInit(function () {
		try {
			SeibertMedia.RandomPage.View.create();
		} catch (e) {
			AJS.error(e);
		}
	});
}(
	AJS
));
