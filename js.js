const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const matric = document.getElementById("matric").value;
    const course = document.getElementById("course").value;
    const activity = document.getElementById("activity").value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${matric}</td>
        <td>${course}</td>
        <td>${activity}</td>
    `;

    table.appendChild(row);
    form.reset();
});
