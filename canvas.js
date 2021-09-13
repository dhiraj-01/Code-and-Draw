const editorEle = document.getElementById("editor");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let current_color = "#222222";
canvas.height = window.innerHeight;
canvas.width = window.innerWidth - editorEle.clientWidth;
const bound = canvas.getBoundingClientRect();

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
    if(current_color == "#fff") {
        ctx.lineWidth = 30;
    }
    else {
        ctx.lineWidth = 3;
    }
    ctx.lineCap = 'round';
    let x = e.clientX - bound.left;
    let y = e.clientY - bound.top;
    ctx.lineTo(x, y);
    ctx.stroke();
}
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);

function setClr(clr) {
    console.log(clr);
    ctx.strokeStyle = clr;
    current_color = clr;
}

function clean() {
    console.log("clear");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}