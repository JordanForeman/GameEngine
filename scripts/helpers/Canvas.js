/**
* @module Canvas
*/

var dependencies = [];

define(dependencies, function(){

	var canvasElement = document.getElementById("gameCanvas");
	var context = canvasElement.getContext("2d");

	/**
	* @class
	*/
	var Canvas = function(){

	};

	Canvas.prototype.getContext = function(){
		return context;
	};

	Canvas.prototype.resize = function(){

		canvasElement.width = window.innerWidth;
		canvasElement.height = window.innerHeight;

	};

	Canvas.prototype.drawScene = function(scene){

		scene.draw();

	};

	return Canvas;

});
