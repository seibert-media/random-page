var SeibertMedia = SeibertMedia || {};

/**
 * Helper function for creating namespaces. Make sure this is loaded first to be available to all other modules.
 * @param {string} namespace Dot-separated namespace declaration
 */
SeibertMedia.namespace = function (namespace) {
	"use strict";

	var parts = namespace.split(".");
	var parent = SeibertMedia;

	// skip redundant leading global
	if (parts[0] === "SeibertMedia") {
		parts = parts.slice(1);
	}

	parts.forEach(function (part) {
		if (typeof parent[part] === "undefined") {
			parent[part] = {};
		}
		parent = parent[part];
	});
};