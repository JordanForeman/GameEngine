/**
* @module
*/
var dependencies = ['helpers/Vector2'];

define(dependencies, function(Vector2){

	/**
	* @class
	*/
	var Renderable = function(position, size, direction, sprite){

		this.context = null;
		this.position = position;
		this.size.width = size.x;
		this.size.height = size.y;
		this.sprite = sprite;

		this.currentFrameIndex = 0;

		this.direction = new Vector2(1, 1);
	};

	Renderable.prototype.position = function(){ return _position; };
	Renderable.prototype.size = function(){ return _size; };

	Renderable.prototype.draw = function(context)
	{
		var frame = this.getCurrentFrame();
		
		context.drawImage(
			this.sprite.img,
			frame.x,
			frame.y,
			this.size.width,
			this.size.height,
			this.position.x,
			this.position.y,
			this.size.width,
			this.size.height
		);
		context.restore();
	};

	Renderable.prototype.getCurrentFrame = function()
	{

		if (this.moving)
		{
			if (this.currentFrameIndex == 2)
				this.currentFrameIndex = 0;
			else
				this.currentFrameIndex++;

			this.moving = false;
		}

		var _x = this.currentFrameIndex * this.size.width;
		var _y;

		if (this.direction.x == 1 && this.direction.y == 1) // Bottom-Right
			_y = (this.size.height * 2);
		else if (this.direction.x == 1 && this.direction.y == -1) // Top-Right
			_y = (this.size.height * 3);
		else if (this.direction.x == -1 && this.direction.y == 1) // Bottom-Left
			_y = 0;
		else if (this.direction.x == -1 && this.direction.y == -1) //Top-Left
			_y = this.size.height;

		return {x : _x, y : _y};

	};

	return Renderable;

});