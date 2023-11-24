
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "yourAppName/fragments/Main.fragment"
], function (Controller, Main) {
    "use strict";

    return Controller.extend("com.ibm.sampleapp.controller.Main", {
        onInit: function () {
            // Initialize the controller
        },

        onRegisterPress: function () {
            // Load and open the Registration dialog
            Main.createRegistrationDialog(this).then(function (oDialog) {
                oDialog.open();
            });
        }
    });
});