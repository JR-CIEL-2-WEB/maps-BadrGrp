const searchInput = document.getElementById("searchInput");
const runnersTable = document.getElementById("runnersTable");

function searchItems(searchQuery) {
    const rows = runnersTable.getElementsByTagName("tr");

    for (let row of rows) {
        const cells = row.getElementsByTagName("td");

        if (cells.length > 0) {
            const athleteName = cells[1].querySelector(".name").textContent;
            const athleteCountry = cells[2].querySelector(".country").textContent;

            if (
                athleteName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                athleteCountry.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                row.style.display = "";  
            } else {
                row.style.display = "none";  
            }
        }
    }
}

searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value;
    searchItems(searchQuery);
});
