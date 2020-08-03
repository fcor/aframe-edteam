AFRAME.registerComponent("collision-detector", {
  init: function () {
    var el = this.el;

    el.addEventListener("collide", function (e) {
      console.log("Red sphere has collided with: " + e.detail.body.el.id);
    });
  },
});

AFRAME.registerComponent("apply-force", {
  init: function () {
    var el = this.el;

    el.addEventListener("click", function (e) {
      el.body.applyForce(
       new CANNON.Vec3(0,0,-2000),
       new CANNON.Vec3().copy(el.getAttribute('position'))
      );
    });
  },
});
