const form = document.getElementById('ipForm');
const table1Body = document.getElementById('table1').querySelector('tbody');
const table3Body = document.getElementById('table3').querySelector('tbody');

function addRow(ip, mask, version) {
    // Tabela final (Figura 3)
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${ip}</td>
        <td>${mask}</td>
        <td>${version}</td>
        <td>
            <button class="edit">✏️</button>
            <button class="delete">❌</button>
        </td>
    `;

    // Excluir
    row.querySelector('.delete').addEventListener('click', () => row.remove());

    // Editar
    row.querySelector('.edit').addEventListener('click', () => {
        document.getElementById('ip').value = ip;
        document.getElementById('mask').value = mask;
        document.getElementById('version').value = version;
        row.remove();
    });

    table3Body.appendChild(row);

    // Tabela inicial (Figura 1) sem botões
    const row1 = document.createElement('tr');
    row1.innerHTML = `<td>${ip}</td><td>${mask}</td><td>${version}</td>`;
    table1Body.appendChild(row1);
}

// Captura submit do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ip = document.getElementById('ip').value;
    const mask = document.getElementById('mask').value;
    const version = document.getElementById('version').value;

    addRow(ip, mask, version);
    form.reset();
});
