var dependencies = [
	'entities/Scene', 
	'entities/Player', 
	'helpers/Vector2'
];

define(dependencies, function(Scene, Player, Vector2){

	var _scene;

	var MainMenuScene = function(canvas){

		_scene = new Scene(canvas);

		var player = new Player();
		player.setPosition(new Vector2(150, 150));

		_scene.addGameObject("player", player);

	};

	MainMenuScene.prototype.userInput = function(event){
		_scene.userInput(event.keyCode);
	};

	MainMenuScene.prototype.update = function(){
		_scene.update();
	};

	return MainMenuScene;

});
