
const API_URL ="https://fishty-api.erick24501.workers.dev";

const fishGrid = document.getElementById("fishGrid");
const apiResults = document.getElementById("apiResults");
const message = document.getElementById("message");

function safe(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[c]);
}

function card(fish) {
  return `
    <article class="card">
      <span class="tag">FICHA MARINA</span>
      <h3>${safe(fish.common || fish.scientific || fish.scientificname)}</h3>
      <p class="scientific">${safe(fish.scientific || fish.scientificname)}</p>
      <p><strong>Hábitat:</strong> ${safe(fish.habitat || "Por investigar")}</p>
      <p><strong>Alimentación:</strong> ${safe(fish.diet || "Por investigar")}</p>
      <p><strong>Conservación:</strong> ${safe(fish.status || "Consultar una fuente especializada")}</p>
      <p>${safe(fish.description || "Registro científico de WoRMS.")}</p>
      ${fish.aphiaID ? `<p><strong>ID WoRMS:</strong> ${safe(fish.aphiaID)}</p>` : ""}
    </article>
  `;
}

async function loadSpecies() {
  try {
    const response = await fetch(`${API_URL}/api/species`);
    if (!response.ok) throw new Error("No se pudieron cargar las fichas.");
    const data = await response.json();
    fishGrid.innerHTML = data.map(card).join("");
    message.textContent = `Fichas cargadas: ${data.length}`;
  } catch (error) {
    message.textContent =
      "No se cargaron las fichas. Revisa la URL del Worker y el enlace D1.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSpecies();

  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", async event => {
      event.preventDefault();

      const name = document.getElementById("searchInput").value.trim();
      message.textContent = "Buscando en WoRMS...";
      apiResults.innerHTML = "";

      try {
        const response = await fetch(
          `${API_URL}/api/search?name=${encodeURIComponent(name)}`
        );
        if (!response.ok) throw new Error("Error en la consulta.");

        const records = await response.json();

        if (!records.length) {
          message.textContent = "No se encontraron resultados.";
          return;
        }

        apiResults.innerHTML = records.map(record => card({
          scientific: record.scientificname,
          habitat: record.phylum || "Clasificación no disponible",
          diet: "La API consultada no confirma la dieta.",
          status: "Consultar una fuente de conservación.",
          description: [
            record.rank ? `Rango: ${record.rank}` : "",
            record.kingdom ? `Reino: ${record.kingdom}` : "",
            record.status ? `Estado taxonómico: ${record.status}` : ""
          ].filter(Boolean).join(" · "),
          aphiaID: record.AphiaID
        })).join("");

        message.textContent = "Resultados científicos de WoRMS.";
      } catch (error) {
        message.textContent =
          "Falló la búsqueda. Comprueba el Worker y vuelve a intentarlo.";
      }
    });
  }
});