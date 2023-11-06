document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-documents");
    const documentList = document.getElementById("document-list").getElementsByTagName("li");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        for (let i = 0; i < documentList.length; i++) {
            const documentItem = documentList[i];
            const documentLink = documentItem.querySelector("a");
            const documentName = documentLink.textContent.toLowerCase();

            if (documentName.includes(searchTerm)) {
                documentItem.style.display = "block";
            } else {
                documentItem.style.display = "none";
            }
        }
    });
});
