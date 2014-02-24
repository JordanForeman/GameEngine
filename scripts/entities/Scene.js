/**
* @module Canvas
*/

var dependencies = ['utils/ComponentIdentifiers'];

define(dependencies, function(ComponentIdentifiers){

	var _gameObjects = [];
	var _updateCount = 0;

	var Scene = function(canvas){
		this.canvas = canvas;
	};

	Scene.prototype.addGameObject = function(id, gameObject){
		_gameObjects.push(gameObject);
	};

	Scene.prototype.dropGameObject = function(gameObject){
		//TODO: drop game object
	};

	Scene.prototype.getGameObject = function(){

	};

	Scene.prototype.userInput = function(keyCode){

		for (var i = 0; i < _gameObjects.length; i++)
		{
			var gameObjectController = _gameObjects[i].gameObject.getComponent(ComponentIdentifiers.CONTROLLABLE_COMPONENT);
			if (gameObjectController)
			{
				gameObjectController.getTrigger(keyCode)(_gameObjects[i], this.canvas.getCanvas());
			}
		}

	};

	Scene.prototype.update = function(){

		//Reset scene prior to draw
		var clearWidth = this.canvas.getCanvas().width;
		var clearHeight = this.canvas.getCanvas().height;
		this.canvas.getContext().clearRect(0, 0, clearWidth, clearHeight);

		for (var i = 0; i < _gameObjects.length; i++)
		{

			var gameObjectRenderer = _gameObjects[i].gameObject.getComponent(ComponentIdentifiers.RENDERABLE_COMPONENT);
			if (gameObjectRenderer)
			{
				gameObjectRenderer.draw(this.canvas.getContext());
			}
		}

		_updateCount++;

	};

	return Scene;

});