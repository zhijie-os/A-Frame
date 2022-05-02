

let theta = 0;

let boxes = [];

AFRAME.registerComponent('move', {


    tick: function () {
        theta += 0.01;
        let x = Math.sin(theta);
        let z = Math.cos(theta);
        this.el.setAttribute('position', `${x} 0 ${z}`)
    }
})



AFRAME.registerComponent('box-generate', {

    // only called in the beginning
    init: function () {

        let x = 0;

        for (let i = 0; i < 10; i++) {
            x += 2;
            let box = document.createElement("a-box");
            box.setAttribute("color", "red");
            box.setAttribute("position", `${x} 0 -6`);
            box.setAttribute("rotation", "0 45 0");
            this.el.sceneEl.appendChild(box);

            boxes.push(box);
        }
    },
    tick: function () {
        theta +=0.,001;
        for (let i = 0; i < 10; i++) {
            let box = boxes[i];
            let pos = box.getAttribute('position');

            box.setAttribute('position',`${pos.x*Math.sin(theta)} 0 ${pos.z*Math.sin(theta)} `)
        }
    }
});
