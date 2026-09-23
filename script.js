// Analytics config — paste your IDs to start tracking (leave empty to disable)
const GA4_MEASUREMENT_ID = ""; // e.g. "G-XXXXXXXXXX"
const META_PIXEL_ID = ""; // e.g. "123456789012345"

(function loadAnalytics() {
  if (GA4_MEASUREMENT_ID) {
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_MEASUREMENT_ID;
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA4_MEASUREMENT_ID);
  }

  if (META_PIXEL_ID) {
    const fbScript = document.createElement("script");
    fbScript.async = true;
    fbScript.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(fbScript);
    window.fbq = window.fbq || function () {
      (fbq.callMethod ? fbq.callMethod : fbq.queue).push(arguments);
    };
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");
    fbq("track", "ViewContent");
  }
})();

document.querySelectorAll("[data-view-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const board = button.closest("[data-design-board]");
    if (!board) return;

    const view = button.dataset.viewToggle;
    board.dataset.activeView = view;

    board.querySelectorAll("[data-view-toggle]").forEach((toggle) => {
      const active = toggle === button;
      toggle.classList.toggle("is-active", active);
      toggle.setAttribute("aria-pressed", String(active));
    });
  });
});

document.querySelectorAll(".menu-button").forEach((button) => {
  const navbar = button.closest(".navbar");
  if (!navbar) return;

  button.addEventListener("click", () => {
    const open = navbar.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  navbar.querySelectorAll(".navlinks a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    });
  });
});

// Scroll-reveal animation for project cards and feature sections
const scrollReveal = () => {
  const items = document.querySelectorAll(".project-card, .feature-card, .reveal");
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = (index * 80) % 240;
          entry.target.style.transitionDelay = delay + "ms";
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => item.classList.add("reveal-on-scroll"));
  items.forEach((item) => observer.observe(item));
};
scrollReveal();

const form = document.querySelector(".contact-form");
if (form) {
  const statusEl = form.querySelector(".form-status");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!statusEl || !submitBtn) return;

    statusEl.textContent = "Sending…";
    statusEl.className = "form-status";
    submitBtn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok && !res.redirected) {
        statusEl.textContent = "Thanks! Your enquiry has been sent. We'll be in touch shortly.";
        statusEl.className = "form-status form-status--success";
        form.reset();
      } else {
        statusEl.textContent = "Something went wrong. Please try again or call us on +61 406 660 915.";
        statusEl.className = "form-status form-status--error";
      }
    } catch (err) {
      statusEl.textContent = "Network error. Please try again or email info@royalbuilder.com.au.";
      statusEl.className = "form-status form-status--error";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
