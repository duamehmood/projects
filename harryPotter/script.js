
const proxy = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://potterhead-api.vercel.app/";

// Show filter options when a category is selected
function showFilterOptions() {
    let category = document.getElementById('category').value;
    let filterOptions = document.getElementById('filterOptions');

    if (category !== "select") {
        filterOptions.style.display = 'block';

        // Reset filters when category changes
        document.getElementById('filterType').value = "all";
        document.getElementById('specificInput').style.display = "none";
        document.getElementById('specificName').value = "";
        document.getElementById('content').innerHTML = "<p>Fetching data...</p>";
    } else {
        filterOptions.style.display = 'none';
        resetForm();  
    }
}

// Show input field if user selects "By Specific Name"
function showInputField() {
    let filterType = document.getElementById('filterType').value;
    let specificInput = document.getElementById('specificInput');

    if (filterType === 'specific') {
        specificInput.style.display = 'block';
    } else {
        specificInput.style.display = 'none';
        document.getElementById('specificName').value = "";
    }
}

// Fetch data dynamically based on selected filters
function fetchData() {
    let category = document.getElementById('category').value;
    let filterType = document.getElementById('filterType').value;

    // Handle all characters
     if (category === "characters" && filterType === 'all'){
        url = `${proxy}${baseUrl}api/characters`;
    } 

    // Handle specific Characters 
   else if (category === "characters" && filterType === 'specific') {
    let specificCharacter = document.getElementById('specificName').value.trim();
    if (specificCharacter === "") {
        alert("Please enter a character name");
        return;
    }
    url = `${proxy}${baseUrl}api/characters/${specificCharacter}`;
}

    // Handle specific houses
    else if (category === "houses" && filterType === 'specific') {
        let specificHouse = document.getElementById('specificName').value.trim();
        if (specificHouse === "") {
            alert("Please enter a house name");
            return;
        }
        url = `${proxy}${baseUrl}api/houses/${specificHouse}`;
    }

    // Handle All Houses
    else if (category === "houses" && filterType === "all") {
        url = `${proxy}${baseUrl}api/houses`;
    }

    // Handle specific Spells 
    else if (category === "spells" && filterType === "specific") {
        let specificSpell = document.getElementById('specificName').value.trim();
        if (specificSpell === "") {
            alert("Please enter a spell name");
            return;
        }
        url = `${proxy}${baseUrl}api/spells/${specificSpell}`;
        console.log("Fetching specific spell:", specificSpell);
    }
     // Handle all spells
    else if (category === "spells" && filterType === "all") {
        url = `${proxy}${baseUrl}api/spells`;
    }

    // Handle specific Movies
    else if (category === "movies") {
        if (filterType === 'specific') {
            let specificMovieId = document.getElementById('specificName').value.trim();
            if (specificMovieId === "" || isNaN(specificMovieId) || specificMovieId < 1 || specificMovieId > 8) {
                alert("Please enter a valid movie ID (1-8)");
                return;
            }
            url = `${proxy}${baseUrl}api/movies/${specificMovieId}`;
        } 
        // Handle all movies
        else if (filterType === "all") {
            url = `${proxy}${baseUrl}api/movies`;
        }
    }

    // Handle Books Category
    else if (category === "books") {
        if (filterType === "specific") {
            let specificBook = document.getElementById('specificName').value.trim();
            if (specificBook === "") {
                alert("Please enter a book name");
                return;
            }
            url = `${proxy}${baseUrl}api/books/${specificBook}`;
        } 
        // Handle all books
        else if (filterType === "all") {
            url = `${proxy}${baseUrl}api/books`;
        }
    }

    console.log("Fetching data from URL:", url);

    // Fetch data from the URL
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data);

            // Handle Houses category and display specific house data
            if (category === "houses" && filterType === 'specific') {
                let specificHouse = document.getElementById('specificName').value.trim();
                let filteredCharacters = data.filter(character =>
                    character.house.toLowerCase() === specificHouse.toLowerCase()
                );
                displayData(filteredCharacters, `Students of ${specificHouse}`);
            }
            // Handle characters category and display specific or all characters
            else if (category === "characters" && filterType === 'specific') {
                let specificCharacter = document.getElementById('specificName').value.trim();
                // If data is an array, filter normally
                if (Array.isArray(data)) {
                    let filteredCharacter = data.filter(character =>
                        character.name.toLowerCase() === specificCharacter.toLowerCase()
                    );
                    displayData(filteredCharacter, `Character: ${specificCharacter}`);
                } 
                // If data is a single object, display it directly
                else if (typeof data === "object") {
                    displayData([data], `Character: ${data.name}`);
                }
            }

           // Handle Movies category and display either specific movie or all movies
            else if (category === "movies" && filterType === 'specific') {
                displayData([data], `Movie: ${data.title}`);
            }

            // Handle Books category and filter specific book
            else if (category === "books" && filterType === "specific") {
                displayData([data], `Book: ${data.title}`);

            }

            // Handle all categories
            else {
                displayData(data, category);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

//  Display fetched data dynamically
function displayData(data, category) {
    let content = document.getElementById('content');
    content.innerHTML = `<h2>${category.toUpperCase()}</h2>`;

    let container = document.createElement('div');
    container.className = 'card-container';

    // Case 1: If `data` is an array and contains items
    if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
            let card = createCard(item, category);
            container.appendChild(card);
        });
    } 
    // Case 2: If `data` is a single object with a name/title (character, book, movie)
    else if (typeof data === "object" && (data.name || data.title)) {
        let card = createCard(data, category);
        container.appendChild(card);
    } 
    // Case 3: If `data` is empty or invalid
    else {
        content.innerHTML += "<p>No results found</p>";
    }

    content.appendChild(container);
}

