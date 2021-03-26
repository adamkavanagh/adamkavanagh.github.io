sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.Overview", {

		onInit: function () {
			var route = this.getOwnerComponent().getRouter().getRoute("overview");
			route.attachPatternMatched(this.onPagePatternMatched, this);
		},

		onPagePatternMatched: function () {
			this.byId("overviewPage").scrollTo(0, 0);
		}

	});
});