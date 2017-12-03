var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var minWidth = 35 / 100 * canvas.width; // Punct plecare Ox
var maxWidth = 65 / 100 * canvas.width; // Punct maxim Ox
var dx = 9; // Viteza Ox
var minHeight = 20 / 100 * canvas.height; // Punct plecare Oy
var maxHeight = 30 / 100 * canvas.height; // Punct maxim Oy
var dy = 1.5 // Viteza Oy
var x = minWidth;
var y = minHeight;
var w = maxWidth;
var h = maxHeight;
var alpha = 0;

function animate1() {
    c.beginPath();
    c.moveTo(minWidth, minHeight);
    c.lineTo(x, minHeight);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (x < maxWidth) x += dx;
    if (x > maxWidth) x == maxWidth;
}

function animate2() {
    c.beginPath();
    c.moveTo(maxWidth, minHeight);
    c.lineTo(maxWidth, y);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (y < maxHeight) y += dy;
    if (y > maxHeight) y == maxHeight;
}

function animate3() {
    c.beginPath();
    c.moveTo(maxWidth, maxHeight);
    c.lineTo(w, maxHeight);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (w > minWidth) w -= dx;
    if (w < minWidth) w == minWidth;
}

function animate4() {
    c.beginPath();
    c.moveTo(minWidth, maxHeight);
    c.lineTo(minWidth, h);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (h > minHeight) h -= dy;
    if (h < minHeight) h == minHeight;
}

function animate5() {
    c.font = "70px Comic Sans MS";
    c.fillStyle = "rgba(255, 255, 255, " + alpha + ")"
    c.fillText("Peron Kafe", canvas.width * 40 / 100, canvas.height * 28 / 100);
    if (alpha < 1) alpha += 0.0005;
}

function animate() {
    requestAnimationFrame(animate);
    animate1();
    animate2();
    animate3();
    animate4();
    animate5();
}

animate();
// Animatie titlu