var dependencies = [];

define(dependencies, function(){

	var Physics = function(velocity){

		this.velocity = velocity;

	};

	Physics.prototype.setVelocity = function(newVelocity)
	{
		this.velocity = newVelocity;
	}

	return Physics;

});
