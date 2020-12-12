const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKStandardFeatures: '.OLSKStandardFeatures',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKStandardFeatures_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKStandardFeatures', function() {
		browser.assert.elements(OLSKStandardFeatures, 1);
	});
	
	it('shows OLSKFeatureList', function() {
		browser.assert.elements('.OLSKFeatureList', 1);
	});
	
});
