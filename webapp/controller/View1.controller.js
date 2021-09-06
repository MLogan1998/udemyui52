sap.ui.define([
	"sap/ui/core/mvc/Controller"
],

	function (Controller) {
		"use strict";

		return Controller.extend("udemy2.controller.View1", {
			onInit: function () {
                // Instantiate OData Model
                var oDataModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(frik512zde0sxh4jiifyhqo4))/OData/OData.svc/");
                // Set Model On View
                this.getView().setModel(oDataModel);
			}
		});
	});
