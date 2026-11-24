/* =========================================================
   ACUATEAM GAMES
   FISHTY + MUNDOS SALVAJES + ESCAPE AND RESCUE
========================================================= */

const API_URL = ""; https://fishty-acuateam.firsthy-y-mundos-salvajes.workers.dev/

const initialFishes = [
  ["Pez Payaso","Amphiprion ocellaris","Arrecife","Pez colorido que vive en simbiosis con las anémonas marinas.","🐠"],
  ["Carpa","Cyprinus carpio","Agua dulce","Pez resistente de ríos y lagos tranquilos.","🐟"],
  ["Bagre (Pez Gato)","Siluriformes","Ríos y fondos","Reconocible por sus largos bigotes sensoriales para buscar alimento en el fondo.","🐡"],
  ["Salmón Rojo","Oncorhynchus nerka","Océano y ríos","Famoso por migrar río arriba desovando en aguas dulces.","🐟"],
  ["Pez Cirujano Azul (Dory)","Paracanthurus hepatus","Arrecife","Pez tropical de tono azul vibrante habitante de arrecifes de coral.","🐠"],
  ["Ídolo Moro","Zanclus cornutus","Arrecife tropical","Pez exótico con franjas negras, blancas y amarillas y aleta dorsal alargada.","🐟"],
  ["Trippi Troppi","Criatura especial","Raro / Especial","Criatura marina singular del universo de Fishty.","🦑"],
  ["Tiburón Martillo","Sphyrnidae","Océano abierto","Depredador marino con cabeza en forma de T que mejora su visión y rastreo.","🦈"],
  ["Estrella de Mar","Asteroidea","Fondo marino","Equinodermo capaz de regenerar sus extremidades.","⭐"],
  ["Tortuga Marina","Chelonioidea","Océano y costas","Reptil marino migratorio clave para el equilibrio de los pastos marinos.","🐢"],
  ["Tralalero Tralala","Criatura especial","Especial","Personaje marino icónico dentro del juego.","🦈"],
  ["Pez Globo","Tetraodontidae","Arrecife y costa","Se infla tragando agua o aire como defensa ante depredadores.","🐡"],
  ["Pez Espada","Xiphias gladius","Océano abierto","Nadador veloz caracterizado por su pico largo y plano.","🗡️"],
  ["Cíclido Cuerno de Flor","Híbrido ornamental","Agua dulce","Pez llamativo por la protuberancia en su cabeza y sus colores brillantes.","🐠"],
  ["Pulpo Dumbo (Flapjack)","Opisthoteuthis californiana","Aguas profundas","Pequeño pulpo gelatinoso de aguas profundas con aletas en forma de orejas.","🐙"],
  ["Caballito de Mar","Hippocampus","Praderas marinas","Pez de nado vertical donde el macho incuba los huevos.","🐴"],
  ["Anguila Eléctrica","Electrophorus electricus","Ríos tropicales","Capaz de generar descargas eléctricas para cazar y defenderse.","⚡"],
  ["Bananita Dolphinita","Criatura especial","Especial","Criatura temática híbrida del mundo de Fishty.","🐬"],
  ["Ballena Beluga","Delphinapterus leucas","Ártico","Cetáceo blanco muy sociable conocido como el canario del mar.","🐳"],
  ["Pez Rape Abisal","Lophiiformes","Zona abisal","Habita en la oscuridad total y usa un señuelo bioluminiscente para atraer presas.","🎣"],
  ["Orca","Orcinus orca","Océanos globales","El miembro más grande de la familia de los delfines y superdepredador marino.","🐋"],
  ["Tiburón Ballena","Rhincodon typus","Océano tropical","El pez existente más grande del mundo; se alimenta filtrando plancton.","🦈"],
  ["Ballena Azul","Balaenoptera musculus","Océano abierto","El animal más grande que jamás haya habitado la Tierra.","🐋"],
  ["Medusa Gigante","Nemopilema nomurai","Aguas profundas","Medusa de enorme tamaño con largos tentáculos urticantes.","🪼"],
  ["Pez Borrón (Blobfish)","Psychrolutes marcidus","Aguas profundas","Pez adaptado a las altas presiones del fondo oceánico.","🐟"],
  ["Graipuss Medussi","Criatura especial","Especial","Criatura misteriosa de las profundidades de Fishty.","🪼"],
  ["Tiburón Megalodón","Otodus megalodon","Prehistórico / Mítico","Colosal tiburón prehistórico considerado uno de los mayores depredadores marinos.","🦈"],
  ["Pez Cristalita","Criatura fantástica","Mítico","Pez con escamas translúcidas que reflejan destellos cristalinos.","💎"],
  ["Serpiente de Diamante","Criatura fantástica","Mítico","Serpiente marina blindada con escamas tan duras como el diamante.","🐍"],
  ["Serpiente Pirovolcánica","Criatura fantástica","Mítico","Serpiente abisal que habita cerca de respiraderos volcánicos submarinos.","🌋"],
  ["Narval","Monodon monoceros","Ártico","Cetáceo ártico famoso por su largo colmillo en espiral.","🦄"],
  ["Calamar Luciérnaga","Watasenia scintillans","Aguas profundas","Pequeño calamar bioluminiscente que emite destellos azules en la oscuridad.","🦑"],
  ["Dragón Marino Ancestral","Criatura fantástica","Legendario","Antiguo guardián de los océanos profundos.","🐉"],
  ["Tiburón de Luminita","Criatura fantástica","Legendario","Tiburón bioluminiscente que brilla en las fosas más oscuras.","🦈"],
  ["Tiburón Esqueleto","Criatura fantástica","Legendario","Depredador espectral de apariencia ósea.","💀"],
  ["Dragón Marino del Olvido","Criatura fantástica","Legendario","Bestia colosal procedente de las grietas más profundas del abismo.","🐉"],
  ["Ballena del Vacío","Criatura fantástica","Legendario","Gigante cósmico-marino que surca las aguas abisales.","🌌"],
  ["Hidra Abisal","Criatura jefe","Secreto / Jefe","Monstruo marino de múltiples cabezas oculto en el abismo.","🐲"],
  ["Ballena Imperium","Criatura jefe","Secreto / Jefe","Coloso real de los océanos con armadura ancestral.","👑"],
  ["Maja Pesadilla","Criatura jefe","Secreto / Jefe","Entidad marina de pesadilla de rarísima aparición.","👾"],
  ["Bloque de la Suerte Mítico","Objeto especial","Mítico","Bloque misterioso que otorga recompensas míticas.","🎁"],
  ["Bloque de la Suerte Divino","Objeto especial","Divino (God)","Bloque especial con recompensas de nivel divino.","✨"],
  ["Bloque de la Suerte Secreto","Objeto especial","Secreto","Bloque oculto con las recompensas más raras del juego.","🔮"],
  ["Ajolote","Ambystoma mexicanum","Agua dulce","Anfibio mexicano conocido por conservar características larvarias durante su vida.","🦎"],
  ["Vaquita Marina","Phocoena sinus","Golfo de California","Pequeña marsopa que vive exclusivamente en el norte del Golfo de California.","🐬"]
].map((item, index) => ({
  id: index + 1,
  nombre: item[0],
  cientifico: item[1],
  categoria: item[2],
  descripcion: item[3],
  icono: item[4]
}));

