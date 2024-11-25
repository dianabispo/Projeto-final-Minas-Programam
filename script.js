document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.dataset.title;
        const description = item.dataset.description;

        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;

        document.getElementById('modal').style.display = 'flex';
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

