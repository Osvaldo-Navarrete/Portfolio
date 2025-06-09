const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Crear estrellas
const stars = [];
const numStars = 100; // Aumenta la cantidad para simular muchas estrellas

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 0.5 + Math.random() * 1.5, // Tamaño pequeño
    speed: 0.1 + Math.random() * 0.3,
    drift: (Math.random() - 0.5) * 0.2
  });
}

// Dibujar estrella (punto pequeño)
function drawStar(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'white'; // Puedes usar un color como #fff o con transparencia
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const s of stars) {
    s.y -= s.speed;
    s.x += s.drift;

    if (s.y + s.radius < 0) {
      s.y = canvas.height + s.radius;
      s.x = Math.random() * canvas.width;
    }

    drawStar(s.x, s.y, s.radius);
  }

  requestAnimationFrame(animate);
}

animate();
