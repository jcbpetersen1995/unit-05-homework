var actualDay = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").text(actualDay);

onLoad();

function onLoad(){
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


  function addColor() {
    var d = new Date();
    var n = d.getUTCHours() +1;
    if (n === 9 || n === 10 || n === 11 || n === 12 || n === 13 || n === 14 || n === 15 || n === 16 || n === 17) {
        $(".time-block9am").addClass("present").removeClass("past, future");
        $(".time-block10am").addClass("present").removeClass("past, future");
        $(".time-block11am").addClass("present").removeClass("past, future");
        $(".time-block12pm").addClass("present").removeClass("past, future");
        $(".time-block1pm").addClass("present").removeClass("past, future");
        $(".time-block2pm").addClass("present").removeClass("past, future");
        $(".time-block3pm").addClass("present").removeClass("past, future");
        $(".time-block4pm").addClass("present").removeClass("past, future");
        $(".time-block5pm").addClass("present").removeClass("past, future");
    } 

      else {
        $(".time-block9am").addClass("past").removeClass("present, future");
        $(".time-block10am").addClass("past").removeClass("present, future");
        $(".time-block11am").addClass("past").removeClass("present, future");
        $(".time-block12pm").addClass("past").removeClass("present, future");
        $(".time-block1pm").addClass("past").removeClass("present, future");
        $(".time-block2pm").addClass("past").removeClass("present, future");
        $(".time-block3pm").addClass("past").removeClass("present, future");
        $(".time-block4pm").addClass("past").removeClass("present, future");
        $(".time-block5pm").addClass("past").removeClass("present, future");
    }
}
$(document).ready(function () {
    addColor();
});
