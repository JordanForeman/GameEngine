/**
* @module Canvas
*/

var dependencies = [];

define(dependencies, function(){

	var components = [];

	var GameObject = function(){

	};

	GameObject.prototype.getComponent = function(identifier)
	{
		return components[identifier] || null;
	};

	GameObject.prototype.setComponent = function(identifier, component)
	{
		components[identifier] = component;
	};

	GameObject.prototype.hasComponent = function(identifier)
	{
		return (components[identifier] != null);
	};

	return GameObject;

});