const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKAppFeatureList_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		uLocalized('OLSKAppFeatureListArray').forEach(function ([name, blurb], i) {

			it('localizes KOMVitrineStandardFeaturesItem', function () {
				browser.assert.text(`.OLSKFeatureListItem:nth-child(${ i + 1 }) .OLSKFeatureListItemName`, name);
			});

			it('localizes KOMVitrineStandardFeaturesBlurb', function () {
				browser.assert.OLSKInnerHTML(`.OLSKFeatureListItem:nth-child(${ i + 1 }) .OLSKFeatureListItemBlurb`, blurb);
			});
			
		});

		context('OLSKAppFeatureListRepoURL', function () {

			const OLSKAppFeatureListRepoURL = Math.random().toString();
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage,
					OLSKAppFeatureListRepoURL,
				});
			});

			it('localizes OLSKAppFeatureOpenSourceName', function () {
				browser.assert.text(OLSKAppFeatureOpenSourceName, uLocalized('OLSKAppFeatureOpenSourceNameText'));
			});

			it('localizes OLSKAppFeatureOpenSourceBlurb', function () {
				browser.assert.OLSKInnerHTML(OLSKAppFeatureOpenSourceBlurb, require('OLSKString').OLSKStringFormatted(uLocalized('OLSKAppFeatureOpenSourceBlurbFormat'), OLSKAppFeatureListRepoURL));
			});
		
		});

	});

});
