define('add',[],function(){return function(a,b){return a+b}});
require.config({

	paths: {
		add: 'minify/add.min'
	}

});

require(['add'], function(add) {
	console.log( add(5,4) );
});
define("config", function(){});

