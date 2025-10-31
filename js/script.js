document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentImages = [];
  let currentIndex = 0;

  document.querySelectorAll('.show-project').forEach(button => {
    button.addEventListener('click', () => {
      const images = button.getAttribute('data-images').split(',');
      currentImages = images;
      currentIndex = 0;
      modalImg.src = currentImages[currentIndex];
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
  });

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
