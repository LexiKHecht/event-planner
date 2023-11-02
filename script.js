// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var hour = dayjs().format('H');
  console.log(hour);
  init();
});

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  console.log(value);
  var time = $(this).parent().attr("id").split("-")[1];
  console.log(time);
  localStorage.setItem(time, JSON.stringify(value));
});

function renderSaved() {
  $(".time-div").each(function () {
    var timeBlockHour = $(this).attr("id").split("-")[1];
    console.log(timeBlockHour);
    var currentHour = dayjs().format('H');
    console.log(currentHour);
    
    var savedEvent = JSON.parse(localStorage.getItem(timeBlockHour));
    console.log(savedEvent);
    if (typeof savedEvent == 'string') {
      $(this).children(".description").text(savedEvent);
    }

  });
  
};

function init() {
  $(".time-div").each(function () {
    var timeBlockHour = $(this).attr("id").split("-")[1];
    console.log(timeBlockHour);
    var currentHour = dayjs().format('H');
    console.log(currentHour);
    if (currentHour == timeBlockHour) {
      $(this).addClass("present");
      $(this).children(".description").addClass("present");
  
    } else if (currentHour < timeBlockHour) {
      $(this).removeClass("present");
      $(this).addClass("future");
  
    } else if (currentHour > timeBlockHour) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }

  });
  renderSaved();
}




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
