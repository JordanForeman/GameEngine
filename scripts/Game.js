/**
* @module Canvas
*/

var dependencies = [
	'helpers/RGB', 
	'helpers/Canvas',
	'helpers/EventManager',
	'scenes/MainMenuScene'
];

define(dependencies, function(RGB, Canvas, EventManager, MainMenuScene){

	var canvas = new Canvas();
	var EventManager = new EventManager();
	var _currentScene;

	var Game = function(){

	};

	Game.prototype.init = function(){

		canvas.resize();
		this.startupEvents();

		_currentScene = new MainMenuScene(canvas.getContext());

		requestAnimationFrame(this.update);

	};

	Game.prototype.update = function(){
		
		//TODO: fix this...it is weird
		var updateClosure = function(){
			_currentScene.update();
			requestAnimationFrame(updateClosure);
		};

		requestAnimationFrame(updateClosure);
	};

	Game.prototype.startupEvents = function(){

		EventManager.createEvent('WindowResizeEvent', 'resize', window, canvas.resize);

	};

	return Game;

});
