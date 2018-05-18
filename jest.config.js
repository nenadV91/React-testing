const path = require('path');

module.exports = {
	testMatch: ["<rootDir>/tests/**/*.test.js"],
	setupTestFrameworkScriptFile : './tests/testSetup.js',
	modulePaths: ["<rootDir>/src/components"]
}