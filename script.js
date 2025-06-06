document.addEventListener('DOMContentLoaded', function() {
  const scene = document.querySelector('.proposal-scene');
  const chest = document.getElementById('chest');
  const sparklesContainer = document.querySelector('.sparkles');
  
  chest.addEventListener('click', function() {
    scene.classList.add('active');
    createSparkles();
  });
  
  function createSparkles() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Position around the ring (centered at 150px, 150px)
        const angle = Math.random() * Math.PI * 2;
        const radius = 30 + Math.random() * 20;
        const x = 150 + Math.cos(angle) * radius;
        const y = 150 + Math.sin(angle) * radius;
        
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.opacity = Math.random() * 0.7 + 0.3;
        sparkle.style.width = `${Math.random() * 4 + 2}px`;
        sparkle.style.height = sparkle.style.width;
        
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
      }, i * 100);
    }
  }
});