const initialFish = initialFishes.map(f => ({
  id: f.id,
  name: f.nombre,
  scientificName: f.cientifico,
  description: f.descripcion,
  habitat: f.categoria,
  conservation: "Consulta fuentes oficiales para conocer el estado de conservación.",
  icono: f.icono,
  categoria: f.categoria,
  nombre: f.nombre,
  cientifico: f.cientifico,
  descripcion: f.descripcion
}));

/* =========================================================
   MUNDOS SALVAJES - 13 BIOMAS Y SUS CRIATURAS
========================================================= */

const biomes = [
  {
    id:"forest", name:"Bosque", english:"Forest", icon:"🌳",
    description:"Explora senderos, árboles y criaturas del bosque.",
    creatures:["Gallina","Perro","Pájaro","Búho excavador","Mapache","Zorro","Oso","Brr Brr Patapim"]
  },
  {
    id:"lake", name:"Lago", english:"Lake", icon:"🏞️",
    description:"Descubre la vida que habita en aguas tranquilas.",
    creatures:["Rana","Patito","Bagre","Tortuga","Trulimero Trulicina","Cisne","Ajolote","Leviatán"]
  },
  {
    id:"desert", name:"Desierto", english:"Desert", icon:"🏜️",
    description:"Atraviesa dunas y encuentra criaturas adaptadas al calor.",
    creatures:["Jerbo","Fénec","Camello","Tob Tobi Tob Tob","Serpiente","Araña de arena","Escorpión","Esfinge real"]
  },
  {
    id:"jungle", name:"Jungla", english:"Jungle", icon:"🌴",
    description:"Adéntrate en un ecosistema lleno de vegetación y vida.",
    creatures:["Chimpancé","Tucán","Cocodrilo","Gorila","Orangutini Ananassini","Araña","Tigre","Serpiente rey"]
  },
  {
    id:"snow", name:"Nieve", english:"Snow", icon:"❄️",
    description:"Explora paisajes helados y criaturas resistentes al frío.",
    creatures:["Pingüino","Morsa","Oso polar","Tigre dientes de sable","Mamut","Mamut rey","Yeti","Dragón de hielo"]
  },
  {
    id:"volcano", name:"Volcán", english:"Volcano", icon:"🌋",
    description:"Descubre un mundo de lava, calor y criaturas fantásticas.",
    creatures:["Gecko de lava","Rana de lava","Toro llameante","Iguana de lava","Chillin Chilli","Cerbero","Fénix","Dragón de lava"]
  },
  {
    id:"abyss", name:"Océano abismal", english:"Abyss Ocean", icon:"🌊",
    description:"Sumérgete en las profundidades y descubre sus misterios.",
    creatures:["Pez loro","Pez espada","Tiburón","Orca","Tiburón ballena","Beluga","Kraken","El Maja"]
  },
  {
    id:"prehistoric", name:"Prehistórico", english:"Prehistoric", icon:"🦖",
    description:"Viaja a una era de criaturas gigantes y antiguas.",
    creatures:["Dodo","Pterodáctilo","Anquilosaurio","Triceratops","Bronto","T-Rex","Tralaledon","Mosasaurio"]
  },
  {
    id:"cosmic", name:"Cósmico", english:"Cosmic", icon:"🌌",
    description:"Explora un mundo estelar lleno de criaturas extraordinarias.",
    creatures:["Ciempiés","Gecko cósmico","Gorila cósmico","La Vacca Saturno Saturnita","Jefe esqueleto cósmico","Dragón cósmico","Dragón lunar eterno","Unicornio"]
  },
  {
    id:"cherry", name:"Cerezos en flor", english:"Cherry Blossom", icon:"🌸",
    description:"Recorre un paisaje rosado inspirado en la naturaleza oriental.",
    creatures:["Grulla","Salamandra","Panda rojo","Búho nival","Koi","Ciervo","Oni Tiger","Kitsune"]
  },
  {
    id:"titan", name:"Templo Titán", english:"Titan Temple", icon:"🏛️",
    description:"Entra a un templo antiguo custodiado por criaturas poderosas.",
    creatures:["Spideron","Crustacia","Bladehide","Mantaris","Rhinotaur","Tiburón mutante","Gorila rey","Nightflame"]
  },
  {
    id:"angels", name:"Ángeles y demonios", english:"Angels & Demons", icon:"😇",
    description:"Explora un mundo de criaturas celestiales y oscuras.",
    creatures:["Flame Sprite","Light Dove","Toro","Winged Lamb","Ring Guard","Imp","Sacred Moth","Demon Hound","Holy Peacock","Gargoyle","Pure Jellyfish","Centaur","RazorFang","Ringlord","Pegaso","Caballo esqueleto","ArchAngel","World Burner"]
  },
  {
    id:"enchanted", name:"Bosque encantado", english:"Enchanted Forest", icon:"🧚",
    description:"Descubre un bosque mágico lleno de criaturas extraordinarias.",
    creatures:["Gecko prismático","Escarabajo de pétalos","Arrendajo azul encantado","Liebre astral","Panda espiritual","Zorro estrellado","León solar celestial","Ballena celestial real"]
  }
];

