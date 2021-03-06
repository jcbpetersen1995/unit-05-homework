var actualDay = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").text(actualDay);

onSave();

function onSave() {
    $("#9am").val(localStorage.nine);
    $("#10am").val(localStorage.ten);
    $("#11am").val(localStorage.eleven);
    $("#12pm").val(localStorage.twelve);
    $("#1pm").val(localStorage.one);
    $("#2pm").val(localStorage.two);
    $("#3pm").val(localStorage.three);
    $("#4pm").val(localStorage.four);
    $("#5pm").val(localStorage.five);
}

$(".saveBtn").on("click", function() {
  localStorage.nine =$("#9am").val();
  localStorage.ten =$("#10am").val();
  localStorage.eleven =$("#11am").val();
  localStorage.twelve =$("#12pm").val();
  localStorage.one =$("#1pm").val();
  localStorage.two =$("#2pm").val();
  localStorage.three =$("#3pm").val();
  localStorage.four =$("#4pm").val();
  localStorage.five =$("#5pm").val();
  console.log("test");
  });



  function addColors() {
    var d = new Date();
    var n = d.getHours();

        if (n > 9) {
            $(".time-block9am").addClass("past").removeClass("future, present");
            }
        else if (n < 9) {
            $(".time-block9am").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block9am").addClass("present").removeClass("past, future");
        }

        if (n > 10) {
            $(".time-block10am").addClass("past").removeClass("future, present");
            }
        else if (n < 10) {
            $(".time-block10am").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block10am").addClass("present").removeClass("past, future");
        }

        if (n > 11) {
            $(".time-block11am").addClass("past").removeClass("future, present");
            }
        else if (n < 11) {
            $(".time-block11am").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block11am").addClass("present").removeClass("past, future");
        }

        if (n > 12) {
            $(".time-block12pm").addClass("past").removeClass("future, present");
            }
        else if (n < 12) {
            $(".time-block12pm").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block12pm").addClass("present").removeClass("past, future");
        }

        if (n > 13) {
            $(".time-block1pm").addClass("past").removeClass("future, present");
            }
        else if (n < 13) {
            $(".time-block1pm").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block1pm").addClass("present").removeClass("past, future");
        }

        if (n > 14) {
            $(".time-block2pm").addClass("past").removeClass("future, present");
            }
        else if (n < 14) {
            $(".time-block2pm").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block2pm").addClass("present").removeClass("past, future");
        }

        if (n > 15) {
            $(".time-block3pm").addClass("past").removeClass("future, present");
            }
        else if (n < 15) {
            $(".time-block3pm").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block3pm").addClass("present").removeClass("past, future");
        }

        if (n > 16) {
            $(".time-block4pm").addClass("past").removeClass("future, present");
            }
        else if (n < 16) {
            $(".time-block4pm").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block4pm").addClass("present").removeClass("past, future");
        }

        if (n > 17) {
            $(".time-block5pm").addClass("past").removeClass("future, present");
            }
        else if (n < 17) {
            $(".time-block5pm").addClass("future").removeClass("past, present");
        }
        else {
            $(".time-block5pm").addClass("present").removeClass("past, future");
        };
  } 

    
$(document).ready(function () {
    addColors();
});
