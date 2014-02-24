/**
* @module
*/
var dependencies = ['entities/GameObject'];

define(dependencies, function(GameObject){

	var _buttonColor,
		_buttonText,
		_gameObject;

	var Button = function(color, text){

		_gameObject = new GameObject();
		_buttonColor = color;
		_buttonText = text;

	};

	return Button;

});