const $ = selector => document.querySelector(selector);

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

/* =========================================================
   FISHTY
========================================================= */

function renderFish(fishList = initialFish) {
  const grid = $("#fish-grid");
  if (!grid) return;

  if (!fishList.length) {
    grid.innerHTML = `
      <div class="game-empty">
        <span>🔎</span>
        <h3>No se encontraron especies</h3>
        <p>Intenta buscar otro nombre.</p>
      </div>`;
    return;
  }

  grid.innerHTML = fishList.map((fish, index) => `
    <article class="fish-card game-fish-card">
      <div class="fish-card-top">
        <span class="fish-number">FICHA #${String(fish.id || index + 1).padStart(2,"0")}</span>
        <span class="fish-status">● REGISTRADA</span>
      </div>
      <div class="fish-icon">${escapeHTML(fish.icono || "🐟")}</div>
      <span class="fish-category">${escapeHTML(fish.categoria || fish.habitat || "Especie marina")}</span>
      <h3>${escapeHTML(fish.nombre || fish.name || "Especie marina")}</h3>
      <p class="fish-scientific"><strong>Nombre científico:</strong>
        ${escapeHTML(fish.cientifico || fish.scientificName || "No disponible")}
      </p>
      <div class="fish-card-divider"></div>
      <p class="fish-description">${escapeHTML(fish.descripcion || fish.description || "Sin descripción disponible.")}</p>
      <button class="fish-info-button" type="button" data-fish-id="${Number(fish.id || index + 1)}">
        VER FICHA COMPLETA <span>➜</span>
      </button>
    </article>
  `).join("");

  grid.querySelectorAll(".fish-info-button").forEach(button => {
    button.addEventListener("click", () => openFish(Number(button.dataset.fishId)));
  });
}

