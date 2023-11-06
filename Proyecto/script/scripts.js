document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("upload-form");
    const documentList = document.getElementById("document-list");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    // Manejar la carga de documentos
    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fileInput = document.getElementById("file");
        const fileList = fileInput.files;

        if (fileList.length > 0) {
            const fileName = fileList[0].name;
            const fileDate = new Date();
            const formattedDate = `${fileDate.toLocaleDateString()} ${fileDate.toLocaleTimeString()}`;
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="#">${fileName}</a><span>${formattedDate}</span>`;
            documentList.appendChild(listItem);
        }

        sortDocumentList();
    });

    // Ordenar la lista alfabéticamente
    function sortDocumentList() {
        const listItems = Array.from(documentList.children);
        listItems.sort((a, b) => {
            const textA = a.textContent.trim().toLowerCase();
            const textB = b.textContent.trim().toLowerCase();
            return textA.localeCompare(textB);
        });
        listItems.forEach((item) => documentList.appendChild(item));
    }

    // Llamar a la función para ordenar la lista al cargar la página
    sortDocumentList();

    // Manejar la búsqueda de documentos
    searchButton.addEventListener("click", function () {
        performSearch();
    });

    searchInput.addEventListener("input", function () {
        performSearch();
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const listItems = Array.from(documentList.children);

        listItems.forEach((item) => {
            const documentName = item.querySelector("a").textContent.toLowerCase();
            if (documentName.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
});
