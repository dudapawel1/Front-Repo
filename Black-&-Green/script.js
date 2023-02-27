$(document).on("scroll", function () {
  $(".videoHead").css("opacity", 1 - $(document).scrollTop() / 300);
});

// window.addEventListener("scroll", function (e) {
//   let distanceFromTop = this.document.body.scrollTop;
//   const asideRight = this.document.querySelector(".asideRight");
//   if (distanceFromTop > 900) {
//     asideRight.style.position = "fixed";
//   }
// });

var el = document.getElementById("elId");
var elTop = `${
  el.getBoundingClientRect().top - document.body.getBoundingClientRect().top
} + 50px`;

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > elTop) {
    el.style.position = "fixed";
    el.style.top = "150px";
  }
  //   else if (document.documentElement.scrollTop > elTop) {
  //     el.style.position = "static";
  //     el.style.top = "auto";
  //   }
});
