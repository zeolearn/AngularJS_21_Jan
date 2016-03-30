$(document).ready(function(){
    console.log("here we go!")
    
    var currentStep = 0;

    $("#step1").hide();
    $("#step2").hide();

    $("#btnStep1").click(function(){
        
        $("#step1").show();
        $("#step2").hide();
        
        currentStep = 1;
        
        //Other code to update the application data
    })

    $("#btnStep2").click(function(){

        $("#step1").hide();
        $("#step2").show();

        currentStep = 2;

        //Other code to update the application data
    })

});