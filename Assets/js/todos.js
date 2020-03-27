$(init);

function init() {
  $("ul").sortable();
};

$("ul").on("click", ".checkboxAndTask", function() {
  $(this).parent().find(".task").toggleClass("task--completed");
  $(this).parent().find(".markComplete").toggleClass("fa-square fa-check-square");
});

$("ul").on("click", ".delete", function() {
  $(this).parent().fadeOut(300, function(event) {
    $(this).remove();
  });
});

$("input").click(function() {
  $(this).val("");
});

$("input").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("Add a new todo");
    $("ul").append(`
      <li class='taskContainer'>
        <div class='checkboxAndTask'>
          <i class='markComplete far fa-square'></i>
          <span class='task'>${todoText}</span>
        </div>
        <i class='delete fas fa-trash'></i>
      </li>
    `);
  }
 });
