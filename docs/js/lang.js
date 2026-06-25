/* lang.js — EN/ES toggle.
   Marks the current language in the pill, and on click swaps the
   /en/ <-> /es/ segment of the path so the reader lands on the same page
   in the other language. Choice persisted to localStorage "lang". */
(function () {
    const path = location.pathname;
    const isES = /\/es\//.test(path);
    const current = isES ? 'es' : 'en';
    try { localStorage.setItem('lang', current); } catch (e) {}

    const enEl = document.querySelector('.lang-toggle .lang-en');
    const esEl = document.querySelector('.lang-toggle .lang-es');
    if (enEl && esEl) {
        (isES ? esEl : enEl).classList.add('is-current');
    }

    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.setAttribute('aria-label', isES ? 'Cambiar a inglés' : 'Switch to Spanish');

    btn.addEventListener('click', function () {
        const next = isES ? 'en' : 'es';
        try { localStorage.setItem('lang', next); } catch (e) {}
        let target;
        if (/\/(en|es)\//.test(path)) {
            target = path.replace(/\/(en|es)\//, '/' + next + '/');
        } else {
            target = next + '/index.html';
        }
        location.href = target;
    });
})();
