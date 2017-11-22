var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var x = 0;
var dx = 5;
var y = 0;
var dy = 5;

function animate() {
    requestAnimationFrame(animate);
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(x, y);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if ((x != 350) && (y == 0)) x += dx;
    if ((x == 350) && (y != 50)) y += dy;
    if ((x != 0) && (y == 50)) x -= dx;
    if ((x == 0) && (y != 0)) y -= dy
}

animate();
// Animatie titlu 
function titlu() {
    var con = document.getElementById("intro");
    con.style.opacity = 1;
}