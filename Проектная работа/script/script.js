$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      // Видимый ли этот элемент
      $(".expand-btn").html("Скрыть");
    } else {
      $(".expand-btn").html("Посмотреть еще");
    }
  }); // on 'click'
  $(".play-button").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
});
