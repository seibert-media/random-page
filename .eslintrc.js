module.exports = {
	"env": {
		"browser": true
	},
	"globals": {
		"SeibertMedia": false,
		"AJS": false,
		"AuiFlag": false,
		"Confluence": false,
		"Backbone": false,
		"moment": false,
		"_": false
	},
	"extends": "eslint:recommended",
	"rules": {
		"no-extra-parens": "off", // NOT USEFUL - not in recommended?
		"no-inner-declarations": [
			"error",
			"functions"
		],
		"valid-jsdoc": "off",

		// metrics
		"max-len": ["warn", 160], // TODO: Useful! Fix it
		"max-statements": ["warn", 17], // TODO: Limit to be discussed
		"complexity": ["error", 7],
		"max-depth": ["error", 4],
		"max-nested-callbacks": ["error", 5],
		"max-params": ["error", 5],

		// best practices
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"block-scoped-var": "warn", // TODO: Useful! Fix it
		"consistent-return": "off", // not useful
		"curly": "warn", // TODO: Useful! Fix it
		"default-case": "error",
		"dot-location": ["warn", "property"],
		"dot-notation": "error",
		"eqeqeq": "warn", // TODO: Useful! Fix it
		"guard-for-in": "error",
		"no-alert": "warn", // TODO: Discuss! Maybe useful
		"no-caller": "error",
		"no-div-regex": "error",
		"no-else-return": "warn",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "off", // not useful (e.g. number+string concat)
		"no-implicit-globals": "warn", // TODO: Useful! Fix it
		"no-implied-eval": "error",
		"no-invalid-this": "off", // TODO: Discuss! Maybe useful
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-native-reassign": "error",
		"no-magic-numbers": ["off", {"ignoreArrayIndexes": true}], // TODO: Discuss! Probably not practicable (array.length === 0)
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off", // TODO: Discuss! Maybe useful
		"no-proto": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-void": "error",
		"no-warning-comments": "warn", // TODO: Discuss! Recommend "warn"
		"no-with": "error",
		"radix": "error",
		"vars-on-top": "off", // TODO: Discuss! Maybe not practical
		"wrap-iife": ["warn", "outside"], // TODO: Discuss! Useful
		"yoda": [
			"error",
			"never"
		],

		// strict mode
		"strict": "error",


		// variables
		"init-declarations": "off", // not useful
		"no-catch-shadow": "error",
		"no-label-var": "error",
		"no-restricted-globals": "error",
		"no-shadow": "error", // TODO: Useful! Fix it
		"no-shadow-restricted-names": "error",
		"no-undef-init": "off", // not useful
		"no-undefined": "off", // not useful
		"no-use-before-define": ["warn", {"functions": false}],  // TODO: Useful! Fix it

		// stylistic issues
		"array-bracket-spacing": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs"
		],
		"comma-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-this": ["error", "self"],
		"eol-last": "error",
		"func-names": "off", // TODO: Discuss! May be useful for debugging
		"func-style": ["warn", "declaration"],  // TODO: Useful! Fix it
		"id-blacklist": "off", // TODO: Turn on per plugin and specify ids
		"id-length": "off", // TODO: Turn on per plugin and specify length
		"id-match": "off", // not useful
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "off", // Not useful
		"new-cap": "warn", // TODO: Discuss!
		"new-parens": "error",
		"newline-after-var": "off", // TODO: Discuss!
		"newline-before-return": "off",
		"newline-per-chained-call": "off", // not usefull
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-continue": "error",
		"no-inline-comments": "off", // not useful
		"no-ternary": "off", // TODO: Discuss! Likely controversial
		"no-lonely-if": "error",
		"no-multiple-empty-lines": "error",
		"no-negated-condition": "warn", // TODO: Discuss
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-plusplus": ["warn", {"allowForLoopAfterthoughts": true}],
		"no-restricted-syntax": "error",
		"no-spaced-func": "error",
		"no-trailing-spaces": "error",
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-spacing": [
			"error",
			"never"
		],
		"one-var": ["error", "never"], // TODO: Useful! Fix me
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": "warn",
		"padded-blocks": "off",

		"quote-props": ["warn", "consistent-as-needed"], // TODO: Useful! Fix me
		"quotes": ["off", "double"], // TODO: Discuss! Likly controversial
		"require-jsdoc": "off",
		"semi": "error", // TODO: Useful! Fix me
		"semi-spacing": "error",
		"sort-imports": "error",
		"sort-vars": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": "off",
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always"
		],
		"wrap-regex": "error"
	}
};