function openFish(id) {
  const fish = initialFish.find(item => Number(item.id) === Number(id));
  if (!fish) return;

  document.querySelector(".creature-modal")?.remove();

  const modal = document.createElement("div");
  modal.className = "creature-modal game-creature-modal";

  modal.innerHTML = `
    <div class="creature-modal-content game-detail-panel" role="dialog" aria-modal="true">
      <button class="close-modal" type="button" aria-label="Cerrar">×</button>
      <div class="detail-top-line">
        <span>FISHTY DATABASE</span>
        <span class="detail-live">● REGISTRO ACTIVO</span>
      </div>
      <div class="detail-creature-art">${escapeHTML(fish.icono || "🐟")}</div>
      <span class="game-kicker">ENCICLOPEDIA MARINA</span>
      <h2>${escapeHTML(fish.nombre)}</h2>
      <p class="detail-subtitle">ESPECIMEN #${String(fish.id).padStart(2,"0")}</p>
      <div class="detail-stats-grid">
        <div class="detail-stat"><span>🌊</span><small>HÁBITAT</small><strong>${escapeHTML(fish.categoria)}</strong></div>
        <div class="detail-stat"><span>🧬</span><small>CLASIFICACIÓN</small><strong>${escapeHTML(fish.cientifico)}</strong></div>
        <div class="detail-stat"><span>📘</span><small>ESTADO</small><strong>Catalogada</strong></div>
      </div>
      <div class="detail-description-box">
        <span>▰ DESCRIPCIÓN</span>
        <p>${escapeHTML(fish.descripcion)}</p>
      </div>
      <div class="detail-footer"><span>FISHTY</span><span>ACUATEAM GAMES</span></div>
      <button class="detail-close-button" type="button">VOLVER A LA ENCICLOPEDIA</button>
    </div>`;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  const close = () => {
    modal.remove();
    document.body.classList.remove("modal-open");
  };

  modal.querySelector(".close-modal").addEventListener("click", close);
  modal.querySelector(".detail-close-button").addEventListener("click", close);
  modal.addEventListener("click", event => {
    if (event.target === modal) close();
  });

  const escapeHandler = event => {
    if (event.key === "Escape") {
      close();
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);
}

async function searchFish(name) {
  const message = $("#fish-message");
  if (!message) return;

  if (!name.trim()) {
    message.textContent = "Escribe el nombre de una especie para buscarla.";
    message.className = "message";
    return;
  }

  if (!API_URL) {
    const matches = initialFish.filter(fish =>
      `${fish.nombre} ${fish.cientifico} ${fish.categoria}`.toLowerCase().includes(name.toLowerCase())
    );

    renderFish(matches);
    message.textContent = matches.length
      ? "Resultados encontrados en las fichas iniciales. Para buscar en WoRMS configura API_URL con la dirección de tu Worker."
      : "No se encontró en las fichas iniciales. Configura la API para consultar más especies.";
    return;
  }

  message.textContent = "Buscando especie...";
  message.className = "message";

  try {
    const response = await fetch(
      `${API_URL.replace(/\/$/, "")}/api/search?name=${encodeURIComponent(name)}`
    );

    if (!response.ok) throw new Error("La API respondió con un error.");

    const data = await response.json();
    const results = data.resultados || data.results || [];

    const fish = results.map(item => ({
      name: item.scientificName || item.name || name,
      scientificName: item.scientificName || "No disponible",
      description: `Registro taxonómico: ${item.statusTaxonomico || "sin estado taxonómico informado"}.`,
      habitat: [item.kingdom, item.phylum, item.class, item.order, item.family].filter(Boolean).join(" · "),
      conservation: "El estado taxonómico no equivale al estado de conservación."
    }));

    renderFish(fish);
    message.textContent = fish.length
      ? `Se encontraron ${fish.length} resultados.`
      : "No se encontraron resultados.";
    message.className = "message";
  } catch (error) {
    message.textContent = "No se pudo conectar con la API. Revisa la URL del Worker y vuelve a intentarlo.";
    message.className = "message error";
  }
}

function initFish() {
  renderFish(initialFish);

  $("#fish-form")?.addEventListener("submit", event => {
    event.preventDefault();
    searchFish($("#fish-search")?.value || "");
  });

  $("#fish-reset")?.addEventListener("click", () => {
    if ($("#fish-search")) $("#fish-search").value = "";
    renderFish(initialFish);

    if ($("#fish-message")) {
      $("#fish-message").textContent = "Se muestran las fichas iniciales.";
      $("#fish-message").className = "message";
    }
  });
}

/* =========================================================
   MUNDOS SALVAJES
========================================================= */

function initBiomes() {
  const select = $("#biome-select");
  const search = $("#creature-search");
  const grid = $("#biome-grid");
  const creatureGrid = $("#creature-grid");
  const message = $("#biome-message");

  if (!grid || !creatureGrid) return;

  let activeBiome = null;

  if (select) {
    select.innerHTML = '<option value="all">🌎 Todos los mundos</option>';

    biomes.forEach((biome, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = `${biome.icon} ${biome.name} (${biome.english})`;
      select.appendChild(option);
    });
  }

  function renderWorlds(term = "") {
    activeBiome = null;
    creatureGrid.innerHTML = "";

    const list = biomes.filter(biome =>
      [biome.name, biome.english, ...biome.creatures]
        .join(" ")
        .toLowerCase()
        .includes(term.toLowerCase())
    );

    grid.innerHTML = list.map(biome => {
      const index = biomes.indexOf(biome);

      return `
        <article class="biome-card game-biome-card">
          <div class="biome-card-top">
            <span class="biome-number">WORLD ${String(index + 1).padStart(2,"0")}</span>
            <span class="biome-status">● DISPONIBLE</span>
          </div>
          <div class="biome-art">${biome.icon}</div>
          <div class="biome-card-content">
            <h3>${escapeHTML(biome.name)}</h3>
            <p class="biome-english">${escapeHTML(biome.english)}</p>
            <p class="biome-description">${escapeHTML(biome.description)}</p>
            <div class="biome-card-footer">
              <span>🐾 ${biome.creatures.length} criaturas</span>
              <span>🌎 Mundo ${String(index + 1).padStart(2,"0")}</span>
            </div>
            <button class="biome-explore-button" type="button" data-index="${index}">
              EXPLORAR MUNDO <span>➜</span>
            </button>
          </div>
        </article>`;
    }).join("");

    grid.querySelectorAll(".biome-explore-button").forEach(button => {
      button.addEventListener("click", () => showBiome(Number(button.dataset.index)));
    });

    if (message) message.textContent = `${list.length} de ${biomes.length} mundos disponibles.`;

    if (!list.length) {
      grid.innerHTML = `
        <div class="game-empty">
          <span>🔎</span>
          <h3>No se encontró ese mundo</h3>
        </div>`;
    }
  }

  function showBiome(index) {
    const biome = biomes[index];
    if (!biome) return;

    activeBiome = biome;
    if (select) select.value = String(index);

    grid.innerHTML = `
      <button class="back-world-button" type="button">← VOLVER A LOS MUNDOS</button>
      <div class="selected-biome-banner">
        <div class="selected-biome-icon">${biome.icon}</div>
        <div>
          <span class="game-kicker">ZONA SELECCIONADA · WORLD ${String(index + 1).padStart(2,"0")}</span>
          <h2>${escapeHTML(biome.name)}</h2>
          <p>${escapeHTML(biome.english)}</p>
          <span class="selected-biome-count">${biome.creatures.length} CRIATURAS REGISTRADAS</span>
        </div>
      </div>`;

    grid.querySelector(".back-world-button").addEventListener("click", () => {
      if (select) select.value = "all";
      renderWorlds(search?.value || "");
    });

    renderCreatures(biome, search?.value || "");
    if (message) message.textContent = `Explorando ${biome.name}.`;
  }

  function renderCreatures(biome, term = "") {
    const list = biome.creatures.filter(creature =>
      creature.toLowerCase().includes(term.toLowerCase())
    );

    creatureGrid.innerHTML = `
      <div class="creature-section-heading">
        <span class="game-kicker">BESTIARIO DEL MUNDO</span>
        <h2>🐾 Criaturas descubiertas</h2>
        <p>Selecciona una criatura para abrir su ficha.</p>
      </div>
      <div class="game-creature-grid">
        ${list.map((creature, index) => `
          <article class="game-creature-card">
            <div class="creature-card-top">
              <span>REGISTRO ${String(index + 1).padStart(2,"0")}</span>
              <span class="creature-status">DESCUBRIBLE</span>
            </div>
            <div class="game-creature-avatar">🐾</div>
            <h3>${escapeHTML(creature)}</h3>
            <p>${escapeHTML(biome.name)}</p>
            <button class="creature-open-button" type="button"
              data-creature="${escapeHTML(creature)}"
              data-biome="${escapeHTML(biome.name)}">
              VER FICHA <span>➜</span>
            </button>
          </article>
        `).join("")}
      </div>`;

    creatureGrid.querySelectorAll(".creature-open-button").forEach(button => {
      button.addEventListener("click", () =>
        openCreature(button.dataset.creature, button.dataset.biome)
      );
    });

    if (!list.length) {
      creatureGrid.innerHTML += `
        <div class="game-empty">
          <span>🔎</span>
          <h3>No hay criaturas con ese nombre</h3>
        </div>`;
    }

    if (message) message.textContent = `${list.length} criaturas encontradas en ${biome.name}.`;
  }

  select?.addEventListener("change", () => {
    if (select.value === "all") renderWorlds(search?.value || "");
    else showBiome(Number(select.value));
  });

  search?.addEventListener("input", () => {
    if (activeBiome) renderCreatures(activeBiome, search.value);
    else renderWorlds(search.value);
  });

  renderWorlds();
}

function openCreature(name, biome) {
  document.querySelector(".creature-modal")?.remove();

  const modal = document.createElement("div");
  modal.className = "creature-modal game-creature-modal";

  const biomeIndex = biomes.findIndex(item => item.name === biome);
  const creatureIndex = biomeIndex >= 0
    ? biomes[biomeIndex].creatures.indexOf(name) + 1
    : 1;

  modal.innerHTML = `
    <div class="creature-modal-content game-detail-panel" role="dialog" aria-modal="true">
      <button class="close-modal" type="button" aria-label="Cerrar">×</button>
      <div class="detail-top-line">
        <span>MUNDOS SALVAJES DATABASE</span>
        <span class="detail-live">● REGISTRO ACTIVO</span>
      </div>
      <div class="detail-creature-art">🐾</div>
      <span class="game-kicker">BESTIARIO · ${escapeHTML(biome)}</span>
      <h2>${escapeHTML(name)}</h2>
      <p class="detail-subtitle">CRIATURA #${String(creatureIndex).padStart(2,"0")}</p>
      <div class="detail-stats-grid">
        <div class="detail-stat"><span>🌎</span><small>MUNDO</small><strong>${escapeHTML(biome)}</strong></div>
        <div class="detail-stat"><span>🐾</span><small>CLASE</small><strong>Criatura</strong></div>
        <div class="detail-stat"><span>📖</span><small>REGISTRO</small><strong>Descubrible</strong></div>
      </div>
      <div class="detail-description-box">
        <span>▰ INFORMACIÓN DEL JUEGO</span>
        <p>${escapeHTML(name)} forma parte del mundo ${escapeHTML(biome)}. Esta ficha pertenece al bestiario de Mundos Salvajes. Las criaturas fantásticas son parte del universo del videojuego.</p>
      </div>
      <div class="detail-footer">
        <span>ACUATEAM GAMES</span>
        <span>BESTIARIO DIGITAL</span>
      </div>
      <button class="detail-close-button" type="button">VOLVER AL MUNDO</button>
    </div>`;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  const close = () => {
    modal.remove();
    document.body.classList.remove("modal-open");
  };

  modal.querySelector(".close-modal").addEventListener("click", close);
  modal.querySelector(".detail-close-button").addEventListener("click", close);
  modal.addEventListener("click", event => {
    if (event.target === modal) close();
  });

  const escapeHandler = event => {
    if (event.key === "Escape") {
      close();
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);
}

/* =========================================================
   ESCAPE AND RESCUE - MAPA INTERACTIVO
========================================================= */

const escapeZones = {
  forest: {
    icon: "🌳",
    title: "Forest Egg",
    description: "Área de bosque donde se muestra un huevo y una criatura.",
    detail: "Se observa un entorno verde con árboles y un huevo identificado como Forest Egg."
  },
  radioactive: {
    icon: "☢️",
    title: "Radioactive Zone",
    description: "Zona con ambientación oscura y elementos luminosos de color verde.",
    detail: "El nombre Radioactive Zone aparece en pantalla. Se distinguen caminos o plataformas con luces verdes."
  },
  christmas: {
    icon: "❄️",
    title: "Christmas Zone",
    description: "Área con una ambientación invernal y decoración relacionada con la Navidad.",
    detail: "El video muestra el rótulo CHRISTMAS ZONE y un escenario de color azul claro con nieve."
  },
  halloween: {
    icon: "🎃",
    title: "Halloween Zone",
    description: "Zona temática de Halloween con un camino morado y decoración de temporada.",
    detail: "El rótulo HALLOWEEN ZONE aparece sobre un escenario morado con calabazas y adornos."
  },
  aquatic: {
    icon: "🌊",
    title: "Aquatic Zone",
    description: "Área de color azul relacionada con el agua y la temática acuática.",
    detail: "El video muestra el rótulo AQUATIC ZONE y una plataforma azul con elementos distribuidos en el escenario."
  },
  darkforest: {
    icon: "🌙",
    title: "Bosque oscuro",
    description: "Escenario nocturno con árboles de colores, calabazas y una atmósfera de fantasía.",
    detail: "El video muestra un camino iluminado entre árboles bajo un cielo oscuro. No aparece un nombre oficial legible para esta zona."
  }
};

function initEscapeMap() {
  const map = $("#mapa-escape-rescue");
  if (!map) return;

  const buttons = map.querySelectorAll(".map-node, .map-location");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const zone = escapeZones[button.dataset.zone];
      if (!zone) return;

      buttons.forEach(item => {
        item.classList.remove("is-active", "selected");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");

      if ($("#zone-icon")) $("#zone-icon").textContent = zone.icon;
      if ($("#zone-title")) $("#zone-title").textContent = zone.title;
      if ($("#zone-description")) $("#zone-description").textContent = zone.description;
      if ($("#zone-detail")) $("#zone-detail").textContent = zone.detail;
    });
  });
}

/* =========================================================
   INICIAR TODAS LAS SECCIONES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initFish();
  initBiomes();
  initEscapeMap();
});
