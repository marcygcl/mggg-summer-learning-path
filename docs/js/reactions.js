/* reactions.js — local emoji-style reactions, no backend.
   Counts + pressed state persist per page in localStorage. */
(function () {
    const buttons = document.querySelectorAll('.reaction');
    if (!buttons.length) return;

    const page = location.pathname;

    buttons.forEach(function (btn) {
        const kind = btn.dataset.reaction || 'react';
        const countKey = 'react:' + page + ':' + kind + ':count';
        const mineKey = 'react:' + page + ':' + kind + ':mine';
        const countEl = btn.querySelector('.count');

        let count = parseInt(safeGet(countKey) || '0', 10);
        let mine = safeGet(mineKey) === '1';
        render();

        btn.addEventListener('click', function () {
            if (mine) { count = Math.max(0, count - 1); mine = false; }
            else { count = count + 1; mine = true; }
            safeSet(countKey, String(count));
            safeSet(mineKey, mine ? '1' : '0');
            render();
        });

        function render() {
            if (countEl) countEl.textContent = String(count);
            btn.classList.toggle('reacted', mine);
            btn.setAttribute('aria-pressed', String(mine));
        }
    });

    function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
    function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
})();
