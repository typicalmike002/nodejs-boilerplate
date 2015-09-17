require.config({

	paths: {
		add: 'minify/add.min'
	}

});

require(['add'], function(add) {
	console.log( add(5,4) );
});