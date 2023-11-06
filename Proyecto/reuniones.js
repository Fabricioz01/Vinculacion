document.addEventListener("DOMContentLoaded", function () {
    const programarReunionForm = document.getElementById("programar-reunion-form");
    const reunionesLista = document.getElementById("reuniones-lista");

    // Manejar la programación de reuniones
    programarReunionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombreReunion = document.getElementById("nombre").value;
        const fechaReunion = document.getElementById("fecha").value;
        const horaReunion = document.getElementById("hora").value;

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${nombreReunion}</strong> - Fecha: ${fechaReunion}, Hora: ${horaReunion}`;
        reunionesLista.appendChild(listItem);

        // Limpiar el formulario
        programarReunionForm.reset();
    });
});
