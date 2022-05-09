const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Animation

// const circle = {
//     x: 200,
//     y: 200,
//     size: 30,
//     dx: 10,
//     dy: 5
// };

// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'cyan';
//     // ctx.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
//     ctx.fill();
// }

// function update() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle();    

//     // Change position
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     // Detect Side walls
//     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//         circle.dx *= -1;
//     }

//     // Detect top & bottom
//     if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
//         circle.dy *= -1;
//     }

//     requestAnimationFrame(update);
// }

// update();

// Animation 02 / Character

const image = document.getElementById('source');

const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 10,
    dx: 0,
    dy: 0,
};

function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();

}

function detectWalls() {
    // Left Wall
    if (player.x < 0) {
        player.x = 0;
    }

    // Right Wall
    if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }

    // Top Wall
    if (player.y < 0) {
        player.y = 0;
    }

    // Bottom Wall
    if (player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h;
    }
}

function update() {
    clear();

    drawPlayer();

    newPos();

    requestAnimationFrame(update);
}


function moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = player.speed;
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

