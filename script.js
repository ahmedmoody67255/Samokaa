// Dynamic Hearts Generator
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.style.fontSize = Math.random() * 10 + 15 + 'px';
  heart.style.opacity = Math.random() * 0.7 + 0.3;
  
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generate hearts periodically
setInterval(createHeart, 400);

// Smooth Scroll Reveal Effect
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => {
    photo.style.opacity = '0';
    photo.style.transform = 'translateY(30px)';
    photo.style.transition = 'all 0.6s ease-out';
    observer.observe(photo);
  });
});
