/**
* @module Canvas
*/

var dependencies = [];

define(dependencies, function(){

	var _listener, _eventType, _callback, _name;

	var Event = function(name, eventType, listener, callback){

		_name = name;

		_eventType = eventType;
		_listener = listener;
		_callback = callback;

	};

	Event.prototype.attachEvent = function(){

		if (_listener.addEventListener)
			_listener.addEventListener(_eventType, _callback);
		else
			_listener.attachEvent('on' + _eventType, _callback);

	};

	Event.prototype.detachEvent = function(){

		_listener.removeEventListener(_eventType, _callback);

	};

	return Event;

});
