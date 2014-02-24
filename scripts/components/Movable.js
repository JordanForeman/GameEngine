/**
* @module
*/
var dependencies = ['helpers/Physics'];

define(dependencies, function(Physics){

	/**
	* @class
	*/
	var Movable = function(renderable, velocity){

		this.renderable = renderable;
		this.physics = new Physics(velocity);

	};

	Movable.prototype.moveRight = function(canvas){
		if ((this.renderable.position.x + this.renderable.size.width) < canvas.width)
			this.renderable.position.x += this.physics.velocity;
	};

	Movable.prototype.moveLeft = function(){
		if (this.renderable.position.x > 0)
			this.renderable.position.x -= this.physics.velocity;
	};

	Movable.prototype.moveUp = function(){
		if (this.renderable.position.y > 0)
			this.renderable.position.y -= this.physics.velocity;
	};

	Movable.prototype.moveDown = function(canvas){
		if ((this.renderable.position.y + this.renderable.size.height) < canvas.height)
			this.renderable.position.y += this.physics.velocity;
	};

	Movable.prototype.setVelocity = function(newVelocity)
	{
		this.physics.setVelocity(newVelocity);
	}

	return Movable;

});