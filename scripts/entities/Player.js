/**
* @module Canvas
*/

var dependencies = [
	'entities/GameObject', 
	'helpers/RGB', 
	'helpers/Vector2', 
	'components/Renderable', 
	'utils/ComponentIdentifiers'
];

define(dependencies, function(GameObject, RGB, Vector2, Renderable, ComponentIdentifiers){

	var Player = function(){

		this.gameObject = new GameObject();

		//Renderable
		var playerColor = new RGB(0, 0, 0),
			initialPlayerPosition = new Vector2(0, 0),
			playerSize = new Vector2(10, 10),
			renderableComponent = new Renderable(playerColor, initialPlayerPosition, playerSize);

		this.gameObject.setComponent(ComponentIdentifiers.RENDERABLE_COMPONENT, renderableComponent);

	};

	Player.prototype.getRenderableComponent = function()
	{
		var renderableComponent = this.gameObject.getComponent(ComponentIdentifiers.RENDERABLE_COMPONENT);
		return renderableComponent;
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