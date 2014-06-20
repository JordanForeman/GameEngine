require.config({

	paths: {
		//Include lib code here
	}

});

require(['Game'], function(Game){

	var game = new Game();
	game.init();

});
