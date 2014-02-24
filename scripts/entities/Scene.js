/**
* @module Canvas
*/

var dependencies = ['utils/ComponentIdentifiers'];

define(dependencies, function(ComponentIdentifiers){

	var _gameObjects = [];

	var Scene = function(context){
		this.context = context;
	};

	Scene.prototype.addGameObject = function(gameObject){
		_gameObjects.push(gameObject);
	};

	Scene.prototype.dropGameObject = function(gameObject){
		//TODO: drop game object
	};

	Scene.prototype.update = function(){

		for (var i = 0; i < _gameObjects.length; i++)
		{
			var gameObjectRenderer = _gameObjects[i].gameObject.getComponent(ComponentIdentifiers.RENDERABLE_COMPONENT);
			if (gameObjectRenderer)
			{
				gameObjectRenderer.draw(this.context);
			}
		}

	};

	return Scene;

});