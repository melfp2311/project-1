var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn")



$("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
$("#6Row").attr("data-time", moment("6:00 pm", "h:mm a").format("HH"));
$("#7Row").attr("data-time", moment("7:00 pm", "h:mm a").format("HH"));
$("#8Row").attr("data-time", moment("8:00 pm", "h:mm a").format("HH"));


$(document).ready(function () {
    localPlans();

    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    
    $("#currentDay").text(currentDay);


    
    for (var i = 0; i <= 12; i++) {
        var inputTime = $("#" + i + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

      
        if (currentTimeInt === inputTimeInt){
            $("#" + i + "Row").addClass("present");
            
        }

        else if (currentTimeInt > inputTimeInt){
            $("#" + i + "Row").addClass("past");
        }

        else if (currentTimeInt < inputTimeInt){
            $("#" + i + "Row").addClass("future");
        }

    };
 


    saveBtn.on("click", function () {
        
        var hour = $(this).attr("data-time");       
        var plan = $("#" + hour + "Row").val();
        console.log (plan)
        console.log (hour)
        localStorage.setItem(hour, plan,);

    });



    function localPlans() {
        for (var i = 0; i <= 12; i++) {
            
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }


});

