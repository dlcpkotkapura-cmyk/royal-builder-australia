document.querySelectorAll("[data-view-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const board = button.closest("[data-design-board]");
    if (!board) return;

    const view = button.dataset.viewToggle;
    board.dataset.activeView = view;

    board.querySelectorAll("[data-view-toggle]").forEach((toggle) => {
      toggle.classList.toggle("is-active", toggle === button);
    });
  });
});

