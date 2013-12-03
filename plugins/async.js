// Thanks to ca0v for this code: https://gist.github.com/ca0v/7450696

define(["dojo/_base/kernel", "dojo/topic"], function(kernel, topic) {

	var w = kernel.global;
	var cb = "_googleApiLoadCallback";

	return {
		load : function(param, req, loadCallback) {
			if (!cb)
				return;
			w[cb] = function() {
				delete w[cb];
				cb = null;
				loadCallback();
			};
			require([param + "&callback=" + cb]);
		}
	};
}); 