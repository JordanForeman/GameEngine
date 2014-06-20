/**
* @module Canvas
*/

var dependencies = [
	'entities/GameObject', 
	'helpers/RGB', 
	'helpers/Vector2', 
	'helpers/Sprite',
	'components/Renderable',
	'components/Movable', 
	'components/Controllable',
	'utils/ComponentIdentifiers',
	'utils/ControllerConstants'
];

define(dependencies, function(
		GameObject, 
		RGB, 
		Vector2, 
		Sprite, 
		Renderable, 
		Movable, 
		Controllable, 
		ComponentIdentifiers, 
		ControllerConstants
	){

	var Player = function(){

		this.gameObject = new GameObject();
		this.sprite = null;
		this.size = new Vector2(38, 58);

		//Renderable
		var playerColor = new RGB(0, 0, 0),
			initialPlayerPosition = new Vector2(0, 0),
			initialDirection = new Vector2(1, 1),
			playerSprite = this.getSprite(),
			renderableComponent = new Renderable(initialPlayerPosition, this.size, initialPlayerPosition, playerSprite);
		this.gameObject.setComponent(ComponentIdentifiers.RENDERABLE_COMPONENT, renderableComponent);

		//Movable
		var playerVelocity = 5,
			movableComponent = new Movable(renderableComponent, playerVelocity);
		this.gameObject.setComponent(ComponentIdentifiers.MOVABLE_COMPONENT, movableComponent);

		//Controllable
		var controllableComponent = new Controllable();
		
		controllableComponent.setResponse(ControllerConstants.KEY_LEFT, this.moveLeft);
		controllableComponent.setResponse(ControllerConstants.KEY_RIGHT, this.moveRight);
		controllableComponent.setResponse(ControllerConstants.KEY_UP, this.moveUp);
		controllableComponent.setResponse(ControllerConstants.KEY_DOWN, this.moveDown);

		this.gameObject.setComponent(ComponentIdentifiers.CONTROLLABLE_COMPONENT, controllableComponent);

	};

	//Movable Functions

	Player.prototype.getMovableComponent = function()
	{
		var movableComponent = this.gameObject.getComponent(ComponentIdentifiers.MOVABLE_COMPONENT);
		return movableComponent;
	};

	//Controllable Functions

	Player.prototype.moveLeft = function(player, canvas){
		var movableComponent = player.getMovableComponent();
		movableComponent.moveLeft();
	};

	Player.prototype.moveRight = function(player, canvas){
		var movableComponent = player.getMovableComponent();
		movableComponent.moveRight(canvas);
	};

	Player.prototype.moveUp = function(player, canvas){
		var movableComponent = player.getMovableComponent();
		movableComponent.moveUp();
	};

	Player.prototype.moveDown = function(player, canvas){
		var movableComponent = player.getMovableComponent();
		movableComponent.moveDown(canvas);
	};

	//Renderable Functions

	Player.prototype.getRenderableComponent = function()
	{
		var renderableComponent = this.gameObject.getComponent(ComponentIdentifiers.RENDERABLE_COMPONENT);
		return renderableComponent;
	};

	Player.prototype.getSprite = function(){
		if (!this.sprite)
			this.sprite = new Sprite('images/player.png', this.size, 4);
		return this.sprite;
	};

	Player.prototype.setRenderableProperty = function(property, value)
	{

		var renderableComponent = this.getRenderableComponent();
		renderableComponent[property] = value;
		this.gameObject.setComponent(ComponentIdentifiers.RENDERABLE_COMPONENT, renderableComponent);

	};

	Player.prototype.setColor = function(color)
	{
		setRenderableProperty("color", color);
	};

	Player.prototype.setSize = function(size)
	{
		setRenderableProperty("size", size);
	};

	Player.prototype.setPosition = function(position)
	{
		this.setRenderableProperty("position", position);
	};

	return Player;

});