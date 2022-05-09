const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Animation

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 10,
    dy: 5
};

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    // ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();    

    // Change position
    circle.x += circle.dx;
    circle.y += circle.dy;

    // Detect Side walls
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
    }

    // Detect top & bottom
    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }

    requestAnimationFrame(update);
}

update();