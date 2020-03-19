// Check off specfic todos by clicking
$("ul").on("click", "li", function() {
  // When li clicked --> Had to be added to Ul, to look to any clicks on li's inside as li's dont exsist on page load
  $(this).toggleClass("completed"); //Toggles the css .completed class on/off
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  //When span pressed inside the ul... as spans wont all exsist on page load
  $(this)
    .parent() // Gives us the li element not just the span
    .fadeOut(500, function() {
      $(this).remove();
    }); // Gives the parent element as a jQuery element, removing the li instead of the span
  event.stopPropagation(); // Stops event from bubbling up - fires on li, but doesnt bubble to li, cancelling the li event listener.
});

// On enter press into the text input
$("input[type='text']").keypress(function(event) {
  // If character code of button is 13 (enter button)
  if (event.which === 13) {
    let todoText = $(this).val(); //gets the input box value, save to a variable
    $(this).val(""); // empty input box value to clear it
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

//Open or close input field box
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
