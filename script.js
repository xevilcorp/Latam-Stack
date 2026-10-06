/**
 * LATAM STACK — INSTITUTIONAL INTERACTION ENGINE
 * Architectural, accessible, performant vanilla JavaScript
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. HERO SLIDESHOW CROSSFADE CONTROLLER
  // =========================================================================
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.slide-indicator');
  const SLIDE_DURATION = 7000; // 7 seconds per slide
  let currentSlide = 0;
  let slideTimer = null;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    // Update slides
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update indicators
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', 'true');
      } else {
        indicator.classList.remove('active');
        indicator.removeAttribute('aria-current');
      }
    });

    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlideTimer() {
    stopSlideTimer();
    slideTimer = setInterval(nextSlide, SLIDE_DURATION);
  }

  function stopSlideTimer() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  // Setup click events on indicators
  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const targetIndex = parseInt(indicator.getAttribute('data-slide'), 10);
      if (!isNaN(targetIndex) && targetIndex !== currentSlide) {
        showSlide(targetIndex);
        startSlideTimer(); // Reset auto timer after interaction
      }
    });
  });

  // Start initial slideshow
  if (slides.length > 0) {
    showSlide(0);
    startSlideTimer();
  }

  // Keyboard navigation for Hero
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      startSlideTimer();
    } else if (e.key === 'ArrowLeft') {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prev);
      startSlideTimer();
    }
  });

  // =========================================================================
  // 2. MOBILE NAVIGATION DRAWER
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    function openDrawer() {
      mobileDrawer.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      mobileDrawer.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  // =========================================================================
  // 3. HEADER STATE ON SCROLL
  // =========================================================================
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.style.backgroundColor = 'rgba(251, 251, 250, 0.98)';
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
      } else {
        header.style.backgroundColor = 'rgba(251, 251, 250, 0.94)';
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // =========================================================================
  // 4. CORPORATE CONTACT FORM HANDLING (Solemn, No Confetti)
  // =========================================================================
  const corporateForm = document.getElementById('corporateForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  if (corporateForm && formSuccessMessage) {
    corporateForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check form validity
      if (!corporateForm.checkValidity()) {
        corporateForm.reportValidity();
        return;
      }

      // Simulate formal registration
      const submitBtn = corporateForm.querySelector('.btn-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Processando registro...</span>';
      }

      setTimeout(() => {
        corporateForm.classList.add('hidden');
        formSuccessMessage.classList.add('active');
      }, 700);
    });
  }

})();
