const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, 'en');
};

describe('OLSKStandardFeatures_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute);
	});

	uLocalized('OLSKStandardFeaturesArray').forEach(function (e, i) {

		describe('OLSKStandardFeaturesItemIdentity', function test_OLSKStandardFeaturesItemIdentity () {
			
			it('sets src', function () {
				browser.assert.attribute(`.OLSKFeatureListItem:nth-child(${ i + 1 }) .OLSKFeatureListItemImage`, 'src', [
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureSync.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureOffline.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureEverywhere.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureKeyboard.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureAccessible.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeaturePrivate.svg',
					][i]);
			});
			
			it('sets role', function () {
				browser.assert.attribute(`.OLSKFeatureListItem:nth-child(${ i + 1 }) .OLSKFeatureListItemImage`, 'role', 'presentation');
			});

		});
		
	});

});
