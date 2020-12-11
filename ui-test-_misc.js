const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKStandardFeatures_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute);
	});


});
