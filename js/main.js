
//START Accordeon functions//

$('div.alert_box_wrap .panel-heading a').click(function() {
    if($(this).parent().hasClass('active_alert')){
        $('.panel-heading').removeClass('active_alert');
    }
    else {
        $('.panel-heading').removeClass('active_alert');
        $(this).parents('.panel-heading').addClass('active_alert');
        $(this).parent().addClass('active_alert');
    }
});

$('.panel-heading > a').click(function() {

    if($(this).parent().hasClass('active_accord')){
        $('.panel-heading').removeClass('active_accord');
    }
    else {
        $('.panel-heading').removeClass('active_accord');
        $(this).parents('.panel-heading').addClass('active_accord');
        $(this).parent().addClass('active_accord');
    }
});

//END Accordeon functions//


//START PopUp window//
$(function(){
    $("#zurueckweisen").click(function(){
        $("#divpopup").dialog({
            title:"OPTIONEN",
            width:430,
            height:250,
            modal:true,
            buttons:{
                "ABSCHICKEN":
                    function(){
                        $(this).dialog("close")
                    },
                "ZUR WEBSEITE":
                    function(){
                        $(this).dialog("close")
                    }
            }
        })
    })
})
//ENDPopUp window//