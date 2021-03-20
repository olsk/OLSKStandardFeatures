exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), Object.fromEntries((new URLSearchParams(req.query)).entries()));
		},
		OLSKRouteSignature: 'OLSKAppFeatureListStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
	}];
};

exports.OLSKControllerSharedStaticAssetFolders = function () {
	return [
		'node_modules',
	];
};
