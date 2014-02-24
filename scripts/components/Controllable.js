/**
* @module
*/
var dependencies = [];

define(dependencies, function(Physics){

	/**
	* @class
	*/
	var Controllable = function(){

		this.responses = [];

	};

	Controllable.prototype.setResponse = function(keyCode, callback)
	{
		this.responses[keyCode] = callback;
	};

	Controllable.prototype.getTrigger = function(keyCode)
	{
		return this.responses[keyCode];
	};

	return Controllable;

});