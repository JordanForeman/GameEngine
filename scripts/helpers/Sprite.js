var dependencies = [];

define(dependencies, function(){

	var Sprite = function(src, size, frameDelay){

		this.src = src;
		this.img = new Image();
		this.img.src = src;

		this.frameDelay = frameDelay;

		this.size = {
			width: size.x,
			height: size.y
		};

	};

	return Sprite;

});
