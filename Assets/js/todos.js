$( ".checkboxAndTask").click(function() {
  $(this).parent().find(".task").toggleClass("task--completed");
  $(this).parent().find(".markComplete").toggleClass("fa-square fa-check-square");
});

$(".delete").click(function() {
  $(this).parent().fadeOut(300, function() {
    $(this).remove();
  })
});

$("input").click(function() {
  $(this).val("");
});

$("input").on("keydown", (function(event) {
  if(event.which === 13) {
    alert("hey");
  }
}));
