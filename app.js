// ============================================================
//  LÓGICA DE LA APP  ·  lee window.PLAN_DATA y construye la web
// ============================================================

const D = window.PLAN_DATA;
const DAYS = D.days;

// --- estado (persistido localmente en el dispositivo cuando se puede) ---
const store = {
  get(k, def) { try { const v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch { return def; } },
  set(k, v)   { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

let state = {
  weekId:  store.get("weekId", D.weeks[0].id),
  person:  store.get("person", "ambos"),   // ambos | jorge | manuela
  fase:    store.get("fase", "faseI")      // faseI | faseII | faseIII
};

function week() { return D.weeks.find(w => w.id === state.weekId) || D.weeks[0]; }

// --- helpers de render ---
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const showJ = () => state.person !== "manuela";
const showM = () => state.person !== "jorge";

function personCell(j, m) {
  // j / m son textos; devuelve el HTML de la(s) línea(s) según el filtro
  let out = "";
  if (showJ() && j != null) out += `<span class="gram"><b class="j">J:</b> ${j}</span>`;
  if (showM() && m != null) out += `<span class="gram"><b class="m">M:</b> ${m}</span>`;
  return out || `<span class="gram">—</span>`;
}

function kcalLine(jk, mk) {
  const parts = [];
  if (showJ() && jk != null) parts.push(`J ${jk}`);
  if (showM() && mk != null) parts.push(`M ${mk}`);
  return parts.length ? `<span class="kcal">${parts.join(" · ")}</span>` : "";
}

// ============================================================
//  FASE I  ·  matriz nutricional
// ============================================================
function renderFaseI() {
  const w = week(), f = w.faseI;
  const wrap = el("div");
  wrap.appendChild(el("div", "phase", "Fase I"));
  wrap.appendChild(el("h2", null, "Matriz nutricional"));
  wrap.appendChild(el("p", "sub", "Gramos en crudo y limpio. Marca cada ingesta al cumplirla (se guarda en este dispositivo)."));

  const scroll = el("div", "scroll");
  const table = el("table");
  // cabecera
  let head = "<thead><tr><th>Ingesta</th>";
  DAYS.forEach(d => head += `<th>${D.dayLabels[d]}</th>`);
  head += "</tr></thead>";
  // cuerpo
  let body = "<tbody>";
  D.meals.forEach(meal => {
    body += `<tr><td class="rowlabel">${D.mealLabels[meal]}</td>`;
    DAYS.forEach(d => {
      if (d === w.cheatDay) {
        if (meal === D.meals[0]) {
          body += `<td rowspan="${D.meals.length}" class="cheat">SÁBADO<br>Cheat day<br><span class="cheatsub">Sin pesajes ni cómputo</span></td>`;
        }
        return;
      }
      const c = f[meal][d];
      let inner = "";
      if (c.tag) inner += `<span class="tag t-${c.tag}">${tagLabel(c.tag)}</span>`;
      if (c.dish) inner += `<span class="dish">${c.dish}</span>`;
      inner += personCell(c.j[0], c.m[0]);
      inner += kcalLine(c.j[1], c.m[1]);
      const key = `done:${w.id}:${meal}:${d}`;
      const done = store.get(key, false);
      inner += `<label class="check"><input type="checkbox" data-key="${key}" ${done ? "checked" : ""}><span>hecho</span></label>`;
      body += `<td class="${done ? "is-done" : ""}">${inner}</td>`;
    });
    body += "</tr>";
  });
  // totales
  body += `<tr class="total"><td class="rowlabel">Total día</td>`;
  DAYS.forEach(d => {
    if (d === w.cheatDay) { return; }
    const t = f.totals[d];
    let inner = "";
    if (showJ()) inner += `<span class="gram"><b class="j">J:</b> ~${t.j[0]} kcal · ${t.j[1]} g</span>`;
    if (showM()) inner += `<span class="gram"><b class="m">M:</b> ~${t.m[0]} kcal · ${t.m[1]} g</span>`;
    inner += `<span class="kcal">${objetivoLine()}</span>`;
    body += `<td>${inner}</td>`;
  });
  body += "</tr></tbody>";

  table.innerHTML = head + body;
  scroll.appendChild(table);
  wrap.appendChild(scroll);
  return wrap;
}

function objetivoLine() {
  const w = week();
  const parts = [];
  if (showJ()) parts.push(`obj J ${w.params.jorge.kcal}`);
  if (showM()) parts.push(`obj M ${w.params.manuela.kcal}`);
  return parts.join(" · ");
}

function tagLabel(t) {
  return { legumbre: "Legumbre", carne: "Carne magra", azul: "Pescado azul", blanco: "Blanco/marisco", huevo: "Huevos" }[t] || t;
}

// ============================================================
//  FASE II  ·  menú gastronómico
// ============================================================
function renderFaseII() {
  const w = week(), f = w.faseII;
  const wrap = el("div");
  wrap.appendChild(el("div", "phase", "Fase II"));
  wrap.appendChild(el("h2", null, "Menú gastronómico"));
  wrap.appendChild(el("p", "sub", "Base mediterránea con giros latino y asiático. Picante bajo."));

  const scroll = el("div", "scroll");
  const table = el("table");
  let head = "<thead><tr><th>Ingesta</th>";
  DAYS.forEach(d => head += `<th>${D.dayLabels[d]}</th>`);
  head += "</tr></thead>";

  let body = "<tbody>";
  D.meals.forEach(meal => {
    body += `<tr><td class="rowlabel">${D.mealLabels[meal]}</td>`;
    DAYS.forEach(d => {
      if (d === w.cheatDay) {
        if (meal === D.meals[0]) body += `<td rowspan="${D.meals.length}" class="cheat">Cheat day</td>`;
        return;
      }
      const c = f[meal][d];
      let inner = "";
      if (c.tag) inner += `<span class="tag t-${c.tag}">${tagLabel(c.tag)}</span>`;
      if (c.shared) {
        inner += c.shared;
      } else {
        inner += personCell(c.j, c.m);
      }
      body += `<td>${inner}</td>`;
    });
    body += "</tr>";
  });
  body += "</tbody>";
  table.innerHTML = head + body;
  scroll.appendChild(table);
  wrap.appendChild(scroll);
  return wrap;
}

// ============================================================
//  FASE III  ·  producción y compra
// ============================================================
function renderFaseIII() {
  const w = week(), f = w.faseIII;
  const wrap = el("div");
  wrap.appendChild(el("div", "phase", "Fase III"));
  wrap.appendChild(el("h2", null, "Producción y compra"));

  const grid = el("div", "grid2");

  const b1 = el("div", "box");
  b1.appendChild(el("h3", null, "Guía de batch cooking"));
  const ul1 = el("ul");
  f.batch.forEach(([t, d]) => ul1.appendChild(el("li", null, `<b>${t}.</b> ${d}`)));
  b1.appendChild(ul1);

  const b2 = el("div", "box");
  b2.appendChild(el("h3", null, "Sesiones de cocina"));
  const ul2 = el("ul");
  f.sessions.forEach(([t, d]) => ul2.appendChild(el("li", null, `<b>${t}:</b> ${d}.`)));
  b2.appendChild(ul2);
  b2.appendChild(el("p", "sub", f.sessionsNote));

  grid.appendChild(b1); grid.appendChild(b2);
  wrap.appendChild(grid);

  wrap.appendChild(el("h3", null, "Lista de la compra consolidada"));
  const shop = el("div", "box");
  const dl = el("dl", "shop");
  Object.entries(f.shopping).forEach(([cat, items]) => {
    dl.appendChild(el("dt", null, cat));
    dl.appendChild(el("dd", null, items));
  });
  shop.appendChild(dl);
  wrap.appendChild(shop);

  f.notes.forEach(n => wrap.appendChild(el("div", "note", n)));
  return wrap;
}

// ============================================================
//  CABECERA (parámetros + frecuencias)
// ============================================================
function renderHeaderInfo() {
  const w = week();
  const box = document.getElementById("params");
  const cards = [];
  if (showJ()) cards.push(pcard("j", "Jorge", w.params.jorge));
  if (showM()) cards.push(pcard("m", "Manuela", w.params.manuela));
  cards.push(freqCard(w.frequencies));
  box.innerHTML = cards.join("");
}
function pcard(cls, name, p) {
  return `<div class="pcard ${cls}">
    <div class="who">${name} · ${p.peso}</div>
    <div class="prow"><span>Objetivo diario</span><span class="v big">${p.kcal} kcal</span></div>
    <div class="prow"><span>Proteína</span><span class="v big">${p.prot}</span></div>
    <div class="prow"><span>Batido</span><span class="v">${p.batido}</span></div>
  </div>`;
}
function freqCard(freqs) {
  let rows = freqs.map(([k, v]) => `<div class="prow"><span>${k}</span><span class="v">${v}</span></div>`).join("");
  return `<div class="pcard"><div class="who" style="color:var(--ink)">Frecuencias semana</div>${rows}</div>`;
}

// ============================================================
//  MONTAJE Y EVENTOS
// ============================================================
function renderMain() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  if (state.fase === "faseI")  main.appendChild(renderFaseI());
  if (state.fase === "faseII") main.appendChild(renderFaseII());
  if (state.fase === "faseIII")main.appendChild(renderFaseIII());

  main.querySelectorAll('input[type="checkbox"][data-key]').forEach(cb => {
    cb.addEventListener("change", e => {
      store.set(e.target.dataset.key, e.target.checked);
      e.target.closest("td").classList.toggle("is-done", e.target.checked);
    });
  });
}

function syncControls() {
  document.querySelectorAll("[data-person]").forEach(b =>
    b.classList.toggle("active", b.dataset.person === state.person));
  document.querySelectorAll("[data-fase]").forEach(b =>
    b.classList.toggle("active", b.dataset.fase === state.fase));
  const sel = document.getElementById("weekSel");
  if (sel) sel.value = state.weekId;
}

function rerender() { renderHeaderInfo(); renderMain(); syncControls(); }

function init() {
  // selector de semana
  const sel = document.getElementById("weekSel");
  D.weeks.forEach(w => { const o = el("option"); o.value = w.id; o.textContent = w.label; sel.appendChild(o); });
  sel.addEventListener("change", e => { state.weekId = e.target.value; store.set("weekId", state.weekId); rerender(); });

  document.querySelectorAll("[data-person]").forEach(b =>
    b.addEventListener("click", () => { state.person = b.dataset.person; store.set("person", state.person); rerender(); }));
  document.querySelectorAll("[data-fase]").forEach(b =>
    b.addEventListener("click", () => { state.fase = b.dataset.fase; store.set("fase", state.fase); rerender(); }));

  rerender();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", init);
