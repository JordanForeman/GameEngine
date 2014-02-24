var dependencies = [
	'entities/Scene', 
	'entities/Player', 
	'helpers/Vector2'
];

define(dependencies, function(Scene, Player, Vector2){

	var _scene;

	var MainMenuScene = function(context){

		_scene = new Scene(context);

		var player = new Player();
		player.setPosition(new Vector2(150, 150));

		_scene.addGameObject(player);

	};

	MainMenuScene.prototype.update = function(){
		_scene.update();
	};

	return MainMenuScene;

});
