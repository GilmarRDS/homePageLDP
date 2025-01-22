// document.addEventListener("DOMContentLoaded", () => {
//     const list = document.getElementById("municipal-laws");
//     const items = Array.from(list.children);

//     // Ordena os itens pelo atributo data-year
//     const sortedItems = items.sort((a, b) => {
//         const yearA = parseInt(a.querySelector("[data-year]").dataset.year, 10);
//         const yearB = parseInt(b.querySelector("[data-year]").dataset.year, 10);
//         return yearA - yearB;
//     });

//     // Remove os itens antigos e adiciona os ordenados
//     list.innerHTML = "";
//     sortedItems.forEach(item => list.appendChild(item));
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const tableBody = document.querySelector("#municipal-laws tbody");
//     const rows = Array.from(tableBody.querySelectorAll("tr"));

//     // Ordena as linhas da tabela pelo atributo data-year
//     const sortedRows = rows.sort((a, b) => {
//         const yearA = parseInt(a.dataset.year, 10);
//         const yearB = parseInt(b.dataset.year, 10);
//         return yearA - yearB;
//     });

//     // Remove as linhas antigas e insere as ordenadas
//     tableBody.innerHTML = "";
//     sortedRows.forEach(row => tableBody.appendChild(row));

//     // Tornar a célula da Lei clicável
//     const lawCells = document.querySelectorAll('.law-name');
//     lawCells.forEach(cell => {
//         cell.addEventListener('click', () => {
//             window.open(cell.getAttribute('data-link'), '_blank');
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as tabelas com a classe 'law-table'
    const tables = document.querySelectorAll(".law-table");

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



