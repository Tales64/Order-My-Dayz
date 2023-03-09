// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var clock = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24]
$(function () {
  const ampm2military = ampm => ampm ? dayjs(`1/1/1 ${ampm}`).format("HH:mm:00") : null;

  var present = dayjs().format('hh:mm');
  const globalTime = present;
  const twelveHourTime = dayjs('1/1/1 ' + globalTime).format('hh:mm')
  // twelveHourTime = "02:00 pm"
  var buttonListEl = $('button')
  var time = document.querySelectorAll('div')
  var past = present >= time
  var next = present + 1
  var future = next
  getLocal ()
  console.log(ampm2military(present));
  console.log(past)
  console.log(twelveHourTime)
  console.log(present)
  // console.log(next)
  // console.log(future)
  function getLocal () {
  var user = localStorage.getItem(`hourlyTask9`)
  $(`.description-9`).append(user);
  }
  // ===============================================================================
  // storag arrea

  $(`.saveBtn-9`).on("click", function(event){
    event.preventDefault();
    var user = localStorage.getItem(`hourlyTask9`)
    $(`.description-9`).append(user);
    var hourlyTask9 = $(`.description-9`).val();
    localStorage.setItem(`hourlyTask9`, hourlyTask9);
    console.log(hourlyTasks)
})
    
    
    
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
  
  // ===============================================================================
  
  
// ========================================================================
// ========================================================================================
function updateClock() {
  var day = dayjs().format('MMM D, YYYY, hh:mm:ss a');
  $('#1a').text(day);
  
  // call this function again in 1000ms
  setTimeout(updateClock, 1000);
}
updateClock();
// ========================================================================
// event delegation

// ========================================================================================
});


