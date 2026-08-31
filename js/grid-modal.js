/* ==========================================================================
   BENTO CARD EXPANSION & INTERACTIVE PROJECT MODALS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-content-area');
  const modalClose = document.getElementById('modal-close-btn');

  // Case study modal data for projects
  const modalData = {
    '01': {
      title: "Hero Overview - Kishore P",
      badge: "UI/UX DESIGNER",
      content: `
        <div style="display:flex; gap:1.5rem; align-items:center; flex-wrap:wrap;">
          <img src="assets/images/kishore_portrait.jpg" style="width:160px; height:200px; object-fit:cover; border-radius:12px; border:1px solid var(--accent-lime);" alt="Kishore P" />
          <div style="flex:1;">
            <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">Kishore P</h2>
            <p style="color:var(--accent-lime); font-weight:700; margin-bottom:1rem;">Senior UI/UX & Digital Product Designer</p>
            <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">
              Specializing in crafting intuitive, scalable digital interfaces. Experienced in end-to-end product design lifecycle from user research & wireframing to high-fidelity interactive prototypes and design systems.
            </p>
          </div>
        </div>
      `
    },
    '02': {
      title: "About Kishore P",
      badge: "BIOGRAPHY & METRICS",
      content: `
        <p style="color:var(--text-muted); line-height:1.7; font-size:1rem; margin-bottom:1.5rem;">
          Based in Coimbatore, Tamil Nadu, India. Passionate about solving complex user problems with minimalist aesthetics and robust user experience architectures.
        </p>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:1rem; background:rgba(255,255,255,0.03); padding:1.5rem; border-radius:12px; border:1px solid rgba(255,255,255,0.08);">
          <div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent-lime);">10+</div>
            <div style="color:var(--text-muted); font-size:0.8rem;">Happy Clients</div>
          </div>
          <div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent-lime);">20+</div>
            <div style="color:var(--text-muted); font-size:0.8rem;">Projects Completed</div>
          </div>
          <div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent-lime);">1+</div>
            <div style="color:var(--text-muted); font-size:0.8rem;">Years Experience</div>
          </div>
          <div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--accent-lime);">24/7</div>
            <div style="color:var(--text-muted); font-size:0.8rem;">Support</div>
          </div>
        </div>
      `
    },
    '05': {
      title: "MedixPro - Wholesale Pharmacy Mobile App",
      badge: "FEATURED CASE STUDY",
      content: `
        <img src="assets/images/medixpro_app.jpg" style="width:100%; max-height:300px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" alt="MedixPro" />
        <h3 style="margin-bottom:0.5rem; color:var(--accent-lime);">Overview & Challenge</h3>
        <p style="color:var(--text-muted); line-height:1.6; font-size:0.95rem; margin-bottom:1rem;">
          Pharmacy owners often struggle with cumbersome offline order management and delayed medicine deliveries. MedixPro digitizes wholesale medicine ordering, providing inventory analytics, order tracking, and instant B2B payment settlement.
        </p>
        <h4 style="margin-bottom:0.5rem;">Key Responsibilities</h4>
        <ul style="color:var(--text-muted); font-size:0.9rem; line-height:1.8; margin-left:1.2rem;">
          <li>UX Research & Stakeholder Interviews</li>
          <li>User Journey Mapping & Low-Fidelity Wireframes</li>
          <li>High-Fidelity Component Library & Design System</li>
          <li>Interactive Prototype & Usability Testing with 15+ Pharmacy Owners</li>
        </ul>
      `
    },
    '06': {
      title: "Vebaura - Digital Agency Website",
      badge: "WEB DESIGN & BRANDING",
      content: `
        <img src="assets/images/vebaura_website.jpg" style="width:100%; max-height:300px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" alt="Vebaura" />
        <h3 style="margin-bottom:0.5rem; color:var(--accent-lime);">Digital Identity & Conversion Optimization</h3>
        <p style="color:var(--text-muted); line-height:1.6; font-size:0.95rem; margin-bottom:1rem;">
          Vebaura required a cutting-edge digital agency website showcasing their tech solutions, cloud architecture, and marketing services. Designed with futuristic glowing cyan/blue aesthetics, ultra-smooth scrolling, and conversion-focused CTAs.
        </p>
      `
    },
    '07': {
      title: "Kishore Craft - Creative Agency",
      badge: "AGENCY PORTFOLIO",
      content: `
        <img src="assets/images/kishorecraft_mockup.jpg" style="width:100%; max-height:300px; object-fit:cover; border-radius:12px; margin-bottom:1.5rem;" alt="Kishore Craft" />
        <h3 style="margin-bottom:0.5rem; color:var(--accent-lime);">Creative Direction & Services</h3>
        <p style="color:var(--text-muted); line-height:1.6; font-size:0.95rem; margin-bottom:1rem;">
          A full-scale branding & agency showcase platform delivering digital experiences, motion graphics, and high-converting marketing assets.
        </p>
      `
    }
  };

  // Open modal on trigger click
  document.querySelectorAll('[data-modal-card]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (e.target.closest('.tab-btn') || e.target.closest('.copy-trigger')) return;

      const cardId = trigger.getAttribute('data-modal-card');
      const data = modalData[cardId];

      if (data && modalContainer) {
        modalContainer.innerHTML = `
          <div class="badge-pill" style="margin-bottom:0.75rem; background:var(--accent-lime-subtle); color:var(--accent-lime); border-color:var(--accent-lime);">${data.badge}</div>
          <h2 style="font-size:1.75rem; margin-bottom:1.25rem;">${data.title}</h2>
          ${data.content}
        `;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
});
