
AFRAME.registerComponent('animate-box', {

    // tick means 1 second, updated with time3
    tick: function () {
        // position_y+=0.003;
        // // rotate_y+=0.3;
        // this.el.setAttribute('position',`0 ${position_y} -3`);
        // this.el.setAttribute('rotation', `0 ${rotate_y} 0`)

        this.el.object3D.position.y += 0.003;
        this.el.object3D.rotation.y += 0.01;
    }
})

let count = 0;
AFRAME.registerComponent('animate-sphere', {

    tick: function () {

        // I did not find radius inside object3D

        // change radius according to the scale
        this.el.object3D.scale.x += 0.001;
        this.el.object3D.scale.y += 0.001;
        this.el.object3D.scale.z += 0.001;
    }
});