/*

isType.js


MIT License

Copyright (c) 2021 Bleart Emini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

declare var define: any;

(function (root: any, factory: any) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['exports'], factory);
	} else if (typeof exports === 'object') {
		// Node
		factory(exports);
	} else {
		factory((root.isType = {}));
	}
})(this, function (isType: any) {
	('use strict');

	let toString = Object.prototype.toString;

	/**
	 * @description Tests if it is a string
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.str = (test: any) => {
		return typeof test === 'string' || test instanceof String;
	};

	/**
	 * @description Tests if it is a number
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.num = (test: any) => {
		return typeof test === 'number' || test instanceof Number;
	};

	/**
	 * @description Tests if it is a boolean
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.bool = (test: any) => {
		return test === !!test || test instanceof Boolean;
	};

	/**
	 * @description Tests if it is a function
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.func = (test: any) => {
		return typeof test === 'function';
	};

	/**
	 * @description Tests if it is an array
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.arr =
		Array.isArray ||
		function (test: any) {
			return toString.call(test) === '[object Array]';
		};

	/**
	 * @description Tests if it is an object
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.obj = (test: any) => {
		return test === Object(test);
	};

	/**
	 * @description Tests if it is a Regex contructor
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.regex = (test: any) => {
		return !!(
			test &&
			test.test &&
			test.exec &&
			(test.ignoreCase || test.ignoreCase === false)
		);
	};

	/**
	 * @description Tests if it is a HTMLElement
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.element =
		typeof HTMLElement !== 'undefined'
			? (test: any) => {
					return test instanceof HTMLElement;
			  }
			: (test: any) => {
					return !!(test && test.nodeType === 1);
			  };

	/**
	 * @description Test if it is a SVG Element
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.svg =
		typeof HTMLElement !== 'undefined'
			? (test: any) => {
					return test instanceof SVGAElement;
			  }
			: (test: any) => {
					return !!(test && test.nodeType === 1);
			  };

	/**
	 * @description Tests if it is an Event
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.event =
		typeof HTMLElement === 'undefined'
			? (test: any) => {
					return test instanceof Event;
			  }
			: (test: any) => {
					return !!(test && test.nodeType === 1);
			  };

	/**
	 * @description Tests if it is a embed element
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.embed =
		typeof HTMLElement === 'undefined'
			? (test: any) => {
					return test instanceof HTMLEmbedElement;
			  }
			: (test: any) => {
					return !!(test && test.nodeType === 1);
			  };

	/**
	 * @description Tests if it is a script element
	 * @param {any} test Something to test
	 * @returns Boolean
	 */

	isType.script =
		typeof HTMLElement === 'undefined'
			? (test: any) => {
					return test instanceof HTMLScriptElement;
			  }
			: (test: any) => {
					return !!(test && test.nodeType === 1);
			  };

	/**
	 * @description
	 */

	isType.valid = {
		/**
		 * @description Tests if a URL link is valid
		 * @param {any} test Something to test
		 * @returns Boolean
		 */

		link: (test: any) => {
			var pattern = new RegExp(
				'^(https?:\\/\\/)?' + // protocol
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
					'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
					'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
					'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
					'(\\#[-a-z\\d_]*)?$',
				'i'
			); // fragment locator
			return !!pattern.test(test);
		},

		/**
		 * @description Tests if a regex is valid
		 * @param {any} test Something to test
		 * @returns Boolean
		 */

		regex: (test: any, flags?: any) => {
			try {
				flags ? new RegExp(test, flags) : new RegExp(test);
				return true;
			} catch (e) {
				return false;
			}
		},
	};
});
