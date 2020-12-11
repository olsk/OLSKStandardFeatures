const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, 'en');
};

describe('OLSKStandardFeatures_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute);
	});

	uLocalized('OLSKWordingStandardFeaturesArray').forEach(function (e, i) {

		describe('OLSKStandardFeaturesItem', function test_OLSKStandardFeaturesItem () {
			
			it('classes OLSKCommonCard', function () {
				browser.assert.hasClass(`${ OLSKStandardFeaturesItem }:nth-child(${ i + 1 })`, 'OLSKCommonCard');
			});

			it('classes OLSKCommonFeatureCard', function () {
				browser.assert.hasClass(`${ OLSKStandardFeaturesItem }:nth-child(${ i + 1 })`, 'OLSKCommonFeatureCard');
			});

		});

		describe('OLSKStandardFeaturesItemIdentity', function test_OLSKStandardFeaturesItemIdentity () {
			
			it('sets src', function () {
				browser.assert.attribute(`${ OLSKStandardFeaturesItem }:nth-child(${ i + 1 }) ${ OLSKStandardFeaturesItemIdentity }`, 'src', [
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureSync.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureOffline.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeaturePrivate.svg',
						'/node_modules/OLSKUIAssets/_OLSKSharedFeatureEverywhere.svg',
					][i]);
			});
			
			it('sets role', function () {
				browser.assert.attribute(`${ OLSKStandardFeaturesItem }:nth-child(${ i + 1 }) ${ OLSKStandardFeaturesItemIdentity }`, 'role', 'presentation');
			});

		});
		
	});

});
