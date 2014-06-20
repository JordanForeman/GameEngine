/**
 * Created by jforeman on 6/20/2014.
 */

var dependencies = [
	'scenes/MainMenuScene'
];

define(dependencies, function(MainMenuScene){
	var _currentScene = null;
	var _canvas = null;

	var SceneManager = function(canvas) {
		_canvas = canvas;
		_currentScene = new MainMenuScene(_canvas); //Load Main Menu by Default
	};

	SceneManager.prototype.getCurrentScene = function() {
		return _currentScene;
	};

	SceneManager.prototype.updateCurrentScene = function() {
		_currentScene.update();
	};

	return SceneManager;

});
