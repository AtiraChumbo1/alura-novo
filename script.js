document.querySelectorAll('.projeto a').forEach(link => {
    link.addEventListener('click', function() {
        alert('Você clicou em ' + this.textContent);
    });
});

