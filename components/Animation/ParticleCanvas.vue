<script lang="ts" setup>
interface Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    trail: { x: number, y: number }[];
}

const props = withDefaults(defineProps<{
    radius?: number;
    maxSpeed?: number;
    trailLength?: number;
    particleCount?: number;
}>(), {
  radius: 5,
  maxSpeed: 3.5,
  trailLength: 30,
  particleCount: 70
});

const canvas = ref<HTMLCanvasElement>();
const width = ref<number>(0);
const height = ref<number>(0);
const particles = ref<Particle[]>([]);

const colorStore = useColorStore();
const color = computed(() => colorStore.currentColor);

onMounted(() => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;

  for (let i = 0; i < props.particleCount; i++) {
    particles.value.push({
      x: Math.random() * width.value,
      y: Math.random() * height.value,
      dx: (Math.random() * props.maxSpeed - 1) * props.maxSpeed,
      dy: (Math.random() * props.maxSpeed - 1) * props.maxSpeed,
      trail: []
    });
  }

  if (canvas.value) {
    canvas.value.width = width.value;
    canvas.value.height = height.value;
  }

  animationLoop();
});

const rgbColor = computed(() => {
  return {
    amber: '251, 191, 36',
    sky: '056, 189, 248',
    emerald: '52, 211, 153',
    violet: '167, 139, 250',
    rose: '251, 113, 133',
    slate: '148, 163, 184'
  }[color.value] ?? '255, 255, 255';
});

function capVelocity (particle: Particle): void {
  const speed = Math.sqrt(particle.dx * particle.dx + particle.dy * particle.dy);

  if (speed > props.maxSpeed) {
    const ratio = props.maxSpeed / speed;
    particle.dx *= ratio;
    particle.dy *= ratio;
  }
}

function areColliding (p1: Particle, p2: Particle): boolean {
  const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  return distance < 2 * props.radius;
}

function reflect (p1: Particle, p2: Particle): void {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance >= 2 * props.radius) { return; } // No collision

  const normalX = dx / distance;
  const normalY = dy / distance;

  const relativeVelocityX = p1.dx - p2.dx;
  const relativeVelocityY = p1.dy - p2.dy;

  const dot = relativeVelocityX * normalX + relativeVelocityY * normalY;

  if (dot < 0) { return; } // Particles are moving away from each other, so no need to reflect

  const impulse = 2 * dot;

  p1.dx -= impulse * normalX;
  p1.dy -= impulse * normalY;
  p2.dx += impulse * normalX;
  p2.dy += impulse * normalY;

  capVelocity(p1);
  capVelocity(p2);
}

function drawParticles () {
  const ctx = canvas.value?.getContext('2d');
  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, width.value, height.value);
  particles.value.forEach((particle) => {
    for (let i = 0; i < particle.trail.length - 1; i++) {
      const progress = 1 - (i / (particle.trail.length - 1));
      const opacity = 0.5 - progress;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${rgbColor.value}, ${opacity})`;
      ctx.lineWidth = 1.3;
      ctx.moveTo(particle.trail[i].x, particle.trail[i].y);
      ctx.lineTo(particle.trail[i + 1].x, particle.trail[i + 1].y);
      ctx.stroke();
    }
  });
}

function updateParticles () {
  particles.value.forEach((particle) => {
    particle.trail.push({ x: particle.x, y: particle.y });
    if (particle.trail.length > props.trailLength) {
      particle.trail.shift();
    }

    particle.x += particle.dx;
    particle.y += particle.dy;

    if (particle.x < 0 || particle.x > width.value) {
      particle.dx *= -1;
    }

    if (particle.y < 0 || particle.y > height.value) {
      particle.dy *= -1;
    }
  });
}

function checkCollisions () {
  for (let i = 0; i < particles.value.length; i++) {
    for (let j = i + 1; j < particles.value.length; j++) {
      if (areColliding(particles.value[i], particles.value[j])) {
        reflect(particles.value[i], particles.value[j]);
      }
    }
  }
}

function animationLoop () {
  updateParticles();
  checkCollisions();
  drawParticles();
  requestAnimationFrame(animationLoop);
}
</script>

<template>
  <canvas ref="canvas" class="fixed inset-0 pointer-events-none" />
</template>
