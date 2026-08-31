/* ==========================================================================
   KISHORE P - VERTICAL PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initExpertiseBars();
  initProjectTabs();
  initCopyToClipboard();
  initContactForm();
  initBackToTop();
  initNavScrollSpy();
  initDownloadCV();
});

/* 1. Typewriter Animation for Hero Subtitle */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const words = ["UI/UX Designer", "Product Designer", "Web Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

/* 2. Scroll-triggered Progress Fill for Expertise Bars */
function initExpertiseBars() {
  const bars = document.querySelectorAll('.exp-bar-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const level = fill.getAttribute('data-level');
        if (level) {
          fill.style.width = level;
        }
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => observer.observe(bar));
}

/* 3. Category Tab Switching for Other Projects */
function initProjectTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const categoryLists = document.querySelectorAll('.other-projects-category');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-tab');
      categoryLists.forEach(list => {
        if (list.getAttribute('data-category') === category) {
          list.style.display = 'flex';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });
}

/* 4. Copy Contact Information Toast */
function initCopyToClipboard() {
  const copyTriggers = document.querySelectorAll('.copy-trigger');
  
  copyTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const text = trigger.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied to clipboard: ${text}`);
        }).catch(() => {
          showToast(`Contact: ${text}`);
        });
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* 5. Contact Form Handler */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast("Message sent successfully! Kishore will reply soon.");
    form.reset();
  });
}

/* 6. Back to Top Button */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* 7. Navbar Active Link ScrollSpy */
function initNavScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* 8. Download CV Button Handler */
function initDownloadCV() {
  const downloadBtn = document.getElementById('download-cv-btn');
  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', (e) => {
    // Let the native download attribute handle the download
    showToast("CV download initiated! Kishore_P_Resume.pdf");
  });
}
