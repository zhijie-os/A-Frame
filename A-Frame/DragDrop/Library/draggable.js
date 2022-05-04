let dragging = false;
let draggingEl = null;

AFRAME.registerComponent("draggable", {
    init: function () {
        this.el.addEventListener("mousedown", event => {
            console.log(event);
            dragging = true;
            draggingEl = this.el;
        });
        this.el.addEventListener("mouseup", event => {
            console.log(event);
            dragging = false;
        });
    },
    tick: function () {
        if (dragging) {
            // move the current box to the position of intersection

            let plane = document.querySelector("a-plane");
            let intersection = this.el.sceneEl.components.raycaster.getIntersection(plane);
            let position = intersection.point;
            console.log(position);
            draggingEl.setAttribute("position", position);
        }
    }
});