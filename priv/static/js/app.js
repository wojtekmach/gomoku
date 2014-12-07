$(function() {
  var i = 0;
  $("#clickable td").on("click", function() {
    i++;
    var color = (i % 2 == 0) ? 'black' : 'white';
    $(this).html("<div class='circle " + color + "'></div>");
  });

  $("#clickable td[data-coords='0,0']").html("<div class='circle white'></div>");
  $("#clickable td[data-coords='0,1']").html("<div class='circle black'></div>");
  $("#clickable td[data-coords='0,2']").html("<div class='circle white'></div>");

  $("#clickable td[data-coords='1,0']").html("<div class='circle white'></div>");
  $("#clickable td[data-coords='1,1']").html("<div class='circle white'></div>");
  $("#clickable td[data-coords='1,2']").html("<div class='circle black'></div>");

  $("#clickable td[data-coords='2,0']").html("<div class='circle black'></div>");
  $("#clickable td[data-coords='2,1']").html("<div class='circle black'></div>");
  $("#clickable td[data-coords='2,2']").html("<div class='circle black'></div>");
});
