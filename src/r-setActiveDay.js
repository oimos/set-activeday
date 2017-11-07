;(function (window, $) {
	'use strict';
	if (typeof $ !== 'function') {
		return;
	}
	var SetActiveDay = function() {
	    this.activeElArray = [];
	    this.activeDayArray = [];
	    this.numSetDay = [];
		this.numCompareResult = [];
		this.getElements();
		this.compareActiveDay();
		this.render();
	};
	SetActiveDay.prototype = {
	    defaults: {
	        activeDay: 0
	    },
		getElements: function(){
			this.$elements = $('.js-activeDayTarget');
		},
		compareActiveDay: function(){
			var that = this;
			var jDay = this.convertToServerTimeZone();
			var day = jDay.getDay();

			// Store Days which are set on the elements
			this.$elements.each(function(idx){
				that.numSetDay.push( $(this).attr('data-activeDay').replace(/\,/g, '') );
			});

			// Store Boolean the each elements day is match with the current day
			$.each(this.numSetDay, function(){
				that.numCompareResult.push( this.indexOf(day) > -1 )
			});
		},
	    convertToServerTimeZone: function(){
	        var offset = +9.0; // JST +09:00
	        var clientDate = new Date();
	        var utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000); // 1000 * 60: min in sec
	        var serverDate = new Date(utc + (3600000 * offset)); // 1000 * 60 * 60: hour in sec
	        return serverDate;
	    },
	    render: function(){
	    	var that = this;
	    	$.each(this.numCompareResult, function(idx, val){
	    		val === true ? that.$elements.eq(idx).show() : that.$elements.eq(idx).hide();
	    	});
	    }
	};

	var ins = new SetActiveDay();

})(window, window.jQuery);