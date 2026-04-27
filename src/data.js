// ─────────────────────────────────────────────────────────────
//  EQUIPOS
// ─────────────────────────────────────────────────────────────
export const TEAMS = {
  correa:   { name: 'Team Correa',      color: '#E63946' },
  mini:     { name: 'Los Minitamanin', color: '#2A9D8F' },
  lituanas: { name: 'Lituanas',    color: '#9B59B6' },
  smegma:   { name: 'Team Smegma',      color: '#E9C46A' },
}

// ─────────────────────────────────────────────────────────────
//  CALENDARIO (fijo, no tocar)
// ─────────────────────────────────────────────────────────────
export const SCHEDULE = [
  { j: 1, matches: [['correa','mini'],   ['smegma','lituanas']] },
  { j: 2, matches: [['correa','smegma'], ['mini','lituanas']]   },
  { j: 3, matches: [['correa','lituanas'],['mini','smegma']]    },
  { j: 4, matches: [['correa','mini'],   ['smegma','lituanas']] },
  { j: 5, matches: [['correa','smegma'], ['mini','lituanas']]   },
  { j: 6, matches: [['correa','lituanas'],['mini','smegma']]    },
]

// ─────────────────────────────────────────────────────────────
//  RESULTADOS
//  Formato: { 'j1_m0': [2, 1], 'j1_m1': [0, 2], ... }
//  El par [A, B] = games ganados por el equipo local y visitante
//  respectivamente (máximo 2 cada uno, al mejor de 3).
//  Deja null si el partido no se ha jugado.
// ─────────────────────────────────────────────────────────────
export const RESULTS = {
  // Jornada 1 (ya jugada — pon aquí los resultados reales)
  j1_m0: [2,0], // correa vs minitamanin
  j1_m1: [0,2], // smegma vs lituanas

  // Jornada 2
  j2_m0: null,
  j2_m1: null,

  // Jornada 3
  j3_m0: null,
  j3_m1: null,

  // Jornada 4
  j4_m0: null,
  j4_m1: null,

  // Jornada 5
  j5_m0: null,
  j5_m1: null,

  // Jornada 6
  j6_m0: null,
  j6_m1: null,
}

// ─────────────────────────────────────────────────────────────
//  REPETICIONES
//  Pon la ruta relativa del .html de Showdown en /public/replays/
//  Ejemplo: j1_m0: '/replays/j1_correa_vs_mini.html'
// ─────────────────────────────────────────────────────────────
export const REPLAYS = {
  j1_m0: [
    '/IIICopaPiston/replays/Jornada1-MinitamaninVSCorrea-Game1.html',
    '/IIICopaPiston/replays/Jornada1-MinitamaninVSCorrea-Game2.html',
  ],
  j1_m1: [
    '/IIICopaPiston/replays/Jornada1-LituanasVSSmegama-Game1.html',
    '/IIICopaPiston/replays/Jornada1-LituanasVSSmegama-Game2.html',
  ],
  j2_m0: [],
  j2_m1: [],
  j3_m0: [],
  j3_m1: [],
  j4_m0: [],
  j4_m1: [],
  j5_m0: [],
  j5_m1: [],
  j6_m0: [],
  j6_m1: [],
}