/* notebook.js — expand/collapse code cells (Jupyter feel).
   Code is collapsed by default; the chevron + label toggle it.
   Labels are read from data-show / data-hide so each language localises them. */
(function () {
    const toggles = document.querySelectorAll('.code-toggle');
    toggles.forEach(function (btn) {
        const label = btn.querySelector('.toggle-label');
        btn.addEventListener('click', function () {
            const open = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!open));
            if (label) {
                label.textContent = open
                    ? (btn.dataset.show || 'Show code')
                    : (btn.dataset.hide || 'Hide code');
            }
        });
    });
})();
