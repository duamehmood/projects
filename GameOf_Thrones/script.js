
// enables input field on switching between radio buttons
function toggleIdInput() {
    const idInput = document.getElementById("idInput");
    idInput.disabled = document.querySelector("input[name='selection']:checked").value !== "specific";
}

function fetchData() {
    const category = document.getElementById("category").value;
    const selection = document.querySelector("input[name='selection']:checked").value;
    const id = document.getElementById("idInput").value;

    let apiUrl = "https://thronesapi.com/api/v2/";


    // For all characters and continents
    if (category === "characters") {
        apiUrl += "Characters";
    } else {
        apiUrl += "Continents";
    }

    // For specific character or continent
    if (selection === "specific" && id) {
        apiUrl += `/${id}`;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - Unable to fetch data`);
            }
            return response.json();
        })
        .then(data => {
            if (category === "characters") {
                displayCharacters(data);
            } else {
                displayContinents(data);
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = `<p>Error: ${error.message}</p>`;
        });

    clearPreviousResults();
}

// Display data function for Characters
function displayCharacters(data) {
    const resultDiv = document.getElementById("result");

    let characters;
    if (Array.isArray(data)) {
        characters = data;
    } else {
        characters = [data];
    }

    characters.forEach(character => {
        resultDiv.innerHTML += `
             <div class="card">
                 <img src="${character.imageUrl}" alt="${character.fullName}" class="character-image">
                 <div class="card-details">
                     <h3>${character.fullName}</h3>
                     <p><strong>ID:</strong> ${character.id}</p>
                     <p><strong>First Name:</strong> ${character.firstName || "N/A"}</p>
                     <p><strong>Last Name:</strong> ${character.lastName || "N/A"}</p>
                     <p><strong>Title:</strong> ${character.title || "Unknown"}</p>
                     <p><strong>Family:</strong> ${character.family || "Unknown"}</p>
                 </div>
             </div>
         `;
    });
}

// Display data function for Continents
function displayContinents(data) {
    const resultDiv = document.getElementById("result");

    let continents;
    if (Array.isArray(data)) {
        continents = data;
    } else {
        continents = [data];
    }

    continents.forEach(continent => {
        resultDiv.innerHTML += `
             <div class="card">
                 <div class="card-details">
                     <h3>${continent.name}</h3>
                     <p><strong>ID:</strong> ${continent.id}</p>
                     <p><strong>Name:</strong> ${continent.name}</p>
                 </div>
             </div>
         `;
    });
}

// Refreshing fields 
function clearPreviousResults() {
    document.getElementById("result").innerHTML = '';  // Clear previous results
    document.getElementById("idInput").value = '';  // Reset ID input field
    document.getElementById("category").value = '';  // Reset category selection
    document.querySelector("input[name='selection'][value='all']").checked = true;  // Set Fetch All option as default
}

window.onload = clearPreviousResults;

