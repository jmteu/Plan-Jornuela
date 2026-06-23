// ============================================================
//  DATOS DEL PLAN NUTRICIONAL · semana 22-28 junio 2026
//  Esta semana sustituye a la anterior. La web muestra solo
//  las semanas que estén dentro de "weeks".
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
      emptyDays: ["lunes"],

      params: {
        jorge:  { peso: "83 kg",   kcal: "~1.600", prot: "150 g · media semana ~131", batido: "1 scoop · media mañana" },
        manuela:{ peso: "63,5 kg", kcal: "~1.380", prot: "127 g · media semana ~109", batido: "1 scoop · merienda" }
      },
      frequencies: [
        ["Legumbres", "2 Manuela (dahl) · 0 Jorge"],
        ["Cereal integral", "1 (arroz, domingo)"],
        ["Carne magra", "5 Jorge · 3 Manuela"],
        ["Pescado azul", "2 (trucha + atún Jorge)"],
        ["Pescado blanco/marisco", "2 (gambas + bacalao)"],
        ["Huevos", "2 (viernes)"]
      ],

      faseI: {
        desayuno: {
          martes:    { j: ["pan int. 55 g · jamón serrano 45 g · tomate · 1 cda AOVE · fruta", 400], m: ["—", 0] },
          miercoles: { j: ["igual", 400], m: ["—", 0] },
          jueves:    { j: ["igual", 400], m: ["—", 0] },
          viernes:   { j: ["igual", 400], m: ["—", 0] },
          domingo:   { j: ["igual", 400], m: ["—", 0] }
        },
        media: {
          martes:    { j: ["1 scoop Evolate + fruta", 185], m: ["skyr 100 g + fruta", 130] },
          miercoles: { j: ["scoop + fruta", 185], m: ["yogur griego 0% 150 g + fruta", 156] },
          jueves:    { j: ["scoop + fruta", 185], m: ["mini-sándwich de pavo + fruta", 230] },
          viernes:   { j: ["scoop + fruta", 185], m: ["yogur griego 0% 150 g + fruta", 156] },
          domingo:   { j: ["scoop + fruta", 185], m: ["skyr 100 g + fruta", 130] }
        },
        comida: {
          martes: {
            tag: "carne",
            dish: "Solomillo de cerdo con cebolla y salsa de leche ligera + coliflor (comido)",
            j: ["solomillo 180 g · coliflor 200 g", 420],
            m: ["solomillo 150 g · coliflor 180 g", 360]
          },
          miercoles: {
            tag: null,
            j: ["Honest Greens (estimado) — ensalada griega + gyros: carne y patatas asadas", 700],
            m: ["Dahl de lentejas con pavo (tupper congelado) · ración 310 g", 400]
          },
          jueves: {
            tag: null,
            j: ["Honest Greens (estimado) — ensalada de hojas + ensalada de legumbre + atún", 520],
            m: ["Dahl de lentejas con pavo (tupper congelado) · ración 310 g · 2ª vez", 400]
          },
          viernes: {
            tag: "carne",
            dish: "Chili de ternera ligero con boniato asado",
            j: ["ternera magra picada 180 g · boniato 200 g", 480],
            m: ["ternera magra picada 150 g · boniato 170 g", 410]
          },
          domingo: {
            tag: "blanco",
            dish: "Bacalao confitado con pisto de verduras",
            j: ["bacalao 220 g · 1 cda AOVE", 290],
            m: ["bacalao 190 g · 0,75 cda AOVE", 250]
          }
        },
        merienda: {
          martes:    { j: ["yogur griego 0% 150 g + nueces 10 g", 150], m: ["1 scoop + nueces 10 g", 180] },
          miercoles: { j: ["skyr 100 g + fruta", 130], m: ["1 scoop + mousse proteico Hacendado", 190] },
          jueves:    { j: ["requesón 100 g + fruta", 166], m: ["1 scoop + nueces 10 g", 180] },
          viernes:   { j: ["mousse proteico Hacendado + nueces", 165], m: ["1 scoop + mousse proteico Hacendado", 190] },
          domingo:   { j: ["yogur griego 0% 150 g + nueces 10 g", 150], m: ["1 scoop + nueces 10 g", 180] }
        },
        cena: {
          martes: {
            tag: "carne",
            dish: "Pollo Tex-Mex en tacos de lechuga",
            j: ["pollo 180 g · aguacate 40 g · pico de gallo · 1 cda AOVE", 400],
            m: ["pollo 150 g · aguacate 30 g · 0,75 cda AOVE", 320]
          },
          miercoles: {
            tag: "azul",
            dish: "Trucha al papillote con limón y hierbas",
            j: ["trucha 200 g · 1 cda AOVE", 320],
            m: ["trucha 180 g · 0,75 cda AOVE", 290]
          },
          jueves: {
            tag: "blanco",
            dish: "Gambas a la plancha con calabacín y pimientos",
            j: ["gambas 220 g · 1 cda AOVE", 270],
            m: ["gambas 200 g · 0,75 cda AOVE", 245]
          },
          viernes: {
            tag: "huevo",
            dish: "Tortilla de calabacín y cebolla",
            j: ["2 huevos · calabacín · cebolla · 1 cda AOVE", 290],
            m: ["2 huevos · calabacín", 260]
          },
          domingo: {
            tag: "carne",
            dish: "Pavo al curry suave con leche de coco y arroz integral",
            j: ["pavo 160 g · arroz 40 g", 430],
            m: ["pavo 140 g · arroz 35 g", 380]
          }
        },
        totals: {
          martes:    { j: [1555, 144], m: [990, 109] },
          miercoles: { j: [1735, 126], m: [1036, 118] },
          jueves:    { j: [1541, 135], m: [1055, 112] },
          viernes:   { j: [1520, 109], m: [1016, 98] },
          domingo:   { j: [1455, 141], m: [940, 108] }
        }
      },

      faseII: {
        desayuno: {
          martes:    { j: "Tostada con jamón serrano, tomate y AOVE + fruta", m: "—" },
          miercoles: { j: "Misma base", m: "—" },
          jueves:    { j: "Misma base", m: "—" },
          viernes:   { j: "Misma base", m: "—" },
          domingo:   { j: "Misma base", m: "—" }
        },
        media: {
          martes:    { j: "Batido + fruta", m: "Skyr + fruta" },
          miercoles: { j: "Batido + fruta", m: "Yogur griego + fruta" },
          jueves:    { j: "Batido + fruta", m: "Mini-sándwich de pavo + fruta" },
          viernes:   { j: "Batido + fruta", m: "Yogur griego + fruta" },
          domingo:   { j: "Batido + fruta", m: "Skyr + fruta" }
        },
        comida: {
          martes: { tag: "carne", shared: "Solomillo de cerdo con cebolla pochada y un toque de leche; coliflor al vapor. Plato ya cocinado y comido este martes." },
          miercoles: {
            tag: null,
            j: "(comida fuera) Honest Greens: ensalada griega + gyros de carne con patatas asadas. Estimado, sin desglose real de carta.",
            m: "(legumbre, de batch) Dahl de lentejas con pavo, recalentado del tupper congelado."
          },
          jueves: {
            tag: null,
            j: "(comida fuera) Honest Greens: ensalada de hojas + ensalada de legumbre + atún. Estimado.",
            m: "(legumbre, de batch) Dahl de lentejas con pavo, recalentado — segunda vez esta semana."
          },
          viernes: { tag: "carne", shared: "Chili de ternera ligero: ternera magra picada con tomate, pimiento, comino y un toque de cacao puro; boniato asado entero al horno como acompañamiento." },
          domingo: { tag: "blanco", shared: "Bacalao confitado a baja temperatura; pisto de calabacín, berenjena, pimiento y tomate." }
        },
        merienda: {
          martes:    { j: "Yogur griego + nueces", m: "Batido + nueces" },
          miercoles: { j: "Skyr + fruta", m: "Batido + mousse proteico" },
          jueves:    { j: "Requesón + fruta", m: "Batido + nueces" },
          viernes:   { j: "Mousse proteico + nueces", m: "Batido + mousse proteico" },
          domingo:   { j: "Yogur griego + nueces", m: "Batido + nueces" }
        },
        cena: {
          martes: { tag: "carne", shared: "Pollo Tex-Mex: tiras de pollo marinadas en especias tipo fajita, pico de gallo fresco y aguacate, servido en hojas de lechuga en lugar de tortilla." },
          miercoles: { tag: "azul", shared: "Trucha al papillote: se cierra en su propio papel con limón, eneldo y perejil y se hornea entera; jugosa y sin añadir grasa extra." },
          jueves: { tag: "blanco", shared: "Gambas a la plancha con calabacín y pimiento salteados; ajo y perejil al final." },
          viernes: { tag: "huevo", shared: "Tortilla de calabacín y cebolla pochada, cuajada jugosa." },
          domingo: { tag: "carne", shared: "Pavo al curry: dados de pavo en salsa de curry suave con leche de coco ligera; arroz integral como base." }
        }
      },

      faseIII: {
        batch: [
          ["Dahl de lentejas con pavo (tupper congelado)", "Ya estaba congelado de un batch anterior. Se descongela y se reparte en dos raciones para Manuela: miércoles y jueves, ración de ~310 g cada día."],
          ["Martes — comida ya cocinada", "El solomillo de cerdo se preparó y comió este martes; no requiere nueva sesión de cocina."],
          ["Viernes — chili de ternera", "Se puede cocinar el jueves por la tarde; el chili gana sabor de un día para otro. El boniato se asa aparte, al momento, el viernes."],
          ["Cenas", "Sin batch: cada día se resuelve con una sola cocción (horno, plancha, papillote o wok)."]
        ],
        sessions: [
          ["Martes", "cena Tex-Mex (pollo + tacos de lechuga)"],
          ["Miércoles", "cena trucha al papillote (el dahl de Manuela ya estaba congelado)"],
          ["Jueves", "chili de ternera (para el viernes) + cena gambas"],
          ["Viernes", "boniato asado al momento + cena tortilla"],
          ["Domingo", "bacalao confitado + pavo al curry"]
        ],
        sessionsNote: "Lunes sin registro esta semana. Total: 5 sesiones de cocina reales.",
        shopping: {
          "Carnicería": "Solomillo de cerdo 330 g (ya comprado/consumido) · Pollo (pechuga) 330 g · Ternera magra picada 330 g · Pavo (pechuga) 300 g · Jamón serrano 200 g · Pavo en lonchas ~50 g",
          "Pescadería": "Trucha 380 g · Gambas peladas 420 g · Bacalao 410 g",
          "Huevos": "Huevos M: 4",
          "Legumbre y carbohidrato": "Boniato ~370 g · Arroz integral 75 g · Pan integral ~300 g + pan pequeño para sándwich",
          "Lácteos y suplemento": "Skyr 0% ~3 uds de 100 g · Yogur griego 0% ~450 g · Requesón 100 g · Evolate 2.0 ~10 scoops · Mousse proteico Hacendado 4 uds",
          "Verduras y hortalizas": "Coliflor, cebolla, lechuga, aguacate, tomate, calabacín, pimiento, berenjena, espárragos verdes, limón",
          "Despensa": "AOVE · leche de coco ligera · curry suave · comino, especias tipo fajita · cacao puro (chili) · perejil, eneldo, cilantro"
        },
        notes: [
          "<b>Comidas fuera de casa.</b> Las dos comidas de Jorge en Honest Greens (miércoles y jueves) están estimadas a falta de desglose real de carta. Si tienes el peso aproximado o la ficha nutricional del plato, lo ajusto.",
          "<b>Frecuencias movidas esta semana.</b> Jorge se queda en 0 platos de legumbre (sus dos días de dahl se sustituyen por comida fuera) y sube a 5 platos de carne magra. Manuela cubre sus 2 legumbres con el dahl congelado y su carne magra baja a 3. Es consecuencia directa de la semana, no un error de estructura.",
          "<b>Calorías y proteína de la semana (media de martes a domingo, sin lunes ni sábado).</b> Jorge: ~1.561 kcal / ~131 g de proteína. Manuela: ~1.007 kcal / ~109 g de proteína. Manuela queda más baja de lo habitual en ambas cifras; si quieres, subo alguna ración para acercarla más a su objetivo de 1.380 kcal y ~120 g.",
          "<b>kcal estimadas</b> con tablas estándar sobre gramaje en crudo, salvo las comidas fuera de casa, marcadas como estimación aparte."
        ]
      }
    }
  ]
};
