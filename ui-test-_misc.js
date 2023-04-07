const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, 'en');
};

describe('OLSKAppFeatureList_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute);
	});

	uLocalized('OLSKAppFeatureListArray').forEach(function (e, i) {

		describe('OLSKFeatureListItemIcon', function test_OLSKFeatureListItemIcon () {
			
			it('sets src', function () {
				return browser.assert.attribute(`.OLSKFeatureListItem:nth-child(${ i + 1 }) .OLSKFeatureListItemIcon`, 'src', [
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureEverywhere.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureOffline.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureSync.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureKeyboard.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureTransport.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureAccessible.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeaturePrivate.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureZeroData.svg',
					][i]);
			});
			
			it('sets role', function () {
				return browser.assert.attribute(`.OLSKFeatureListItem:nth-child(${ i + 1 }) .OLSKFeatureListItemIcon`, 'role', 'presentation');
			});

		});
		
	});

});