// Helper function to create the correct type of card
function createCard(item, category) {
    if (category.toLowerCase().includes("houses")) {
        return createHouseCard(item);
    } else if (category.toLowerCase().includes("spells")) {
        return createSpellCard(item);
    } else if (category.toLowerCase().includes("movies")) {
        return createMovieCard(item);
    } else if (category.toLowerCase().includes("books")) {
        return createBookCard(item);
    } else {
        return createCharacterCard(item); // Default to character card
    }
}


// Create a detailed character card
function createCharacterCard(character) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
          <h3>${character.name}</h3>
          <p><strong>ID:</strong> ${character.id || "N/A"}</p>
          <p><strong>Alternate Names:</strong> ${character.alternate_names?.join(", ") || "N/A"}</p>
          <p><strong>Species:</strong> ${character.species || "N/A"}</p>
          <p><strong>Gender:</strong> ${character.gender || "N/A"}</p>
          <p><strong>House:</strong> ${character.house || "N/A"}</p>
          <p><strong>Date of Birth:</strong> ${character.dateOfBirth || "N/A"}</p>
          <p><strong>Year of Birth:</strong> ${character.yearOfBirth || "N/A"}</p>
          <p><strong>Wizard:</strong> ${character.wizard ? "Yes" : "No"}</p>
          <p><strong>Ancestry:</strong> ${character.ancestry || "N/A"}</p>
          <p><strong>Eye Colour:</strong> ${character.eyeColour || "N/A"}</p>
          <p><strong>Hair Colour:</strong> ${character.hairColour || "N/A"}</p>
          <p><strong>Wand:</strong> ${character.wand ? `${character.wand.wood}, ${character.wand.core}, ${character.wand.length} inches` : "N/A"}</p>
          <p><strong>Patronus:</strong> ${character.patronus || "N/A"}</p>
          <p><strong>Hogwarts Student:</strong> ${character.hogwartsStudent ? "Yes" : "No"}</p>
          <p><strong>Hogwarts Staff:</strong> ${character.hogwartsStaff ? "Yes" : "No"}</p>
          <p><strong>Actor:</strong> ${character.actor || "N/A"}</p>
          <p><strong>Alternate Actors:</strong> ${character.alternate_actors?.join(", ") || "N/A"}</p>
          <p><strong>Alive:</strong> ${character.alive ? "Yes" : "No"}</p>
          <img src="${character.image || 'https://via.placeholder.com/150'}" alt="${character.name}" style="width:150px; height:auto;">
      `;
    return card;
}

// Create a detailed house card
function createHouseCard(house) {
    let card = document.createElement('div');
    card.className = 'card';
    if (typeof house === "string") {
        card.innerHTML = `
                <h3>${house}</h3>
            `;
        return card;
    }
    else {
        card.innerHTML = `
          <h3>${house.name}</h3>
          <p><strong>ID:</strong> ${house.id || "N/A"}</p>
          <p><strong>Alternate Names:</strong> ${house.alternate_names?.join(", ") || "N/A"}</p>
          <p><strong>Species:</strong> ${house.species || "N/A"}</p>
          <p><strong>Gender:</strong> ${house.gender || "N/A"}</p>
          <p><strong>House:</strong> ${house.house || "N/A"}</p>
          <p><strong>Date of Birth:</strong> ${house.dateOfBirth || "N/A"}</p>
          <p><strong>Year of Birth:</strong> ${house.yearOfBirth || "N/A"}</p>
          <p><strong>Wizard:</strong> ${house.wizard ? "Yes" : "No"}</p>
          <p><strong>Ancestry:</strong> ${house.ancestry || "N/A"}</p>
          <p><strong>Eye Colour:</strong> ${house.eyeColour || "N/A"}</p>
          <p><strong>Hair Colour:</strong> ${house.hairColour || "N/A"}</p>
          <p><strong>Wand:</strong> ${house.wand ? `${house.wand.wood}, ${house.wand.core}, ${house.wand.length} inches` : "N/A"}</p>
          <p><strong>Patronus:</strong> ${house.patronus || "N/A"}</p>
          <p><strong>Hogwarts Student:</strong> ${house.hogwartsStudent ? "Yes" : "No"}</p>
          <p><strong>Hogwarts Staff:</strong> ${house.hogwartsStaff ? "Yes" : "No"}</p>
          <p><strong>Actor:</strong> ${house.actor || "N/A"}</p>
          <p><strong>Alternate Actors:</strong> ${house.alternate_actors?.join(", ") || "N/A"}</p>
          <p><strong>Alive:</strong> ${house.alive ? "Yes" : "No"}</p>
          <img src="${house.image || 'https://via.placeholder.com/150'}" alt="${house.name}" style="width:150px; height:auto;">
      `;
        return card;
    }
}

// Create a detailed spell card
function createSpellCard(spell) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${spell.name}</h3>
        <p><strong>ID:</strong> ${spell.id || "N/A"}</p>
        <p><strong>Description:</strong> ${spell.description || "N/A"}</p>
    `;
    return card;
}

