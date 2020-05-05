$(document).ready(function() {
  $(".click_c1").click(function() {
    $("#c1").show();
    $("#d2").hide();
  });

  $(".click_d2")
    .click(function() {
      $("#c1").hide();
      $("#d2").show();
    });


  $(".a_button").click(function() {
    $(".a_t").toggle('slow');
  });

  $(".b_button").click(function() {
    $(".b_t").toggle('slow');
  });
})
