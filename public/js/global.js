;
define("global", function(){});

require.config({

	baseUrl: '/libs',
	paths: {
		'person': 'person.min.js',
	}
});

require(['global'], function() {console.log('global.js is loaded');});
define("config", function(){});


require.config({

	baseUrl: '/libs',
	paths: {
		'person': 'person.min.js',
	}
});

require(['global'], function() {console.log('global.js is loaded');});
define("config", function(){});

