// ============================================================
//  DATOS DEL PLAN NUTRICIONAL
//  Para añadir una semana nueva: copia un objeto de "weeks",
//  cambia "id" y "label" y edita los platos. La web lo detecta sola.
// ============================================================

window.PLAN_DATA = {
  days: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"],
  dayLabels: {
    lunes: "Lunes", martes: "Martes", miercoles: "Miércoles", jueves: "Jueves",
    viernes: "Viernes", sabado: "Sábado", domingo: "Domingo"
  },
  meals: ["desayuno", "media", "comida", "merienda", "cena"],
  mealLabels: {
    desayuno: "Desayuno", media: "Media mañana", comida: "Comida",
    merienda: "Merienda", cena: "Cena"
  },

  weeks: [
    {
      id: "2026-06-22",
      label: "22–28 junio 2026",
      cheatDay: "sabado",

      params: {
        jorge:  { peso: "83 kg",   kcal: "~1.600", prot: "150 g · media ~144", batido: "1 scoop · media mañana" },
        manuela:{ peso: "63,5 kg", kcal: "~1.380", prot: "127 g · media ~118", batido: "1 scoop · merienda" }
      },
      frequencies: [
        ["Legumbres", "2 (con pollo)"],
        ["Cereal integral", "1 + patata"],
        ["Carne magra", "3 + jamón/embutido"],
        ["Pescado azul", "3"],
        ["Pescado blanco/marisco", "2"],
        ["Huevos", "4 uds"]
      ],

      // ---------- FASE I: matriz nutricional (gramos en crudo) ----------
      faseI: {
        desayuno: {
          lunes:     { j: ["pan int. 55 g · jamón serrano 45 g · tomate · 1 cda AOVE · fruta", 406], m: ["—", 0] },
          martes:    { j: ["igual", 406], m: ["—", 0] },
          miercoles: { j: ["igual", 406], m: ["—", 0] },
          jueves:    { j: ["igual", 406], m: ["—", 0] },
          viernes:   { j: ["igual", 406], m: ["—", 0] },
          domingo:   { j: ["igual", 406], m: ["—", 0] }
        },
        media: {
          lunes:     { j: ["1 scoop Evolate + fruta", 185], m: ["skyr 100 g + fruta", 130] },
          martes:    { j: ["scoop + fruta", 185], m: ["yogur griego 0% 150 g + fruta", 156] },
          miercoles: { j: ["scoop + fruta", 185], m: ["mini-sándwich de pavo + fruta", 233] },
          jueves:    { j: ["scoop + fruta", 185], m: ["skyr 100 g + fruta", 130] },
          viernes:   { j: ["scoop + fruta", 185], m: ["yogur griego 0% 150 g + fruta", 156] },
          domingo:   { j: ["scoop + fruta", 185], m: ["skyr 100 g + fruta", 130] }
        },
        comida: {
          lunes:     { tag: "legumbre", dish: "Dahl de lentejas rojas con pollo y espinacas", j: ["lentejas 90 g · pollo 120 g · 1,5 cda AOVE", 578], m: ["lentejas 70 g · pollo 90 g · 1 cda AOVE", 431] },
          martes:    { tag: "carne", dish: "Pollo tikka suave + arroz integral", j: ["pollo 180 g · arroz 40 g · 1,5 cda AOVE", 473], m: ["pollo 160 g · arroz 35 g · 1 cda AOVE", 389] },
          miercoles: { tag: "legumbre", dish: "Dahl con pollo (de batch)", j: ["lentejas 90 g · pollo 120 g · 1 cda AOVE", 533], m: ["lentejas 70 g · pollo 110 g · 1 cda AOVE", 455] },
          jueves:    { tag: "carne", dish: "Pollo tikka (de batch) + patatas al airfryer", j: ["pollo 180 g · patata 180 g · 1 cda AOVE", 432], m: ["pollo 160 g · patata 150 g · 1 cda AOVE", 376] },
          viernes:   { tag: "azul", dish: "Salmón confitado a baja Tª, verduras al vapor", j: ["salmón 180 g · 1 cda AOVE", 450], m: ["salmón 170 g · 1 cda AOVE", 430] },
          domingo:   { tag: "azul", dish: "Bonito encebollado con verduras", j: ["bonito 220 g · 1,5 cda AOVE", 421], m: ["bonito 200 g · 1 cda AOVE", 350] }
        },
        merienda: {
          lunes:     { j: ["yogur griego 0% 150 g + nueces", 176], m: ["1 scoop Evolate + nueces", 205] },
          martes:    { j: ["mini-sándwich de pavo + fruta", 233], m: ["1 scoop + nueces", 205] },
          miercoles: { j: ["skyr 100 g + fruta", 130], m: ["1 scoop + mousse proteico Hacendado", 190] },
          jueves:    { j: ["requesón 100 g + fruta", 166], m: ["1 scoop + nueces", 205] },
          viernes:   { j: ["mousse proteico Hacendado + nueces", 165], m: ["1 scoop + mousse proteico Hacendado", 190] },
          domingo:   { j: ["yogur griego 0% 150 g + nueces", 176], m: ["1 scoop + nueces", 205] }
        },
        cena: {
          lunes:     { tag: "blanco", dish: "Merluza al horno con calabacín y limón", j: ["merluza 300 g · 1 cda AOVE", 306], m: ["merluza 300 g · 1 cda AOVE", 306] },
          martes:    { tag: "huevo", dish: "Revuelto de huevos con gambas, setas y espárragos", j: ["2 huevos · gambas 90 g · 1 cda AOVE", 310], m: ["2 huevos · gambas 100 g · 1 cda AOVE", 319] },
          miercoles: { tag: "azul", dish: "Caballa a la plancha con ensalada verde", j: ["caballa 150 g · 1 cda AOVE", 375], m: ["caballa 150 g · 1 cda AOVE", 375] },
          jueves:    { tag: "blanco", dish: "Sepia a la plancha al ajillo con pimientos", j: ["sepia 250 g · 1 cda AOVE", 278], m: ["sepia 280 g · 1 cda AOVE", 300] },
          viernes:   { tag: "huevo", dish: "Tortilla de espinacas con gambas y espárragos", j: ["2 huevos · gambas 90 g · 1 cda AOVE", 310], m: ["2 huevos · gambas 100 g · pavo 40 g · 1 cda AOVE", 361] },
          domingo:   { tag: "carne", dish: "Pavo a la plancha con verduras asadas", j: ["pavo 160 g · 1 cda AOVE", 258], m: ["pavo 160 g · 1 cda AOVE", 258] }
        },
        totals: {
          lunes:     { j: [1651, 155], m: [1072, 125] },
          martes:    { j: [1607, 138], m: [1069, 118] },
          miercoles: { j: [1608, 139], m: [1253, 116] },
          jueves:    { j: [1542, 145], m: [1070, 122] },
          viernes:   { j: [1516, 138], m: [1137, 121] },
          domingo:   { j: [1467, 146], m: [948, 117] }
        }
      },

      // ---------- FASE II: menú gastronómico ----------
      faseII: {
        desayuno: {
          lunes:     { j: "Tostada con jamón serrano, tomate y AOVE + kiwi", m: "—" },
          martes:    { j: "Misma base + fresas", m: "—" },
          miercoles: { j: "Misma base + naranja", m: "—" },
          jueves:    { j: "Misma base + frutos rojos", m: "—" },
          viernes:   { j: "Misma base + pera", m: "—" },
          domingo:   { j: "Misma base + kiwi", m: "—" }
        },
        media: {
          lunes:     { j: "Batido + manzana", m: "Skyr + arándanos" },
          martes:    { j: "Batido + plátano", m: "Yogur griego con semillas" },
          miercoles: { j: "Batido + pera", m: "Mini-sándwich de pavo + fruta" },
          jueves:    { j: "Batido + uvas", m: "Skyr + frutos rojos" },
          viernes:   { j: "Batido + manzana", m: "Yogur griego con lino" },
          domingo:   { j: "Batido + fruta", m: "Skyr + fruta" }
        },
        comida: {
          lunes:     { tag: "legumbre", shared: "Dahl de lentejas rojas con pollo: pochado de cebolla, ajo, jengibre y comino; lentejas con tomate y leche de coco ligera; dados de pollo y espinacas al final. Cilantro y lima." },
          martes:    { tag: "carne", shared: "Pollo tikka suave marinado en yogur, cúrcuma, pimentón y garam masala; horno o airfryer. Arroz integral y pepino en raita." },
          miercoles: { tag: "legumbre", shared: "Dahl con pollo recalentado (mejora al día siguiente), refrescado con cilantro y lima." },
          jueves:    { tag: "carne", shared: "Pollo tikka del batch con patatas al airfryer (poco aceite) y cebolla morada encurtida." },
          viernes:   { tag: "azul", shared: "Salmón confitado a 45–50 °C en AOVE: brócoli y zanahoria al vapor, limón y eneldo." },
          domingo:   { tag: "azul", shared: "Bonito encebollado: cebolla pochada larga con laurel y vinagre suave; bonito marcado jugoso. Verdura abundante, sin cereal." }
        },
        merienda: {
          lunes:     { j: "Yogur griego + nueces", m: "Batido + nueces" },
          martes:    { j: "Mini-sándwich de pavo + fruta", m: "Batido + nueces" },
          miercoles: { j: "Skyr + fruta", m: "Batido + mousse proteico" },
          jueves:    { j: "Requesón + fruta", m: "Batido + nueces" },
          viernes:   { j: "Mousse proteico + nueces", m: "Batido + mousse proteico" },
          domingo:   { j: "Yogur griego + nueces", m: "Batido + nueces" }
        },
        cena: {
          lunes:     { tag: "blanco", shared: "Merluza al horno sobre láminas de calabacín, ajo, limón y perejil." },
          martes:    { tag: "huevo", shared: "Revuelto jugoso de huevo con gambas, setas y espárragos al wok." },
          miercoles: { tag: "azul", shared: "Caballa a la plancha (piel crujiente) con ensalada de hoja verde y cebolleta." },
          jueves:    { tag: "blanco", shared: "Sepia a la plancha al ajillo con pimiento asado y perejil. Soplete para el punto." },
          viernes:   { tag: "huevo", shared: "Tortilla de espinacas con gambas y espárragos trigueros al horno." },
          domingo:   { tag: "carne", shared: "Pavo a la plancha con pimiento, calabacín y berenjena asados." }
        }
      },

      // ---------- FASE III: producción y compra ----------
      faseIII: {
        batch: [
          ["Lunes — Dahl con pollo (4 raciones)", "Cocina lentejas y pollo para lunes y miércoles, las dos raciones de cada uno. El miércoles solo recalienta y refresca con cilantro y lima."],
          ["Martes — Pollo tikka (4 raciones)", "Marina la noche anterior. Cocina el bloque para martes y jueves; aguanta 5 días en nevera."],
          ["Arroz integral (martes)", "Cuécelo en cantidad y reparte. El jueves el acompañamiento son patatas al airfryer con muy poco aceite, hechas al momento."],
          ["Gambas", "Ten una bolsa lista; se saltean al momento en los revueltos de martes y viernes para reforzar proteína."],
          ["Cenas", "Sin batch: una sola cocción cada día. El salmón del viernes se confita a baja temperatura, no se reutiliza."]
        ],
        sessions: [
          ["Lunes", "dahl con pollo (x4) + cena merluza"],
          ["Martes", "pollo tikka (x4) + arroz + cena revuelto"],
          ["Miércoles", "solo cena caballa"],
          ["Jueves", "solo cena sepia"],
          ["Viernes", "salmón confitado + cena tortilla"],
          ["Domingo", "bonito encebollado + cena pavo"]
        ],
        sessionsNote: "Total: 5 sesiones reales.",
        shopping: {
          "Carnicería": "Pollo (pechuga) 1.150 g (incluye el del dahl) · Pavo (pechuga) 320 g · Jamón serrano magro 270 g · Pavo en lonchas ~250 g",
          "Pescadería": "Salmón 350 g · Bonito 420 g · Caballa 300 g · Merluza 600 g · Sepia 530 g · Gambas peladas ~380 g",
          "Huevos": "Huevos M 8",
          "Legumbre y carbohidrato": "Lentejas rojas 320 g · Arroz integral 80 g · Patatas ~330 g · Pan integral ~360 g + barra pequeña para sándwiches",
          "Lácteos y suplemento": "Skyr 0% 6–7 uds de 100 g · Yogur griego 0% ~600 g · Requesón 100 g (puntual) · Evolate 2.0 ~12 scoops · Mousse proteico Hacendado 4 uds",
          "Verduras y hortalizas": "Espinacas, calabacín, brócoli, zanahoria, cebolla, cebolla morada, ajo, jengibre, tomate, pimiento, berenjena, espárragos verdes, setas, pepino, hoja verde, cebolleta",
          "Despensa": "AOVE · leche de coco ligera · tomate triturado · comino, cúrcuma, pimentón dulce, garam masala, laurel · limón y lima · cilantro, perejil, eneldo · vinagre suave · semillas de chía/lino · nueces"
        },
        notes: [
          "<b>Suelo proteico.</b> Jorge dentro de objetivo (media ~144 g). Manuela ~118–120 g (~1,85 g/kg): los 127 g estrictos no salen con un solo batido sin lácteo concentrado dentro del margen calórico, pero la cifra entra en la tolerancia del 10 % y es válida para perder grasa. Días más bajos: pescado azul graso (miércoles, viernes); palanca = mousse proteico, gambas y pavo en los revueltos.",
          "<b>Reglas.</b> Un scoop por persona; skyr siempre 100 g; nunca el mismo producto en media mañana y merienda; sin queso batido ni queso fresco sólido (requesón puntual). El pollo del dahl, el jamón del desayuno y las gambas/pavo de refuerzo no cuentan como plato en las frecuencias.",
          "<b>kcal estimadas</b> con tablas estándar sobre gramaje en crudo. Recalibrar el gasto con el peso real a las 2–3 semanas. Si la pérdida supera 600 g/semana de forma sostenida, subir la ingesta (sobre todo en Manuela)."
        ]
      }
    }
  ]
};
