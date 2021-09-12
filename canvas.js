const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth / 2;

let painting = false;
function startPosition(e) {
    painting = true;
    draw(e);
}
function finishPosition() {
    painting = false;
    ctx.beginPath();
}
function draw(e) {
    if(!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);

function setClr(clr) {
    ctx.strokeStyle = clr;
}

function clear() {

}