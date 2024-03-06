// This code is used for keydown press
function myFunction(event) {
  if (
    event.key == "a" ||
    event.key == "b" ||
    event.key == "c" ||
    event.key == "d" ||
    event.key == "e" ||
    event.key == "f"
  )
    document.getElementById("result").value = event.key;
  const audio = $("audio").filter(`[data-key="${event.keyCode}"]`);
  audio[0].play();
  $("#akey").toggleClass("animation_a", event.key === "a");
  $("#bkey").toggleClass("animation_a", event.key === "b");
  $("#ckey").toggleClass("animation_a", event.key === "c");
  $("#dkey").toggleClass("animation_a", event.key === "d");
  $("#ekey").toggleClass("animation_a", event.key === "e");
  $("#fkey").toggleClass("animation_a", event.key === "f");
}
// This code is used for mouse click
function dis(val) {
  document.getElementById("result").value = val;
}

// This code is used for mouse hover on key
$("span input").mouseover(function () {
  $(this).css({
    border: "1px solid red",
  });
});

$("span input").mouseout(function () {
  $(this).css({
    border: "none",
  });
});
