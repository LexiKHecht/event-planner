// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
  var hour = dayjs().format('h');
  console.log(hour);
});

$(".time-div").each(function() {
  var timeDiv = $(this).attr("id").split("-")[1];
  console.log(timeDiv);
  var hour = dayjs().format('h');

  if (hour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("present");

  } else if (hour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");

  } else if (hour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
  }
});

//   $(".time").each(function() {
//     var currentTime = $(this).attr("id").split("-")[1];
//     var listHour = moment().format("HH");
// console.log(currentTime);
// console.log(listHour);
//     if (listHour == currentTime) {
//       $(this).addClass("present");
//       $(this).children(".description").addClass("present");

//     } else if (hour < currentTime) {
    

//   } else if (hour > currentTime) {
//       $(this).removeClass("future");
//       $(this).addClass("past");
//   }
// });



$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
});



$("#hour-09 .time-block").val(localStorage.getItem("1"));
$("#hour-10 .time-block").val(localStorage.getItem("2"));
$("#hour-11 .time-block").val(localStorage.getItem("3"));
$("#hour-12 .time-block").val(localStorage.getItem("4"));
$("#hour-13 .time-block").val(localStorage.getItem("5"));
$("#hour-14 .time-block").val(localStorage.getItem("6"));
$("#hour-15 .time-block").val(localStorage.getItem("7"));
$("#hour-16 .time-block").val(localStorage.getItem("8"));
$("#hour-17 .time-block").val(localStorage.getItem("9"));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
