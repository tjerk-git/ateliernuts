document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", function (e) {
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  });

  window.addEventListener("mouseleave", function () {
    cursor.style.opacity = "0";
  });

  window.addEventListener("mouseenter", function () {
    cursor.style.opacity = "1";
  });

  document.querySelectorAll(".link").forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      cursor.style.transform = "scale(3.2)";
    });

    link.addEventListener("mouseleave", function () {
      cursor.style.transform = "scale(1)";
    });
  });

  window.addEventListener("mousedown", function () {
    cursor.style.transform = "scale(0.2)";
  });

  window.addEventListener("mouseup", function () {
    cursor.style.transform = "scale(1)";
  });
});