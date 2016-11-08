require.config({
	baseUrl: './',
	paths: {
		zepto: 'theme/common/lib/zepto.min',
		swiper: 'theme/common/lib/swiper.min',
		underscore: 'theme/common/lib/underscore.min',
		jweixin: 'theme/common/lib/jweixin-1.0.0',
		resLoader: 'theme/resLoader',
		// turn : 'theme/common/lib/turn/turn',
		typing: 'theme/w_typing_text',
		// -------
		wutil: 'theme/common/wlib/w_shower_util',
		wplugin: 'theme/common/wlib/w_shower_plugin',
		shower: 'theme/shower'
	},
	shim: {
		'zepto': {
			// deps : [ 'jquery' ],
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'swiper': {
			exports: 'Swiper',
		},
		'jweixin': {
			exports: 'wx',
		},
		'resLoader': {
			exports: 'resLoader',
		},
	}
});

var isServerUrl = function() {
	var ht = window.location.hostname;
	if (ht != '' && ht != 'localhost' && ht != '127.0.0.1')
		return true;
	return false;
};

require(['theme/index'], function(index) {
	index.run();
	$(window).trigger('on_track_page_load');
});
