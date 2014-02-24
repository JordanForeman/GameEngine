/**
* @module
*/
var dependencies = [];

define(dependencies, function(){

	/**
	* @class
	*/
	var Renderable = function(rgbColor, position, size){
		this.color = rgbColor;
		this.position = position;
		this.size.width = size.x;
		this.size.height = size.y;
	};

	Renderable.prototype.position = function(){ return _position; };
	Renderable.prototype.color = function(){ return _color; };
	Renderable.prototype.size = function(){ return _size; };

	Renderable.prototype.draw = function(context)
	{
		//Renders a rectangle
		context.fillStyle = this.color;
		context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
	};

	return Renderable;

});