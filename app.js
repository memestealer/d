(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function l(){try{const n=await fetch("https://genshin.jmp.blue/characters/all?lang=en");console.log("Status:",n.status);const a=await n.json();console.log("Data:",a);const o=document.getElementById("characters");o.innerHTML="",a.forEach(t=>{const e=`https://genshin.jmp.blue/characters/${t.id}/card`,s=document.createElement("div");s.innerHTML=`
    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 border border-gray-200">
    <h2 class="text-xl font-bold mb-2 text-gray-800">${t.name}</h2>

    <img 
      src="https://genshin.jmp.blue/characters/${t.id.toLowerCase()}/card" 
      class="w-full rounded-lg mb-3"
      
    >

    <p class="text-sm text-gray-600"><span class="font-semibold">Title:</span> ${t.title}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Vision:</span> ${t.vision}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Nation:</span> ${t.nation}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Affiliation:</span> ${t.affiliation}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Rarity:</span> ${t.rarity}★</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Weapon:</span> ${t.weapon}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Constellation:</span> ${t.constellation}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Birthday:</span> ${t.birthday}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Gender:</span> ${t.gender}</p>
    <p class="text-sm text-gray-600"><span class="font-semibold">Release Date:</span> ${t.release}</p>

    <p class="mt-3 text-gray-700 text-sm">${t.description}</p>
  </div>


<hr>
`,o.appendChild(s)})}catch(n){console.error("Error:",n)}}l();async function i(n){try{const a=document.getElementById("characters");a.innerHTML="";const o=await fetch(`https://genshin.jmp.blue/characters/${n.toLowerCase()}?lang=en`);if(!o.ok){a.innerHTML='<p class="text-center text-red-500 text-lg">Character not found.</p>';return}const t=await o.json(),e=document.createElement("div");e.innerHTML=`
      <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 border border-gray-200">
        <h2 class="text-xl font-bold mb-2 text-gray-800">${t.name}</h2>

        <img 
          src="https://genshin.jmp.blue/characters/${t.id.toLowerCase()}/card" 
          class="w-full rounded-lg mb-3"
        >

        <p class="text-sm text-gray-600"><span class="font-semibold">Title:</span> ${t.title}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Vision:</span> ${t.vision}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Nation:</span> ${t.nation}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Affiliation:</span> ${t.affiliation}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Rarity:</span> ${t.rarity}★</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Weapon:</span> ${t.weapon}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Constellation:</span> ${t.constellation}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Birthday:</span> ${t.birthday}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Gender:</span> ${t.gender}</p>
        <p class="text-sm text-gray-600"><span class="font-semibold">Release Date:</span> ${t.release}</p>

        <p class="mt-3 text-gray-700 text-sm">${t.description}</p>
      </div>
    `,a.appendChild(e)}catch(a){console.error("Error:",a)}}document.getElementById("showAllBtn").addEventListener("click",()=>{l()});document.getElementById("searchBtn").addEventListener("click",()=>{const n=document.getElementById("searchInput").value.trim();n.length>0&&i(n)});document.getElementById("searchInput").addEventListener("keypress",n=>{n.key==="Enter"&&document.getElementById("searchBtn").click()});

