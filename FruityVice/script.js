

       // ******--- FRUITY VICE--- ******

       const proxy = "https://cors-anywhere.herokuapp.com/";
       const baseUrl = "https://www.fruityvice.com/api/fruit/";
       
       function toggleFields() {
           const filterType = document.getElementById("filterType").value;
           const searchInput = document.getElementById("searchInput");
           const nutritionFields = document.getElementById("nutritionFields");
       
           // ---Dynamic FiltreTypes---
           if (filterType === "nutrition") {
               searchInput.style.display = "none";
               nutritionFields.style.display = "block";
           } else if (filterType === "all") {
               searchInput.style.display = "none";
               nutritionFields.style.display = "none";
           } else {
               searchInput.style.display = "block";
               searchInput.placeholder = `Enter Fruit ${filterType}`;
               nutritionFields.style.display = "none";
           }
       }
       
       // ---Fetching Fruit Data---
       async function fetchFruitData() {
           const filterType = document.getElementById("filterType").value;
           let query = document.getElementById("searchInput").value;
           let url = proxy + baseUrl;
       
           if (filterType === "all") {
               url += "all";
           }
       
           else if (filterType === "nutrition") {
               const nutrient = document.getElementById("nutritionType").value;
               const minValue = parseFloat(document.getElementById("minValue").value) || 0;
               const maxValue = parseFloat(document.getElementById("maxValue").value) || 50;
               url += `all`;
       
               try {
                   const response = await fetch(url);
                   const fruits = await response.json();
                   const filteredFruits = fruits.filter(fruit => {
                       return (
                           fruit.nutritions[nutrient] >= minValue &&
                           fruit.nutritions[nutrient] <= maxValue
                       );
                   });
                   displayFruits(filteredFruits);
               } catch (error) {
                   console.error("Error fetching data:", error);
                   alert("No data found for your search!");
       
               }
               resetFields(); // refresh
               return;
           }
       
           else {
               if (!query) {
                   alert("Please enter a valid search term!");
                   return;
               }
       
               if (filterType === "name") {
                   url += query;
               } else if (filterType === "genus") {
                   url += `genus/${query}`;
               } else if (filterType === "family") {
                   url += `family/${query}`;
               }
       
           }
       
           try {
               const response = await fetch(url);
               const data = await response.json();
               if (filterType === "all") {
                   displayFruits(data);
               }
               else {
                   displayFruits(Array.isArray(data) ? data : [data]);
               }
           } catch (error) {
               console.error("Error fetching data:", error);
               alert("No data found for your search!");
           }
           resetFields(); // refreshes fields
       }
       
       // ---Displaying Searched Results---
       function displayFruits(fruits) {
           const fruitDataDiv = document.getElementById("fruitData");
           fruitDataDiv.innerHTML = "";
       
           if (!fruits || fruits.length === 0) {
               fruitDataDiv.innerHTML = `<p>No fruits match your search criteria.</p>`;
               return;
           }
           // styling cards
           fruitDataDiv.style.display = 'block';
           fruitDataDiv.style.display = 'flex';
           fruitDataDiv.style.flexWrap = "wrap";
           fruitDataDiv.style.gap = "20px";
       
           fruits.forEach(fruit => {
               const fruitCard = document.createElement("div");
               fruitCard.classList.add("fruit-card");
       
               fruitCard.innerHTML =
                   `<h2>${fruit.name}</h2>
                   <p><strong>Family:</strong> ${fruit.family || "N/A"}</p>
                   <p><strong>Genus:</strong> ${fruit.genus || "N/A"}</p>
                   <p><strong>Nutrition (per 100g):</strong></p>
                   <ul>
                       <li>Carbohydrates: ${fruit.nutritions?.carbohydrates || 0}g</li>
                       <li>Fat: ${fruit.nutritions?.fat || 0}g</li>
                       <li>Protein: ${fruit.nutritions?.protein || 0}g</li>
                       <li>Calories: ${fruit.nutritions?.calories || 0}</li>
                       <li>Sugar: ${fruit.nutritions?.sugar || 0}g</li>
                   </ul>`;
       
               fruitDataDiv.appendChild(fruitCard);
               console.log(fruit);
           });
       }
       
       // ---Refresh or Clears Input Fields---
       function resetFields() {
           document.getElementById("searchInput").value = "";
           document.getElementById("minValue").value = "";
           document.getElementById("maxValue").value = "";
           document.getElementById("nutritionType").selectedIndex = 0;
           document.getElementById("filterType").selectedIndex = 0;
       }
       