sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.myUI5App.controller.MainView", {
            onInit: function () {
                const oView = this.getView();
                jQuery.ajax({
                    url: "https://jisong-sdk.cfapps.us10-001.hana.ondemand.com/users",
                    success: function(data){
                        const oModel = new sap.ui.model.json.JSONModel(data);
                        oView.setModel(oModel, "users");
                    },
                    error: function(error){
                        // eslint-disable-next-line no-console
                        console.log(error);
                    }
                })
            },
        });
    }
);
