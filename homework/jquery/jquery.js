$(document).ready(function() {
  console.log("we loaded");

  $("#add").css("color", "#bada55");
  $("#extral").html("Bonus Time!!!!!");

  $('#button')
    .click(function() {
      $("#sweet").slideToggle('slow');
    });

  $("#button1")
    .click(function() {
      $("#bonus")
        .addClass("big-text");
    });

  $("#button2")
    .click(function() {
      $("#m").slideToggle('slow');
    });

  $("#button3")
    .click(function() {
      $("#p").slideToggle('slow');
    });

  $("#button4")
    .click(function() {
      $("#f").slideToggle('slow');
    });

  $("p")
    .mouseover(function() {
      $("p")
        .css("font-family", "Lacquer");
    });

  $("p")
    .mouseleave(function() {
      $("p")
        .css("background-color", "#F4A460");
    });


});
