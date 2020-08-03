AFRAME.registerComponent("change-color", {
  schema: {
    color: { default: "pink" },
    event: { default: "mouseenter" }
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    var defaultColor = el.getAttribute("material").color;

    el.addEventListener(data.event, function () {
      el.setAttribute("color", data.color);
    });

    el.addEventListener("mouseleave", function () {
      el.setAttribute("color", defaultColor);
    });
  },
});
