document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as tabelas com a classe 'law-table'
    const tables = document.querySelectorAll("table");

    tables.forEach((table) => {
        const tableBody = table.querySelector("tbody");

        // Verifica se o tbody existe
        if (!tableBody) return;

        const rows = Array.from(tableBody.querySelectorAll("tr"))
            .filter(row => !isNaN(parseInt(row.dataset.year, 10))); // Filtra linhas válidas

        // Ordena as linhas da tabela pelo atributo data-year
        const sortedRows = rows.sort((a, b) => {
            const yearA = parseInt(a.dataset.year, 10);
            const yearB = parseInt(b.dataset.year, 10);
            return yearA - yearB;
        });

        // Remove as linhas antigas e insere as ordenadas
        tableBody.innerHTML = "";
        sortedRows.forEach(row => tableBody.appendChild(row));
    });

    // Tornar todas as células '.law-name' clicáveis
    const lawCells = document.querySelectorAll('.law-name');
    lawCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const link = cell.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            } else {
                alert("Nenhum link disponível para esta portaria.");
            }
        });
    });
});

