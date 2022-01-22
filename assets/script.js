// global variables

// functions
// function to save tasks to local storage
function saveTask() {
  console.log($(this).parent());
  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();
  localStorage.setItem(time, task);
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
// user clicks save button
$(".js-Btn").on("click", saveTask);
