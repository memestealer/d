async function getData() {
  try {
    const response = await fetch(
      "https://genshin.jmp.blue/characters/all?lang=en"
    );
    console.log("Status:", response.status);

    const data = await response.json();
    console.log("Data:", data);

    const container = document.getElementById("characters");
    container.innerHTML = "";
    
    data.forEach((character) => {
      const cardUrl = `https://genshin.jmp.blue/characters/${character.id}/card`;
      const div = document.createElement("div");
      div.innerHTML = `
    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 border border-gray-200">
    <h2 class="text-xl font-bold mb-2 text-gray-800">${character.name}</h2>

    <img 
      src="https://genshin.jmp.blue/characters/${character.id.toLowerCase()}/card" 
      class="w-full rounded-lg mb-3"
      
    >

    <p class="text-sm text-gray-600"><span class="font-semibold">Title:</span> ${character.title}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Vision:</span> ${character.vision}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Nation:</span> ${character.nation}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Affiliation:</span> ${character.affiliation}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Rarity:</span> ${character.rarity}★</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Weapon:</span> ${character.weapon}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Constellation:</span> ${character.constellation}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Birthday:</span> ${character.birthday}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Gender:</span> ${character.gender}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Release Date:</span> ${character.release}</p>

    <p class="mt-3 text-gray-700 text-sm">${character.description}</p>
  </div>


<hr>
`;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
getData();
async function getCharacter(character) {
  try {
    const container = document.getElementById("characters");
    container.innerHTML = "";

    const response = await fetch(
      `https://genshin.jmp.blue/characters/${character.toLowerCase()}?lang=en`
    );

    if (!response.ok) {
      container.innerHTML = `<p class="text-center text-red-500 text-lg">Character not found.</p>`;
      return;
    }

    const characters = await response.json();

    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 border border-gray-200">
        <h2 class="text-xl font-bold mb-2 text-gray-800">${characters.name}</h2>

        <img 
          src="https://genshin.jmp.blue/characters/${characters.id.toLowerCase()}/card" 
          class="w-full rounded-lg mb-3"
        >

        <p class="text-sm text-gray-600"><span class="font-semibold">Title:</span> ${characters.title}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Vision:</span> ${characters.vision}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Nation:</span> ${characters.nation}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Affiliation:</span> ${characters.affiliation}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Rarity:</span> ${characters.rarity}★</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Weapon:</span> ${characters.weapon}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Constellation:</span> ${characters.constellation}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Birthday:</span> ${characters.birthday}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Gender:</span> ${characters.gender}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Release Date:</span> ${characters.release}</p>

        <p class="mt-3 text-gray-700 text-sm">${characters.description}</p>
      </div>
    `;

    container.appendChild(div);

  } catch (error) {
    console.error("Error:", error);
  }
}
document.getElementById("showAllBtn").addEventListener("click", () => {
  getData();
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim();
  if (input.length > 0) {
    getCharacter(input);
  }
});
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("searchBtn").click();
  }
});

