/* theme.js — wire the moon/sun toggle.
   Initial theme is set pre-paint by an inline snippet in <head> to avoid FOUC.
   Here we only handle clicks, persistence and the aria-label. */
(function () {
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    function label() {
        const dark = root.getAttribute('data-theme') === 'dark';
        btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    label();

    btn.addEventListener('click', function () {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        label();
    });
})();
