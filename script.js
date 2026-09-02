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
        statusEl.textContent = "Something went wrong. Please try again or call us on +61 2 5550 1845.";
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
