sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.Footer", {

		var oInput = this.byId("refereeList");
        oInput.bindElement("/Referees/0");

	});
});