const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKAppFeatureList: '.OLSKAppFeatureList',
	
	OLSKAppFeatureOpenSourceName: '.OLSKAppFeatureListItemOpenSource .OLSKFeatureListItemName',
	OLSKAppFeatureOpenSourceBlurb: '.OLSKAppFeatureListItemOpenSource .OLSKFeatureListItemBlurb',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKAppFeatureList_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKAppFeatureList', function() {
		return browser.assert.elements(OLSKAppFeatureList, 1);
	});
	
	it('shows OLSKFeatureList', function() {
		return browser.assert.elements('.OLSKFeatureList', 1);
	});

	it('hides OLSKAppFeatureOpenSourceName', function () {
		return browser.assert.elements(OLSKAppFeatureOpenSourceName, 0);
	});

	it('hides OLSKAppFeatureOpenSourceBlurb', function () {
		return browser.assert.elements(OLSKAppFeatureOpenSourceBlurb, 0);
	});

	context('OLSKAppFeatureListRepoURL', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKAppFeatureListRepoURL: Math.random().toString(),
			});
		});
		
		it('shows OLSKAppFeatureOpenSourceName', function () {
			return browser.assert.elements(OLSKAppFeatureOpenSourceName, 1);
		});

		it('shows OLSKAppFeatureOpenSourceBlurb', function () {
			return browser.assert.elements(OLSKAppFeatureOpenSourceBlurb, 1);
		});
	
	});
	
});
