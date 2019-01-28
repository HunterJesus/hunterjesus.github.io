var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var circles = [];

function drawCircle(circ) {
    c.beginPath();
    c.arc(circ.x, circ.y, circ.r, 0, Math.PI * 2, true);
    c.fillStyle = circ.color;
    c.fill();
    c.fillText("Yeeticus",circ.x,circ.y);
}

for (k = 0; k < 10; k++) {

    var rad = Math.random()*15 + 30;
    var x = Math.random() * (canvas.width - r*2) + r;
    var y = Math.random() * (canvas.height - r * 2) + r;
    var vy = (Math.random() - 0.5) * 8;
    var vx = (Math.random() - 0.5) * 8;
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    var col = 'rgb(' + r + ',' + g + ',' + b + ')';
    circles.push(new Circle(x, y, rad, vx, vy, col));

}


function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);

    for (k = 0; k < circles.length; k++) {
        circles[k].update(canvas.width, canvas.height);
        drawCircle(circles[k]);
    }
}

draw();






















/*Randomly makes 4 colors
var a = new Array(4);

for (i = 0; i < 4; i++) {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    a[i] = 'rgb(' + r + ',' +  g + ',' +  b + ')';
}

for (k = 0; k < 100; k++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);

    var num;

    if (x <= canvas.width / 2) {
        if (y <= canvas.height / 2) {
            num = 0;
        } else {
            num = 2;
        }
    } else {
        if (y <= canvas.height / 2) {
            num = 1;
        } else {
            num = 3;
        }
    }

    console.log(num);
    console.log(a[0]);
    c.strokeStyle = a[num];
    c.stroke();
}*/