function createMovieCard(movie) {
    let card = document.createElement('div');
    card.className = 'card';
    card.className = 'card';
    card.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Serial:</strong> ${movie.serial || "N/A"}</p>
        <p><strong>Summary:</strong> ${movie.summary || "N/A"}</p>
        <p><strong>Directors:</strong> ${movie.directors?.join(", ") || "N/A"}</p>
        <p><strong>Producers:</strong> ${movie.producers?.join(", ") || "N/A"}</p>
        <p><strong>Cinematographers:</strong> ${movie.cinematographers?.join(", ") || "N/A"}</p>
        <p><strong>Editors:</strong> ${movie.editors?.join(", ") || "N/A"}</p>
        <p><strong>Distributors:</strong> ${movie.distributors?.join(", ") || "N/A"}</p>
        <p><strong>Music Composers:</strong> ${movie.music_composers?.join(", ") || "N/A"}</p>
        <p><strong>Release Date:</strong> ${movie.release_date || "N/A"}</p>
        <p><strong>Running Time:</strong> ${movie.running_time || "N/A"}</p>
        <p><strong>Budget:</strong> ${movie.budget || "N/A"}</p>
        <p><strong>Box Office:</strong> ${movie.box_office || "N/A"}</p>
        <p><strong>Rating:</strong> ${movie.rating || "N/A"}</p>
        <p><strong>Trailer:</strong> <a href="${movie.trailer || '#'}" target="_blank">Watch Trailer</a></p>
        <img src="${movie.poster || 'https://via.placeholder.com/150'}" alt="${movie.title}" style="width:150px; height:auto;">
        <p><strong>Wiki:</strong> <a href="${movie.wiki || '#'}" target="_blank">Read More</a></p>
    `;
    return card;
}

// Create a detailed book card
function createBookCard(book) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Serial:</strong> ${book.serial || "N/A"}</p>
        <p><strong>Summary:</strong> ${book.summary || "N/A"}</p>
        <p><strong>Release Date:</strong> ${book.release_date || "N/A"}</p>
        <p><strong>Dedication:</strong> ${book.dedication || "N/A"}</p>
        <p><strong>Pages:</strong> ${book.pages || "N/A"}</p>
        <img src="${book.cover || 'https://via.placeholder.com/150'}" alt="${book.title}" style="width:150px; height:auto;">
        <p><strong>Wiki:</strong> <a href="${book.wiki || '#'}" target="_blank">Read More</a></p>
    `;
    return card;
}


// Apply flex-wrap and card width properties
document.addEventListener("DOMContentLoaded", function () {
    let style = document.createElement('style');
    style.innerHTML = `
          .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 15px;
          }
          .card {
              width: 300px;
              background-color: #0f3460;
              color: #e0c097;
              padding: 15px;
              border-radius: 10px;
              box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
              text-align: left;
          }
      `;
    document.head.appendChild(style);
    // Reset fields when the page loads
    resetForm();
});

// Function to reset all fields
function resetForm() {
    document.getElementById('category').value = "select";
    document.getElementById('filterOptions').style.display = "none";
    document.getElementById('filterType').value = "all";
    document.getElementById('specificInput').style.display = "none";
    document.getElementById('specificName').value = "";
    document.getElementById('content').innerHTML = "<p>Select a category to explore.</p>";
}




