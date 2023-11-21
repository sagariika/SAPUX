sap.ui.define(['sap/ui/core/mvc/Controller','sap/m/MessageBox']),function(Controller,MessageBox){
return Controller.extend(['com.ibm.simpleapp.controller.Main'],{
    onInit: function() {

    },
    handleJsButtonClick:function(){
        console.log('js button is clicked');
        var jsbutton=sap.ui.getcore().byId('myjsbtn');
        jsbutton.attachPress(this.enableJsButton);
    },
    enableJsButton:function(){
        alert('Now Js button is enabled');
    },
    handleXmlButtonClick:function(){
        console.log('XML button clicked');
        var xmlButton=sap.ui.getcore().byId('myxmlbtn');
        xmlButton.attachPress(this.enableXmlButton);
    },
    enableXmlButton:function(){
        MessageBox.confirm('XML Button First is enabled');
    }

});
};

