$(document).ready(function() {
  $("form#answerForm").submit(function(event) {
    event.preventDefault();
    const dark = parseInt($("#dark").val());
    const animal = parseInt($("#animal").val());


      if (dark + animal >= 3) {
        $("#batman").show();
        $("#spiderman").hide();
      }  else {
        $("#spiderman").show();
        $("#batman").hide();
      }
      
  });
});