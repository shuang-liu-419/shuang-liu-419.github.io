$(document).ready(function() {
      console.log("we loaded");

      $("#c1")
        .click(function() {
          $(".c1").show();
          $(".d2").hide();
        });

      $("#d2")
        .click(function() {
          $(".c1").hide();
          $(".d2").show();
        });


      $("button")
        .click(function() {
          $("t").slideToggle('slow');
        });
