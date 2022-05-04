
AFRAME.registerComponent('box-generate', {
    init: function () {
        this.el.addEventListener("click", event => {
            let plane = document.querySelector("a-plane");
            let intersection = this.el.sceneEl.components.raycaster.getIntersection(plane);
            let position = intersection.point;
            let box = document.createElement("a-box");
            box.setAttribute("position", position);
            box.setAttribute("color", "red");
            box.setAttribute("scale", "0.4 0.4 0.4");
            box.setAttribute("draggable", "");
            this.el.sceneEl.appendChild(box);
        });
    }
})