exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKStandardFeaturesStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
	}];
};

exports.OLSKControllerSharedStaticAssetFolders = function () {
	return [
		'node_modules',
	];
};
