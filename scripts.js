$(function () {
  //alert("Hello world!");
  var text = $("#texty");

  $(".grid-item").click(function () {
    text.val(text.val() + $(this).val());
  });
  $("#clear").click(function () {
    text.val("");
  });
});
