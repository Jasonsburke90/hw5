// global variables

// functions
// function to save tasks to local storage
function saveTask() {
  console.log($(this).parent());
  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();
  localStorage.setItem(time, task);
}
// function to adjust colors based on time of day
function colorAdjust() {
  const now = moment().hours();
  $(".row").each(function () {
    const currentRow = $(this);
    const rowTime = currentRow.data("time");
    if (rowTime < now) {
      $(this).addClass("past");
    } else if (rowTime === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
// reset local storage function
function saveReset() {
  localStorage.clear();
  window.location.reload();
}
// event listeners
// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// grab tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour13 .js-task").val(localStorage.getItem("hour13"));
$("#hour14 .js-task").val(localStorage.getItem("hour14"));
$("#hour15 .js-task").val(localStorage.getItem("hour15"));
$("#hour16 .js-task").val(localStorage.getItem("hour16"));
$("#hour17 .js-task").val(localStorage.getItem("hour17"));

// event listner save button
$(".js-Btn").on("click", saveTask);

// event listener reset button
$(".reset-Btn").on("click", saveReset);
// initialize colorAdjust
colorAdjust();
