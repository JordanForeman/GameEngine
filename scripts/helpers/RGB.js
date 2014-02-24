var dependencies = [];

define(dependencies, function(){

	var RGB = function(r, g, b)
	{
		this.r = r;
		this.g = g;
		this.b = b;
	};

	RGB.prototype.toString = function(){
		var strBuilder = 
		[
			"rgb(", 
			this.r, 
			",", 
			this.g, 
			",", 
			this.b, 
			")"
		];
						
		return strBuilder.join("");
	};

	return RGB;

});
