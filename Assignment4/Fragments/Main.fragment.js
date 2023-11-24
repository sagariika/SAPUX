sap.ui.define([
    "sap/ui/core/Fragment"
], function (Fragment) {
    "use strict";

    return {
        createRegistrationDialog: function (oController) {
            return Fragment.load({
                name: "com.ibm.sampleapp.fragments.Main",
                controller: oController
            });
        }
    };
});