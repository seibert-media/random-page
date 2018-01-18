module.exports = {
	"env": {
		"browser": false,
		"node": true,
		"jasmine": true
	},
	"extends": [
		"../../.eslintrc.js",
		"plugin:jasmine/recommended",
		"plugin:protractor/recommended"
	],
	"plugins": [
		"jasmine",
		"protractor"
	],
	"globals": {
	},
	"rules": {
		"jasmine/no-spec-dupes": "off",
		"no-console": "off",
		"camelcase": "off"
	}
};
