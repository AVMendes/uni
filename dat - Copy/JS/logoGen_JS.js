function setup() {
    let canvas = createCanvas(160,160);
    canvas.parent('processing');
    canvas.id('logo-gen');
    rectMode(CENTER);
    background(255,0);

    let l = [(247.876*0.32)-61.969*0.32, 61.969*0.32, 61.969*0.32];
    let a = [(247.876*0.32)-61.969*0.32, 61.969*0.32, 371.814*0.32];
    let x = [random(l[0]/2+61.969*0.16, width-l[0]/2-61.969*0.16), random(l[1]/2, width-l[1]/2), random(l[2]/2, width-l[2]/2)];
    let y = [random(a[0]/2+61.969*0.16, height-a[0]/2-61.969*0.16), random(a[1]/2, height-a[1]/2), random(a[2]/2, height-a[2]/2)];

    stroke(0, 200);
    fill(0, 0);
    strokeWeight(61.969*0.32);
    ellipse(x[0], y[0], l[0], a[0]);

    noStroke();
    fill(0, 200);
    rect(x[1], y[1], l[1], a[1]);

    if (Math.floor(random(0, 2))===0) {
        translate(x[2], y[2]);
        rotate(PI/2);
        rect(0, 0, l[2], a[2]);
    } else {
        rect(x[2], y[2], l[2], a[2]);
    }
}

function draw() {

}