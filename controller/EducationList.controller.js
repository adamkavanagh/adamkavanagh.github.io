sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.EducationList", {

		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var test1 = oItem.getBindingContext("education").getPath();
			if(test1.indexOf("Educations/0")>=0)
			{			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SAPDetail", {
					educationPath: oItem.getBindingContext("education").getPath().substr(12)
				});			
			}
			else
				{
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("detail", {
						educationPath: oItem.getBindingContext("education").getPath().substr(12)
					});
			
				}
	}
		

	});
});
