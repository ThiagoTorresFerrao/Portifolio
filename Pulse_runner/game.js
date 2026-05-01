const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let ground = 0;

function resizeCanvas() {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  ground = canvas.height * 1;
  player.y = ground - player.radius;
  player.velocityY = 0;
  player.onGround = true;
}

window.addEventListener("resize", resizeCanvas);

let running = false;
let gameOver = false;
let score = 0;
let best = localStorage.getItem("bestScore") || 0;

document.getElementById("best").innerText =
  "Best: " + String(best).padStart(5, "0");

  // SONS
const audio = new Audio("sound.mp3");
audio.loop = true;
const jumpSound = new Audio("sounds/jump.mp3");
const hitSound = new Audio("sounds/fahh.mp3");

// PLAYER
const player = {
  x: 100,
  y: 0,
  radius: 15,
  velocityY: 0,
  gravity: 0.6,
  jump: -12,
  onGround: true
};

resizeCanvas();

let obstacles = [];
let particles = [];
let deathParticles = [];

// STARS
let stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2
}));

function startGame() {
  running = true;
  document.getElementById("startScreen").classList.add("hidden");
  audio.play();
}

function restartGame() {
  location.reload();
}

function jump() {
  if (player.onGround && running && !gameOver) {
    player.velocityY = player.jump;
    player.onGround = false;

    jumpSound.currentTime = 0;
    jumpSound.play();

    for (let i = 0; i < 12; i++) {
      particles.push({
        x: player.x,
        y: player.y,
        vx: Math.random() * -3,
        vy: Math.random() * -3,
        life: 30
      });
    }
  }
}

function explode() {
  for (let i = 0; i < 40; i++) {
    deathParticles.push({
      x: player.x,
      y: player.y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      life: 60
    });
  }
}

// EVENTOS
window.addEventListener("keydown", e => {
  if (!running && e.code === "Space") startGame();
  else if (e.code === "Space") jump();
});

window.addEventListener("touchstart", () => {
  if (!running) startGame();
  else jump();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) audio.pause();
  else if (running) audio.play();
});

// OBSTÁCULOS
setInterval(() => {
  if (running && !gameOver) {
    obstacles.push({
      x: canvas.width,
      y: ground - 30,
      size: 30,
      type: Math.random() > 0.5 ? "square" : "triangle"
    });
  }
}, 1600);

// LOOP
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // estrelas
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.globalAlpha = Math.random();
    ctx.fillRect(s.x, s.y, s.size, s.size);
  });
  ctx.globalAlpha = 1;

  // chão neon
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "#00f0ff");
  gradient.addColorStop(1, "#ff00c8");

  ctx.strokeStyle = gradient;
  ctx.lineWidth = 3;
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#00f0ff";

  ctx.beginPath();
  ctx.moveTo(0, ground);
  ctx.lineTo(canvas.width, ground);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // PLAYER
  if (!gameOver) {
    ctx.beginPath();
    ctx.fillStyle = "#00f0ff";
    ctx.shadowBlur = 25;
    ctx.shadowColor = "#00f0ff";
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  if (running && !gameOver) {
    player.velocityY += player.gravity;
    player.y += player.velocityY;
  }

  if (player.y > ground - player.radius) {
    player.y = ground - player.radius;
    player.velocityY = 0;
    player.onGround = true;
  }

  // partículas de pulo
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.fillStyle = "#00f0ff";
    ctx.fillRect(p.x, p.y, 3, 3);

    if (p.life <= 0) particles.splice(i, 1);
  });

  // explosão
  deathParticles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.fillStyle = "#ff00c8";
    ctx.fillRect(p.x, p.y, 4, 4);

    if (p.life <= 0) deathParticles.splice(i, 1);
  });

  // obstáculos
  obstacles.forEach((obs, i) => {
    if (running && !gameOver) obs.x -= 6;

    ctx.shadowBlur = 20;
    ctx.shadowColor = "#ff00c8";
    ctx.fillStyle = "#ff00c8";

    if (obs.type === "square") {
      ctx.fillRect(obs.x, obs.y, obs.size, obs.size);
    } else {
      ctx.beginPath();
      ctx.moveTo(obs.x, obs.y + obs.size);
      ctx.lineTo(obs.x + obs.size / 2, obs.y);
      ctx.lineTo(obs.x + obs.size, obs.y + obs.size);
      ctx.fill();
    }

    ctx.shadowBlur = 0;

    // COLISÃO
    if (
      !gameOver &&
      player.x + player.radius > obs.x &&
      player.x - player.radius < obs.x + obs.size &&
      player.y + player.radius > obs.y
    ) {
      gameOver = true;
      running = false;
      audio.pause();

      hitSound.currentTime = 0;
      hitSound.play();

      explode();

      if (score > best) {
        localStorage.setItem("bestScore", score);
      }

      document.getElementById("gameOverScreen").classList.remove("hidden");
    }

    if (obs.x + obs.size < 0) {
      obstacles.splice(i, 1);
      score++;
      document.getElementById("score").innerText =
        "Score: " + String(score).padStart(5, "0");
    }
  });

  requestAnimationFrame(draw);
}

draw();