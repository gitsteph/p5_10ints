var coreSketch;

var sketch = function(p) {
    var cnv;
    var cnvWidth;
    var cnvHeight;

    function centerCanvas() {
        var x = (windowWidth - width) / 2;
        var y = (windowWidth - height) / 2;
        cnv.position(x, y);
    }

    function setup() {
        cnvWidth = windowWidth * 0.96;
        cnvHeight = windowHeight * 0.96;
        cnv = createCanvas(cnvWidth, cnvHeight);
        centerCanvas();
        cnv.style('display', 'block'); // to prevent scrollbars
        cnv.parent(coreSketch);
        cursor(CROSS);
    }

    function draw() {

    }

    function windowResized() {
      resizeCanvas(cnvWidth, cnvHeight);
      centerCanvas();
    }

    function mousePressed() {
    }
};

// testing out instance containers (https://p5js.org/examples/instance-mode-instance-container.html)
coreSketch = window.document.getElementById('#coreSketch');
new p5(sketch, coreSketch);
