const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKAppFeatureList: '.OLSKAppFeatureList',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKAppFeatureList_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKAppFeatureList', function() {
		browser.assert.elements(OLSKAppFeatureList, 1);
	});
	
	it('shows OLSKFeatureList', function() {
		browser.assert.elements('.OLSKFeatureList', 1);
	});
	
});
