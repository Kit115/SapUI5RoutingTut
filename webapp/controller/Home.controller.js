sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController",
    "sap/ui/core/UIComponent"
], function(BaseController) {
    "use strict";
    
    return BaseController.extend("sap.ui.demo.nav.controller.Home", {
        onGoSomewhere: function () {
            this.getRouter().getTargets().display("notFound", {
                fromTarget : "home" 
            }); 
        },
        onNavToEmployees : function () {
            this.getRouter().navTo("employeeList"); 
        }
    });
})