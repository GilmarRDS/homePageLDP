
const toggleButton = document.getElementById('toggle-table-btn');
const toggleIcon = document.getElementById('toggle-icon');
const table = document.getElementById('federal-laws');

toggleButton.addEventListener('click', () => {
    if (table.style.display === '' || table.style.display === 'table') {
        table.style.display = 'none'; // Oculta a tabela
        toggleIcon.classList.remove('bi-eye-slash');
        toggleIcon.classList.add('bi-eye'); // Atualiza para o ícone de "mostrar"
    } else {
        table.style.display = 'table'; // Exibe a tabela
        toggleIcon.classList.remove('bi-eye');
        toggleIcon.classList.add('bi-eye-slash'); // Atualiza para o ícone de "ocultar"
    }
});
