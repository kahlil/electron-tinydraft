// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const path = require('path');

console.log(path);

class Test {
	constructor(val) {
		this.__value = val;
	}

	log(cb) {
		console.log(this.__value);
		cb();
	}
}

const test = new Test('yeah');

test.log(() => console.log('smackdab'));
