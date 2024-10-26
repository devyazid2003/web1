// script.js
const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  sidebar.classList.toggle('show');
});

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add animation to track button (scale up)
const trackButton = document.querySelector('.track-button');
trackButton.addEventListener('click', () => {
  trackButton.style.transform = 'scale(1.1)';
  setTimeout(() => {
    trackButton.style.transform = 'scale(1)';
  }, 100);
});
// ... (rest of your JavaScript) ...

// Add animation to contact form button
const contactButton = document.querySelector('.animated-button');
contactButton.addEventListener('click', () => {
  contactButton.style.transform = 'scale(1.1)';
  setTimeout(() => {
    contactButton.style.transform = 'scale(1)';
  }, 100);
});

// ... (rest of your JavaScript) ...

