/**
* @module Canvas
*/

var dependencies = [
	'helpers/RGB', 
	'helpers/Canvas',
	'helpers/EventManager',
	'scenes/SceneManager'
];

define(dependencies, function(RGB, Canvas, EventManager, SceneManager){

	var canvas = new Canvas();
	var EventManager = new EventManager();
	var sceneManager = new SceneManager(canvas);

	var Game = function(){

	};

	Game.prototype.init = function(){

		canvas.resize();
		this.startupEvents();

		requestAnimationFrame(this.update);

	};

	Game.prototype.update = function(){
		
		//TODO: fix this...it is weird
		var updateClosure = function(){
			sceneManager.updateCurrentScene();
			requestAnimationFrame(updateClosure);
		};

		requestAnimationFrame(updateClosure);
	};

	Game.prototype.startupEvents = function(){

		EventManager.createEvent('WindowResizeEvent', 'resize', window, canvas.resize);
		EventManager.createEvent('ControllerInputEvent', 'keydown', window, sceneManager.getCurrentScene().userInput);

	};

	return Game;

});
