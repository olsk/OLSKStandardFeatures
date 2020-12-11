const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKStandardFeatures: '.OLSKStandardFeatures',
	
	OLSKStandardFeaturesItem: '.OLSKStandardFeaturesItem',
	OLSKStandardFeaturesItemIdentity: '.OLSKStandardFeaturesItemIdentity',
	OLSKStandardFeaturesItemName: '.OLSKStandardFeaturesItemName',
	OLSKStandardFeaturesItemBlurb: '.OLSKStandardFeaturesItemBlurb',
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
	
});
