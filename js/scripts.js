var blanks = ["name", "adjective", "noun", "verb"];

$(function () {
  $("form#madlib").submit(function(event) {
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput)
    });

  $("#content").show();
  event.preventDefault();
  });
});
