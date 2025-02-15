function filterCards() {
    const select = document.getElementById('zodiacSelect');
    const selectedSign = select.value;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (selectedSign === 'all' || card.getAttribute('data-sign') === selectedSign) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
