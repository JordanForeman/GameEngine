/**
* @module Canvas
*/

var dependencies = ['events/Event'];

define(dependencies, function(Event){

	var activeEvents = [];

	var EventManager = function(){

	};

	EventManager.prototype.createEvent = function(eventName, eventType, listener, callback){

		var ev = new Event(eventName, eventType, listener, callback);
		activeEvents.push(ev);
		ev.attachEvent();

	};

	return EventManager;

});
