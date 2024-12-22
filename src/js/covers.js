document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers-container');
  const animatedItems = document.querySelectorAll('.image-container');
  const coversItems = document.querySelectorAll('.covers-item');

  if (coversSection) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animatedItems.forEach(item => {
              item.style.animationPlayState = 'running';
            });
          } else {
            animatedItems.forEach(item => {
              item.style.animationPlayState = 'paused';
            });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(coversSection);
  }

  coversItems.forEach(item => {
    item.addEventListener('click', () => {
      animatedItems.forEach(i => {
        if (i.style.animationPlayState === 'running') {
          i.style.animationPlayState = 'paused';
        } else {
          i.style.animationPlayState = 'running';
        }
      });
    });
  });
});
