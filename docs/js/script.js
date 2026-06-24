// Toggle topics accordion
function toggleTopic(button) {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Week button hover effect to show preview
document.querySelectorAll('.week-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        const preview = this.querySelector('.week-preview');
        if (preview) {
            preview.style.display = 'block';
        }
    });

    button.addEventListener('mouseleave', function() {
        const preview = this.querySelector('.week-preview');
        if (preview) {
            preview.style.display = 'none';
        }
    });
});

console.log('Learning Path Interactive Site Loaded');
