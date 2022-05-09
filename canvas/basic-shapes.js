const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas.width = 200;

// fillRect()
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(200, 20, 150, 100);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100, 200, 150, 100);

// clearRect()
ctx.clearRect(25, 25, 140, 90);

// fillText()
ctx.font = '30px Arial';
ctx.strokeStyle = 'purple';
ctx.fillText('Bismillah', 400, 50);

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.strokeText("Cosmicqbit", 400, 100);

// Paths

// Color filled rectangle
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
ctx.fillStyle = 'coral';
ctx.fill();

// Outlined rectangle
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150, 200);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.stroke();

// Rectangle
ctx.beginPath();
ctx.rect(300, 50, 150, 150);
ctx.fillStyle = 'teal';
ctx.fill();

