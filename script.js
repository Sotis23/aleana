document.addEventListener('DOMContentLoaded', (event) => {
    const btn = document.getElementById('more-btn');
    const moreInfo = document.getElementById('more-info');

    btn.addEventListener('click', () => {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            btn.textContent = 'Show Less';
        } else {
            moreInfo.style.display = 'none';
            btn.textContent = 'Learn More';
        }
    });
});
