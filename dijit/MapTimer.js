/***************
 * CSS Includes
 ***************/
// Anonymous function to load CSS files required for this module
(function(){
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    // TODO: We don't want to use the widget path really
    link.href = require.toUrl("dijits/css/MapTimer.css");
    document.getElementsByTagName("head").item(0).appendChild(link);
})();

define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_WidgetBase", 
	"dijit/_TemplatedMixin", 
	"dojo/text!./templates/MapTimer.html"],
    function(declare, lang, _WidgetBase, _TemplatedMixin, template){
        return declare([_WidgetBase, _TemplatedMixin], {
        	// The template
        	templateString: template,        	
            baseClass: "maptimer",
            timer: { start: null, end: null },
            
			constructor: function (params, srcNodeRef) {
				this._timerLabel = params.timerLabel ? params.timerLabel : "Time to Pan/Zoom";
			},
            
            postCreate: function() {
            	// Call the base class methods
            	this.inherited(arguments);       	
            	
            	this.timerLabel.innerHTML = this._timerLabel + ": ";
            },            
                       
            updateTime: function() {
		    	if (this.timer.start) {
		          this.timer.end = new Date().getTime();
		          this.timerNode.innerHTML = (this.timer.end - this.timer.start) + "ms";
		          this.timer.start = null;
		          this.timer.end = null;
		        } else {
		        	this.timer.start = new Date().getTime();
		        }
		    },
		    
		    setGraphicCount: function(count) {
		    	this.countNode.innerHTML = count;
		    }
        });
	}
);