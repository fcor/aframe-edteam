AFRAME.registerComponent("change-color", {
  schema: {
    color: { default: "pink" },
    event: { default: "mouseenter" }
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    var defaultColor = el.getAttribute("material").color;

    this.interval = 200;

    el.addEventListener(data.event, function () {
      el.setAttribute("color", data.color);
    });

    el.addEventListener("mouseleave", function () {
      el.setAttribute("color", defaultColor);
    });
  },
  tick: function (t) {
    if (t - this.time < this.interval) {
      return;
    }
    this.time = t;
    console.log("tick");
  },
  play: function () {
    console.log("play")
  },
  pause: function () {
    console.log("pause")
  }
});
