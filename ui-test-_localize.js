const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKStandardFeatures_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		uLocalized('OLSKWordingStandardFeaturesArray').forEach(function ([name, blurb], i) {

			it('localizes KOMVitrineStandardFeaturesItem', function () {
				browser.assert.text(`${ OLSKStandardFeaturesItem }:nth-child(${ i + 1 }) ${ OLSKStandardFeaturesItemName }`, name);
			});

			it('localizes KOMVitrineStandardFeaturesBlurb', function () {
				browser.assert.text(`${ OLSKStandardFeaturesItem }:nth-child(${ i + 1 }) ${ OLSKStandardFeaturesItemBlurb }`, blurb);
			});
			
		});

	});

});
