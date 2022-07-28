export interface IndicadorInstitucion{
    readonly value: string;
    readonly label: string;
}

export const indicadorInstitucion: readonly IndicadorInstitucion[] = [
  {value: 'todas', label: 'Todas'},   
  {value: 'ncbp', label: 'Comisión Nacional de Búsqueda de Personas'},
  {value: 'cdmx', label: 'Ciudad de México'},
  {value: 'jal', label: 'Jalisco'},
  {value: 'mor', label: 'Morelos'},
  {value: 'tamps', label: 'Tamaulipas'},
  {value: 'tlax', label: 'Tlaxcala'},
  {value: 'fgr', label: 'Fiscalía General de la República'},
  {value: 'bc', label: 'Baja California'},
  {value: 'chih', label: 'Chihuahua'},
  {value: 'coah', label: 'Coahuila'},
  {value: 'edomex', label: 'Estado de México'},
  {value: 'gto', label: 'Guanajuato'},
  {value: 'hgo', label: 'Hidalgo'},
  {value: 'nl', label: 'Nuevo León'},
  {value: 'quero', label: 'Querétaro'},
  {value: 'qroo', label: 'Quintana Roo'},
  {value: 'slp', label: 'San Luis Potosí'},
  {value: 'zac', label: 'Zacatecas'},
  {value: 'chis', label: 'Chiapas'},
];

export interface IndicadorAnio{
  readonly value: string;
  readonly label: string;
}

export const indicadorAnio: readonly IndicadorAnio[] = [
  {value: 'todos', label: 'Todos'},
  {value: '2020', label: '2020'},
  {value: '2021', label: '2021'},
  {value: '2022', label: '2022'},
];

export interface IndicadorTrimestre{
    readonly value: string;
    readonly label: string;
}

export const indicadorTrimestre: readonly IndicadorTrimestre[] = [
  {value: 'todos', label: 'Todos'},
  {value: '1', label: 'I'},
  {value: '2', label: 'II'},
  {value: '3', label: 'III'},
  {value: '4', label: 'IV'},
];

export interface AnioTrimestre{
  readonly anio: string;
  readonly trim: string;
  readonly anioTrim: string;
}

export const anioTrimestre: readonly AnioTrimestre[] = [
  {anio: '2020', trim: '1', anioTrim: "2020-I"},
  {anio: '2020', trim: '2', anioTrim: "2020-II"},
  {anio: '2020', trim: '3', anioTrim: "2020-III"},
  {anio: '2020', trim: '4', anioTrim: "2020-IV"},
  {anio: '2021', trim: '1', anioTrim: "2020-I"},
  {anio: '2021', trim: '2', anioTrim: "2020-II"},
  {anio: '2021', trim: '3', anioTrim: "2020-III"},
  {anio: '2021', trim: '4', anioTrim: "2020-IV"},
  {anio: '2022', trim: '1', anioTrim: "2020-I"},
  {anio: '2022', trim: '2', anioTrim: "2020-II"},
  {anio: '2022', trim: '3', anioTrim: "2020-III"},
  {anio: '2022', trim: '4', anioTrim: "2020-IV"},
];

export const baseCSV = [
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 1823,
    "Personas con coincidencias para identificación": 1088,
    "Personas confirmadas con dictamen pericial": 723
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 38,
    "Personas con huella para confronta": 1775,
    "Personas con coincidencias para identificación": 283,
    "Personas confirmadas con dictamen pericial": 337
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Jalisco",
    "Oficios de solicitud": 31,
    "Personas con huella para confronta": 584,
    "Personas con coincidencias para identificación": 52,
    "Personas confirmadas con dictamen pericial": 576
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Morelos",
    "Oficios de solicitud": 36,
    "Personas con huella para confronta": 1364,
    "Personas con coincidencias para identificación": 601,
    "Personas confirmadas con dictamen pericial": 730
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Querétaro",
    "Oficios de solicitud": 28,
    "Personas con huella para confronta": 261,
    "Personas con coincidencias para identificación": 699,
    "Personas confirmadas con dictamen pericial": 765
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 35,
    "Personas con huella para confronta": 1869,
    "Personas con coincidencias para identificación": 1080,
    "Personas confirmadas con dictamen pericial": 196
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 1,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 20,
    "Personas con huella para confronta": 2101,
    "Personas con coincidencias para identificación": 352,
    "Personas confirmadas con dictamen pericial": 118
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 17,
    "Personas con huella para confronta": 1118,
    "Personas con coincidencias para identificación": 818,
    "Personas confirmadas con dictamen pericial": 90
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 40,
    "Personas con coincidencias para identificación": 280,
    "Personas confirmadas con dictamen pericial": 454
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Jalisco",
    "Oficios de solicitud": 29,
    "Personas con huella para confronta": 772,
    "Personas con coincidencias para identificación": 151,
    "Personas confirmadas con dictamen pericial": 299
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Morelos",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 452,
    "Personas con coincidencias para identificación": 36,
    "Personas confirmadas con dictamen pericial": 307
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Querétaro",
    "Oficios de solicitud": 36,
    "Personas con huella para confronta": 1574,
    "Personas con coincidencias para identificación": 578,
    "Personas confirmadas con dictamen pericial": 348
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 8,
    "Personas con huella para confronta": 1095,
    "Personas con coincidencias para identificación": 802,
    "Personas confirmadas con dictamen pericial": 136
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 2,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 3,
    "Personas con huella para confronta": 1650,
    "Personas con coincidencias para identificación": 811,
    "Personas confirmadas con dictamen pericial": 585
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 8,
    "Personas con huella para confronta": 259,
    "Personas con coincidencias para identificación": 810,
    "Personas confirmadas con dictamen pericial": 600
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 24,
    "Personas con huella para confronta": 1018,
    "Personas con coincidencias para identificación": 881,
    "Personas confirmadas con dictamen pericial": 189
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Jalisco",
    "Oficios de solicitud": 27,
    "Personas con huella para confronta": 600,
    "Personas con coincidencias para identificación": 241,
    "Personas confirmadas con dictamen pericial": 225
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Morelos",
    "Oficios de solicitud": 22,
    "Personas con huella para confronta": 2085,
    "Personas con coincidencias para identificación": 104,
    "Personas confirmadas con dictamen pericial": 464
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Querétaro",
    "Oficios de solicitud": 34,
    "Personas con huella para confronta": 102,
    "Personas con coincidencias para identificación": 472,
    "Personas confirmadas con dictamen pericial": 437
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 32,
    "Personas con huella para confronta": 1540,
    "Personas con coincidencias para identificación": 351,
    "Personas confirmadas con dictamen pericial": 115
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 3,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 27,
    "Personas con huella para confronta": 1376,
    "Personas con coincidencias para identificación": 691,
    "Personas confirmadas con dictamen pericial": 797
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 1174,
    "Personas con coincidencias para identificación": 909,
    "Personas confirmadas con dictamen pericial": 693
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 32,
    "Personas con huella para confronta": 1627,
    "Personas con coincidencias para identificación": 236,
    "Personas confirmadas con dictamen pericial": 285
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Jalisco",
    "Oficios de solicitud": 29,
    "Personas con huella para confronta": 1105,
    "Personas con coincidencias para identificación": 304,
    "Personas confirmadas con dictamen pericial": 757
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Morelos",
    "Oficios de solicitud": 6,
    "Personas con huella para confronta": 2249,
    "Personas con coincidencias para identificación": 305,
    "Personas confirmadas con dictamen pericial": 621
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Querétaro",
    "Oficios de solicitud": 32,
    "Personas con huella para confronta": 2022,
    "Personas con coincidencias para identificación": 126,
    "Personas confirmadas con dictamen pericial": 221
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 16,
    "Personas con huella para confronta": 1407,
    "Personas con coincidencias para identificación": 610,
    "Personas confirmadas con dictamen pericial": 90
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2020,
    "Trimestre": 4,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 28,
    "Personas con huella para confronta": 2071,
    "Personas con coincidencias para identificación": 924,
    "Personas confirmadas con dictamen pericial": 231
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 1,
    "Personas con huella para confronta": 84,
    "Personas con coincidencias para identificación": 48,
    "Personas confirmadas con dictamen pericial": 29
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Fiscalía General de la República",
    "Oficios de solicitud": 38,
    "Personas con huella para confronta": 717,
    "Personas con coincidencias para identificación": 977,
    "Personas confirmadas con dictamen pericial": 113
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Baja California",
    "Oficios de solicitud": 17,
    "Personas con huella para confronta": 186,
    "Personas con coincidencias para identificación": 637,
    "Personas confirmadas con dictamen pericial": 766
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Chihuahua",
    "Oficios de solicitud": 37,
    "Personas con huella para confronta": 1578,
    "Personas con coincidencias para identificación": 905,
    "Personas confirmadas con dictamen pericial": 445
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 4,
    "Personas con huella para confronta": 1276,
    "Personas con coincidencias para identificación": 937,
    "Personas confirmadas con dictamen pericial": 470
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Coahuila",
    "Oficios de solicitud": 8,
    "Personas con huella para confronta": 771,
    "Personas con coincidencias para identificación": 925,
    "Personas confirmadas con dictamen pericial": 683
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Estado de México",
    "Oficios de solicitud": 3,
    "Personas con huella para confronta": 978,
    "Personas con coincidencias para identificación": 986,
    "Personas confirmadas con dictamen pericial": 553
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Guanajuato",
    "Oficios de solicitud": 34,
    "Personas con huella para confronta": 1951,
    "Personas con coincidencias para identificación": 469,
    "Personas confirmadas con dictamen pericial": 455
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Hidalgo",
    "Oficios de solicitud": 16,
    "Personas con huella para confronta": 1437,
    "Personas con coincidencias para identificación": 287,
    "Personas confirmadas con dictamen pericial": 364
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Jalisco",
    "Oficios de solicitud": 26,
    "Personas con huella para confronta": 1978,
    "Personas con coincidencias para identificación": 135,
    "Personas confirmadas con dictamen pericial": 416
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Morelos",
    "Oficios de solicitud": 31,
    "Personas con huella para confronta": 575,
    "Personas con coincidencias para identificación": 432,
    "Personas confirmadas con dictamen pericial": 48
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Nuevo León",
    "Oficios de solicitud": 6,
    "Personas con huella para confronta": 13,
    "Personas con coincidencias para identificación": 719,
    "Personas confirmadas con dictamen pericial": 336
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Querétaro",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 1680,
    "Personas con coincidencias para identificación": 612,
    "Personas confirmadas con dictamen pericial": 38
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Quintana Roo",
    "Oficios de solicitud": 29,
    "Personas con huella para confronta": 322,
    "Personas con coincidencias para identificación": 764,
    "Personas confirmadas con dictamen pericial": 100
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "San Luis Potosí",
    "Oficios de solicitud": 26,
    "Personas con huella para confronta": 279,
    "Personas con coincidencias para identificación": 782,
    "Personas confirmadas con dictamen pericial": 670
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 34,
    "Personas con huella para confronta": 1158,
    "Personas con coincidencias para identificación": 818,
    "Personas confirmadas con dictamen pericial": 462
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 35,
    "Personas con huella para confronta": 2183,
    "Personas con coincidencias para identificación": 945,
    "Personas confirmadas con dictamen pericial": 273
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 1,
    "Institución": "Zacatecas",
    "Oficios de solicitud": 14,
    "Personas con huella para confronta": 2300,
    "Personas con coincidencias para identificación": 304,
    "Personas confirmadas con dictamen pericial": 28
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 9,
    "Personas con huella para confronta": 770,
    "Personas con coincidencias para identificación": 297,
    "Personas confirmadas con dictamen pericial": 32
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Fiscalía General de la República",
    "Oficios de solicitud": 26,
    "Personas con huella para confronta": 383,
    "Personas con coincidencias para identificación": 541,
    "Personas confirmadas con dictamen pericial": 686
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Baja California",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 573,
    "Personas con coincidencias para identificación": 152,
    "Personas confirmadas con dictamen pericial": 785
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Chihuahua",
    "Oficios de solicitud": 34,
    "Personas con huella para confronta": 1383,
    "Personas con coincidencias para identificación": 327,
    "Personas confirmadas con dictamen pericial": 182
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 5,
    "Personas con huella para confronta": 780,
    "Personas con coincidencias para identificación": 356,
    "Personas confirmadas con dictamen pericial": 255
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Coahuila",
    "Oficios de solicitud": 22,
    "Personas con huella para confronta": 1822,
    "Personas con coincidencias para identificación": 870,
    "Personas confirmadas con dictamen pericial": 498
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Estado de México",
    "Oficios de solicitud": 30,
    "Personas con huella para confronta": 2031,
    "Personas con coincidencias para identificación": 911,
    "Personas confirmadas con dictamen pericial": 603
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Guanajuato",
    "Oficios de solicitud": 12,
    "Personas con huella para confronta": 1152,
    "Personas con coincidencias para identificación": 440,
    "Personas confirmadas con dictamen pericial": 498
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Hidalgo",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 1012,
    "Personas con coincidencias para identificación": 99,
    "Personas confirmadas con dictamen pericial": 217
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Jalisco",
    "Oficios de solicitud": 38,
    "Personas con huella para confronta": 1719,
    "Personas con coincidencias para identificación": 252,
    "Personas confirmadas con dictamen pericial": 792
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Morelos",
    "Oficios de solicitud": 38,
    "Personas con huella para confronta": 2299,
    "Personas con coincidencias para identificación": 163,
    "Personas confirmadas con dictamen pericial": 562
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Nuevo León",
    "Oficios de solicitud": 35,
    "Personas con huella para confronta": 1732,
    "Personas con coincidencias para identificación": 477,
    "Personas confirmadas con dictamen pericial": 83
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Querétaro",
    "Oficios de solicitud": 21,
    "Personas con huella para confronta": 1290,
    "Personas con coincidencias para identificación": 1030,
    "Personas confirmadas con dictamen pericial": 622
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Quintana Roo",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 362,
    "Personas con coincidencias para identificación": 252,
    "Personas confirmadas con dictamen pericial": 197
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "San Luis Potosí",
    "Oficios de solicitud": 2,
    "Personas con huella para confronta": 2221,
    "Personas con coincidencias para identificación": 660,
    "Personas confirmadas con dictamen pericial": 336
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 22,
    "Personas con huella para confronta": 94,
    "Personas con coincidencias para identificación": 1021,
    "Personas confirmadas con dictamen pericial": 217
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 26,
    "Personas con huella para confronta": 354,
    "Personas con coincidencias para identificación": 1029,
    "Personas confirmadas con dictamen pericial": 98
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 2,
    "Institución": "Zacatecas",
    "Oficios de solicitud": 25,
    "Personas con huella para confronta": 990,
    "Personas con coincidencias para identificación": 425,
    "Personas confirmadas con dictamen pericial": 483
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 33,
    "Personas con huella para confronta": 1529,
    "Personas con coincidencias para identificación": 576,
    "Personas confirmadas con dictamen pericial": 755
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Fiscalía General de la República",
    "Oficios de solicitud": 37,
    "Personas con huella para confronta": 1593,
    "Personas con coincidencias para identificación": 227,
    "Personas confirmadas con dictamen pericial": 474
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Baja California",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 1070,
    "Personas con coincidencias para identificación": 935,
    "Personas confirmadas con dictamen pericial": 560
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Chihuahua",
    "Oficios de solicitud": 37,
    "Personas con huella para confronta": 1991,
    "Personas con coincidencias para identificación": 782,
    "Personas confirmadas con dictamen pericial": 391
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 20,
    "Personas con huella para confronta": 93,
    "Personas con coincidencias para identificación": 700,
    "Personas confirmadas con dictamen pericial": 286
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Coahuila",
    "Oficios de solicitud": 31,
    "Personas con huella para confronta": 208,
    "Personas con coincidencias para identificación": 1065,
    "Personas confirmadas con dictamen pericial": 92
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Estado de México",
    "Oficios de solicitud": 35,
    "Personas con huella para confronta": 761,
    "Personas con coincidencias para identificación": 145,
    "Personas confirmadas con dictamen pericial": 164
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Guanajuato",
    "Oficios de solicitud": 34,
    "Personas con huella para confronta": 2304,
    "Personas con coincidencias para identificación": 177,
    "Personas confirmadas con dictamen pericial": 325
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Hidalgo",
    "Oficios de solicitud": 26,
    "Personas con huella para confronta": 1008,
    "Personas con coincidencias para identificación": 816,
    "Personas confirmadas con dictamen pericial": 134
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Jalisco",
    "Oficios de solicitud": 40,
    "Personas con huella para confronta": 2322,
    "Personas con coincidencias para identificación": 751,
    "Personas confirmadas con dictamen pericial": 33
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Morelos",
    "Oficios de solicitud": 6,
    "Personas con huella para confronta": 2341,
    "Personas con coincidencias para identificación": 865,
    "Personas confirmadas con dictamen pericial": 471
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Nuevo León",
    "Oficios de solicitud": 7,
    "Personas con huella para confronta": 1135,
    "Personas con coincidencias para identificación": 60,
    "Personas confirmadas con dictamen pericial": 19
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Querétaro",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 1267,
    "Personas con coincidencias para identificación": 337,
    "Personas confirmadas con dictamen pericial": 733
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Quintana Roo",
    "Oficios de solicitud": 32,
    "Personas con huella para confronta": 1885,
    "Personas con coincidencias para identificación": 736,
    "Personas confirmadas con dictamen pericial": 586
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "San Luis Potosí",
    "Oficios de solicitud": 24,
    "Personas con huella para confronta": 848,
    "Personas con coincidencias para identificación": 173,
    "Personas confirmadas con dictamen pericial": 49
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 39,
    "Personas con huella para confronta": 921,
    "Personas con coincidencias para identificación": 466,
    "Personas confirmadas con dictamen pericial": 99
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 12,
    "Personas con huella para confronta": 1062,
    "Personas con coincidencias para identificación": 812,
    "Personas confirmadas con dictamen pericial": 578
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 3,
    "Institución": "Zacatecas",
    "Oficios de solicitud": 38,
    "Personas con huella para confronta": 2260,
    "Personas con coincidencias para identificación": 757,
    "Personas confirmadas con dictamen pericial": 315
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 33,
    "Personas con huella para confronta": 1187,
    "Personas con coincidencias para identificación": 512,
    "Personas confirmadas con dictamen pericial": 799
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Fiscalía General de la República",
    "Oficios de solicitud": 12,
    "Personas con huella para confronta": 1852,
    "Personas con coincidencias para identificación": 357,
    "Personas confirmadas con dictamen pericial": 613
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Baja California",
    "Oficios de solicitud": 9,
    "Personas con huella para confronta": 700,
    "Personas con coincidencias para identificación": 206,
    "Personas confirmadas con dictamen pericial": 558
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Chihuahua",
    "Oficios de solicitud": 22,
    "Personas con huella para confronta": 648,
    "Personas con coincidencias para identificación": 543,
    "Personas confirmadas con dictamen pericial": 579
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 10,
    "Personas con huella para confronta": 1231,
    "Personas con coincidencias para identificación": 101,
    "Personas confirmadas con dictamen pericial": 363
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Coahuila",
    "Oficios de solicitud": 21,
    "Personas con huella para confronta": 660,
    "Personas con coincidencias para identificación": 965,
    "Personas confirmadas con dictamen pericial": 495
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Estado de México",
    "Oficios de solicitud": 21,
    "Personas con huella para confronta": 1011,
    "Personas con coincidencias para identificación": 1000,
    "Personas confirmadas con dictamen pericial": 653
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Guanajuato",
    "Oficios de solicitud": 12,
    "Personas con huella para confronta": 1221,
    "Personas con coincidencias para identificación": 330,
    "Personas confirmadas con dictamen pericial": 400
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Hidalgo",
    "Oficios de solicitud": 5,
    "Personas con huella para confronta": 1232,
    "Personas con coincidencias para identificación": 175,
    "Personas confirmadas con dictamen pericial": 31
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Jalisco",
    "Oficios de solicitud": 29,
    "Personas con huella para confronta": 2102,
    "Personas con coincidencias para identificación": 878,
    "Personas confirmadas con dictamen pericial": 76
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Morelos",
    "Oficios de solicitud": 14,
    "Personas con huella para confronta": 610,
    "Personas con coincidencias para identificación": 514,
    "Personas confirmadas con dictamen pericial": 555
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Nuevo León",
    "Oficios de solicitud": 34,
    "Personas con huella para confronta": 2225,
    "Personas con coincidencias para identificación": 688,
    "Personas confirmadas con dictamen pericial": 213
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Querétaro",
    "Oficios de solicitud": 5,
    "Personas con huella para confronta": 933,
    "Personas con coincidencias para identificación": 674,
    "Personas confirmadas con dictamen pericial": 550
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Quintana Roo",
    "Oficios de solicitud": 27,
    "Personas con huella para confronta": 225,
    "Personas con coincidencias para identificación": 335,
    "Personas confirmadas con dictamen pericial": 483
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "San Luis Potosí",
    "Oficios de solicitud": 26,
    "Personas con huella para confronta": 24,
    "Personas con coincidencias para identificación": 222,
    "Personas confirmadas con dictamen pericial": 208
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 8,
    "Personas con huella para confronta": 653,
    "Personas con coincidencias para identificación": 37,
    "Personas confirmadas con dictamen pericial": 248
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Tlaxcala",
    "Oficios de solicitud": 7,
    "Personas con huella para confronta": 1068,
    "Personas con coincidencias para identificación": 120,
    "Personas confirmadas con dictamen pericial": 36
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2021,
    "Trimestre": 4,
    "Institución": "Zacatecas",
    "Oficios de solicitud": 32,
    "Personas con huella para confronta": 1045,
    "Personas con coincidencias para identificación": 209,
    "Personas confirmadas con dictamen pericial": 167
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Comisión Nacional de Búsqueda de Personas",
    "Oficios de solicitud": 3,
    "Personas con huella para confronta": 957,
    "Personas con coincidencias para identificación": 175,
    "Personas confirmadas con dictamen pericial": 347
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Fiscalía General de la República",
    "Oficios de solicitud": 30,
    "Personas con huella para confronta": 2271,
    "Personas con coincidencias para identificación": 352,
    "Personas confirmadas con dictamen pericial": 200
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Baja California",
    "Oficios de solicitud": 20,
    "Personas con huella para confronta": 1798,
    "Personas con coincidencias para identificación": 669,
    "Personas confirmadas con dictamen pericial": 257
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Chiapas",
    "Oficios de solicitud": 30,
    "Personas con huella para confronta": 1085,
    "Personas con coincidencias para identificación": 249,
    "Personas confirmadas con dictamen pericial": 322
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Chihuahua",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 1427,
    "Personas con coincidencias para identificación": 587,
    "Personas confirmadas con dictamen pericial": 548
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Ciudad de México",
    "Oficios de solicitud": 12,
    "Personas con huella para confronta": 2231,
    "Personas con coincidencias para identificación": 57,
    "Personas confirmadas con dictamen pericial": 407
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Coahuila",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 1409,
    "Personas con coincidencias para identificación": 277,
    "Personas confirmadas con dictamen pericial": 30
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Estado de México",
    "Oficios de solicitud": 18,
    "Personas con huella para confronta": 2200,
    "Personas con coincidencias para identificación": 373,
    "Personas confirmadas con dictamen pericial": 293
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Jalisco",
    "Oficios de solicitud": 28,
    "Personas con huella para confronta": 685,
    "Personas con coincidencias para identificación": 183,
    "Personas confirmadas con dictamen pericial": 717
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Nuevo León",
    "Oficios de solicitud": 19,
    "Personas con huella para confronta": 1913,
    "Personas con coincidencias para identificación": 25,
    "Personas confirmadas con dictamen pericial": 149
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Tamaulipas",
    "Oficios de solicitud": 27,
    "Personas con huella para confronta": 1135,
    "Personas con coincidencias para identificación": 993,
    "Personas confirmadas con dictamen pericial": 635
  },
  {
    "Caso": "Personas Desconocidas",
    "Año": 2022,
    "Trimestre": 1,
    "Institución": "Zacatecas",
    "Oficios de solicitud": 11,
    "Personas con huella para confronta": 920,
    "Personas con coincidencias para identificación": 1003,
    "Personas confirmadas con dictamen pericial": 241
  }
]



export interface BaseIdentificacion{
    readonly caso: string;
    readonly anio: string;
    readonly trimestre: string;
    readonly institucion: string;
    readonly oficiosDeSolicitud: string;
    readonly personasConhuellaConfronta: string;
    readonly personasConCoincidenciasParaIdentificacion: string;
    readonly personasConfirmadasConDictamenPericial: string;
}

export const baseIdentificacion: readonly BaseIdentificacion[] = [
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "ncbp",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "1823",
    personasConCoincidenciasParaIdentificacion: "1088",
    personasConfirmadasConDictamenPericial: "723"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "cdmx",
    oficiosDeSolicitud: "38",
    personasConhuellaConfronta: "1775",
    personasConCoincidenciasParaIdentificacion: "283",
    personasConfirmadasConDictamenPericial: "337"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "jal",
    oficiosDeSolicitud: "31",
    personasConhuellaConfronta: "584",
    personasConCoincidenciasParaIdentificacion: "52",
    personasConfirmadasConDictamenPericial: "576"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "mor",
    oficiosDeSolicitud: "36",
    personasConhuellaConfronta: "1364",
    personasConCoincidenciasParaIdentificacion: "601",
    personasConfirmadasConDictamenPericial: "730"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "quero",
    oficiosDeSolicitud: "28",
    personasConhuellaConfronta: "261",
    personasConCoincidenciasParaIdentificacion: "699",
    personasConfirmadasConDictamenPericial: "765"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "tamps",
    oficiosDeSolicitud: "35",
    personasConhuellaConfronta: "1869",
    personasConCoincidenciasParaIdentificacion: "1080",
    personasConfirmadasConDictamenPericial: "196"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "1",
    institucion: "tlax",
    oficiosDeSolicitud: "20",
    personasConhuellaConfronta: "2101",
    personasConCoincidenciasParaIdentificacion: "352",
    personasConfirmadasConDictamenPericial: "118"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "ncbp",
    oficiosDeSolicitud: "17",
    personasConhuellaConfronta: "1118",
    personasConCoincidenciasParaIdentificacion: "818",
    personasConfirmadasConDictamenPericial: "90"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "cdmx",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "40",
    personasConCoincidenciasParaIdentificacion: "280",
    personasConfirmadasConDictamenPericial: "454"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "jal",
    oficiosDeSolicitud: "29",
    personasConhuellaConfronta: "772",
    personasConCoincidenciasParaIdentificacion: "151",
    personasConfirmadasConDictamenPericial: "299"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "mor",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "452",
    personasConCoincidenciasParaIdentificacion: "36",
    personasConfirmadasConDictamenPericial: "307"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "quero",
    oficiosDeSolicitud: "36",
    personasConhuellaConfronta: "1574",
    personasConCoincidenciasParaIdentificacion: "578",
    personasConfirmadasConDictamenPericial: "348"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "tamps",
    oficiosDeSolicitud: "8",
    personasConhuellaConfronta: "1095",
    personasConCoincidenciasParaIdentificacion: "802",
    personasConfirmadasConDictamenPericial: "136"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "2",
    institucion: "tlax",
    oficiosDeSolicitud: "3",
    personasConhuellaConfronta: "1650",
    personasConCoincidenciasParaIdentificacion: "811",
    personasConfirmadasConDictamenPericial: "585"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "ncbp",
    oficiosDeSolicitud: "8",
    personasConhuellaConfronta: "259",
    personasConCoincidenciasParaIdentificacion: "810",
    personasConfirmadasConDictamenPericial: "600"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "cdmx",
    oficiosDeSolicitud: "24",
    personasConhuellaConfronta: "1018",
    personasConCoincidenciasParaIdentificacion: "881",
    personasConfirmadasConDictamenPericial: "189"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "jal",
    oficiosDeSolicitud: "27",
    personasConhuellaConfronta: "600",
    personasConCoincidenciasParaIdentificacion: "241",
    personasConfirmadasConDictamenPericial: "225"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "mor",
    oficiosDeSolicitud: "22",
    personasConhuellaConfronta: "2085",
    personasConCoincidenciasParaIdentificacion: "104",
    personasConfirmadasConDictamenPericial: "464"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "quero",
    oficiosDeSolicitud: "34",
    personasConhuellaConfronta: "102",
    personasConCoincidenciasParaIdentificacion: "472",
    personasConfirmadasConDictamenPericial: "437"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "tamps",
    oficiosDeSolicitud: "32",
    personasConhuellaConfronta: "1540",
    personasConCoincidenciasParaIdentificacion: "351",
    personasConfirmadasConDictamenPericial: "115"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "3",
    institucion: "tlax",
    oficiosDeSolicitud: "27",
    personasConhuellaConfronta: "1376",
    personasConCoincidenciasParaIdentificacion: "691",
    personasConfirmadasConDictamenPericial: "797"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "ncbp",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "1174",
    personasConCoincidenciasParaIdentificacion: "909",
    personasConfirmadasConDictamenPericial: "693"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "cdmx",
    oficiosDeSolicitud: "32",
    personasConhuellaConfronta: "1627",
    personasConCoincidenciasParaIdentificacion: "236",
    personasConfirmadasConDictamenPericial: "285"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "jal",
    oficiosDeSolicitud: "29",
    personasConhuellaConfronta: "1105",
    personasConCoincidenciasParaIdentificacion: "304",
    personasConfirmadasConDictamenPericial: "757"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "mor",
    oficiosDeSolicitud: "6",
    personasConhuellaConfronta: "2249",
    personasConCoincidenciasParaIdentificacion: "305",
    personasConfirmadasConDictamenPericial: "621"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "quero",
    oficiosDeSolicitud: "32",
    personasConhuellaConfronta: "2022",
    personasConCoincidenciasParaIdentificacion: "126",
    personasConfirmadasConDictamenPericial: "221"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "tamps",
    oficiosDeSolicitud: "16",
    personasConhuellaConfronta: "1407",
    personasConCoincidenciasParaIdentificacion: "610",
    personasConfirmadasConDictamenPericial: "90"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2020",
    trimestre: "4",
    institucion: "tlax",
    oficiosDeSolicitud: "28",
    personasConhuellaConfronta: "2071",
    personasConCoincidenciasParaIdentificacion: "924",
    personasConfirmadasConDictamenPericial: "231"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "ncbp",
    oficiosDeSolicitud: "1",
    personasConhuellaConfronta: "84",
    personasConCoincidenciasParaIdentificacion: "48",
    personasConfirmadasConDictamenPericial: "29"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "fgr",
    oficiosDeSolicitud: "38",
    personasConhuellaConfronta: "717",
    personasConCoincidenciasParaIdentificacion: "977",
    personasConfirmadasConDictamenPericial: "113"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "bc",
    oficiosDeSolicitud: "17",
    personasConhuellaConfronta: "186",
    personasConCoincidenciasParaIdentificacion: "637",
    personasConfirmadasConDictamenPericial: "766"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "chih",
    oficiosDeSolicitud: "37",
    personasConhuellaConfronta: "1578",
    personasConCoincidenciasParaIdentificacion: "905",
    personasConfirmadasConDictamenPericial: "445"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "cdmx",
    oficiosDeSolicitud: "4",
    personasConhuellaConfronta: "1276",
    personasConCoincidenciasParaIdentificacion: "937",
    personasConfirmadasConDictamenPericial: "470"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "coah",
    oficiosDeSolicitud: "8",
    personasConhuellaConfronta: "771",
    personasConCoincidenciasParaIdentificacion: "925",
    personasConfirmadasConDictamenPericial: "683"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "edomex",
    oficiosDeSolicitud: "3",
    personasConhuellaConfronta: "978",
    personasConCoincidenciasParaIdentificacion: "986",
    personasConfirmadasConDictamenPericial: "553"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "gto",
    oficiosDeSolicitud: "34",
    personasConhuellaConfronta: "1951",
    personasConCoincidenciasParaIdentificacion: "469",
    personasConfirmadasConDictamenPericial: "455"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "hgo",
    oficiosDeSolicitud: "16",
    personasConhuellaConfronta: "1437",
    personasConCoincidenciasParaIdentificacion: "287",
    personasConfirmadasConDictamenPericial: "364"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "jal",
    oficiosDeSolicitud: "26",
    personasConhuellaConfronta: "1978",
    personasConCoincidenciasParaIdentificacion: "135",
    personasConfirmadasConDictamenPericial: "416"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "mor",
    oficiosDeSolicitud: "31",
    personasConhuellaConfronta: "575",
    personasConCoincidenciasParaIdentificacion: "432",
    personasConfirmadasConDictamenPericial: "48"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "nl",
    oficiosDeSolicitud: "6",
    personasConhuellaConfronta: "13",
    personasConCoincidenciasParaIdentificacion: "719",
    personasConfirmadasConDictamenPericial: "336"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "quero",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "1680",
    personasConCoincidenciasParaIdentificacion: "612",
    personasConfirmadasConDictamenPericial: "38"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "qroo",
    oficiosDeSolicitud: "29",
    personasConhuellaConfronta: "322",
    personasConCoincidenciasParaIdentificacion: "764",
    personasConfirmadasConDictamenPericial: "100"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "slp",
    oficiosDeSolicitud: "26",
    personasConhuellaConfronta: "279",
    personasConCoincidenciasParaIdentificacion: "782",
    personasConfirmadasConDictamenPericial: "670"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "tamps",
    oficiosDeSolicitud: "34",
    personasConhuellaConfronta: "1158",
    personasConCoincidenciasParaIdentificacion: "818",
    personasConfirmadasConDictamenPericial: "462"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "tlax",
    oficiosDeSolicitud: "35",
    personasConhuellaConfronta: "2183",
    personasConCoincidenciasParaIdentificacion: "945",
    personasConfirmadasConDictamenPericial: "273"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "1",
    institucion: "zac",
    oficiosDeSolicitud: "14",
    personasConhuellaConfronta: "2300",
    personasConCoincidenciasParaIdentificacion: "304",
    personasConfirmadasConDictamenPericial: "28"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "ncbp",
    oficiosDeSolicitud: "9",
    personasConhuellaConfronta: "770",
    personasConCoincidenciasParaIdentificacion: "297",
    personasConfirmadasConDictamenPericial: "32"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "fgr",
    oficiosDeSolicitud: "26",
    personasConhuellaConfronta: "383",
    personasConCoincidenciasParaIdentificacion: "541",
    personasConfirmadasConDictamenPericial: "686"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "bc",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "573",
    personasConCoincidenciasParaIdentificacion: "152",
    personasConfirmadasConDictamenPericial: "785"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "chih",
    oficiosDeSolicitud: "34",
    personasConhuellaConfronta: "1383",
    personasConCoincidenciasParaIdentificacion: "327",
    personasConfirmadasConDictamenPericial: "182"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "cdmx",
    oficiosDeSolicitud: "5",
    personasConhuellaConfronta: "780",
    personasConCoincidenciasParaIdentificacion: "356",
    personasConfirmadasConDictamenPericial: "255"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "coah",
    oficiosDeSolicitud: "22",
    personasConhuellaConfronta: "1822",
    personasConCoincidenciasParaIdentificacion: "870",
    personasConfirmadasConDictamenPericial: "498"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "edomex",
    oficiosDeSolicitud: "30",
    personasConhuellaConfronta: "2031",
    personasConCoincidenciasParaIdentificacion: "911",
    personasConfirmadasConDictamenPericial: "603"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "gto",
    oficiosDeSolicitud: "12",
    personasConhuellaConfronta: "1152",
    personasConCoincidenciasParaIdentificacion: "440",
    personasConfirmadasConDictamenPericial: "498"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "hgo",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "1012",
    personasConCoincidenciasParaIdentificacion: "99",
    personasConfirmadasConDictamenPericial: "217"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "jal",
    oficiosDeSolicitud: "38",
    personasConhuellaConfronta: "1719",
    personasConCoincidenciasParaIdentificacion: "252",
    personasConfirmadasConDictamenPericial: "792"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "mor",
    oficiosDeSolicitud: "38",
    personasConhuellaConfronta: "2299",
    personasConCoincidenciasParaIdentificacion: "163",
    personasConfirmadasConDictamenPericial: "562"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "nl",
    oficiosDeSolicitud: "35",
    personasConhuellaConfronta: "1732",
    personasConCoincidenciasParaIdentificacion: "477",
    personasConfirmadasConDictamenPericial: "83"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "quero",
    oficiosDeSolicitud: "21",
    personasConhuellaConfronta: "1290",
    personasConCoincidenciasParaIdentificacion: "1030",
    personasConfirmadasConDictamenPericial: "622"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "qroo",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "362",
    personasConCoincidenciasParaIdentificacion: "252",
    personasConfirmadasConDictamenPericial: "197"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "slp",
    oficiosDeSolicitud: "2",
    personasConhuellaConfronta: "2221",
    personasConCoincidenciasParaIdentificacion: "660",
    personasConfirmadasConDictamenPericial: "336"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "tamps",
    oficiosDeSolicitud: "22",
    personasConhuellaConfronta: "94",
    personasConCoincidenciasParaIdentificacion: "1021",
    personasConfirmadasConDictamenPericial: "217"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "tlax",
    oficiosDeSolicitud: "26",
    personasConhuellaConfronta: "354",
    personasConCoincidenciasParaIdentificacion: "1029",
    personasConfirmadasConDictamenPericial: "98"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "2",
    institucion: "zac",
    oficiosDeSolicitud: "25",
    personasConhuellaConfronta: "990",
    personasConCoincidenciasParaIdentificacion: "425",
    personasConfirmadasConDictamenPericial: "483"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "ncbp",
    oficiosDeSolicitud: "33",
    personasConhuellaConfronta: "1529",
    personasConCoincidenciasParaIdentificacion: "576",
    personasConfirmadasConDictamenPericial: "755"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "fgr",
    oficiosDeSolicitud: "37",
    personasConhuellaConfronta: "1593",
    personasConCoincidenciasParaIdentificacion: "227",
    personasConfirmadasConDictamenPericial: "474"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "bc",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "1070",
    personasConCoincidenciasParaIdentificacion: "935",
    personasConfirmadasConDictamenPericial: "560"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "chih",
    oficiosDeSolicitud: "37",
    personasConhuellaConfronta: "1991",
    personasConCoincidenciasParaIdentificacion: "782",
    personasConfirmadasConDictamenPericial: "391"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "cdmx",
    oficiosDeSolicitud: "20",
    personasConhuellaConfronta: "93",
    personasConCoincidenciasParaIdentificacion: "700",
    personasConfirmadasConDictamenPericial: "286"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "coah",
    oficiosDeSolicitud: "31",
    personasConhuellaConfronta: "208",
    personasConCoincidenciasParaIdentificacion: "1065",
    personasConfirmadasConDictamenPericial: "92"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "edomex",
    oficiosDeSolicitud: "35",
    personasConhuellaConfronta: "761",
    personasConCoincidenciasParaIdentificacion: "145",
    personasConfirmadasConDictamenPericial: "164"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "gto",
    oficiosDeSolicitud: "34",
    personasConhuellaConfronta: "2304",
    personasConCoincidenciasParaIdentificacion: "177",
    personasConfirmadasConDictamenPericial: "325"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "hgo",
    oficiosDeSolicitud: "26",
    personasConhuellaConfronta: "1008",
    personasConCoincidenciasParaIdentificacion: "816",
    personasConfirmadasConDictamenPericial: "134"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "jal",
    oficiosDeSolicitud: "40",
    personasConhuellaConfronta: "2322",
    personasConCoincidenciasParaIdentificacion: "751",
    personasConfirmadasConDictamenPericial: "33"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "mor",
    oficiosDeSolicitud: "6",
    personasConhuellaConfronta: "2341",
    personasConCoincidenciasParaIdentificacion: "865",
    personasConfirmadasConDictamenPericial: "471"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "nl",
    oficiosDeSolicitud: "7",
    personasConhuellaConfronta: "1135",
    personasConCoincidenciasParaIdentificacion: "60",
    personasConfirmadasConDictamenPericial: "19"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "quero",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "1267",
    personasConCoincidenciasParaIdentificacion: "337",
    personasConfirmadasConDictamenPericial: "733"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "qroo",
    oficiosDeSolicitud: "32",
    personasConhuellaConfronta: "1885",
    personasConCoincidenciasParaIdentificacion: "736",
    personasConfirmadasConDictamenPericial: "586"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "slp",
    oficiosDeSolicitud: "24",
    personasConhuellaConfronta: "848",
    personasConCoincidenciasParaIdentificacion: "173",
    personasConfirmadasConDictamenPericial: "49"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "tamps",
    oficiosDeSolicitud: "39",
    personasConhuellaConfronta: "921",
    personasConCoincidenciasParaIdentificacion: "466",
    personasConfirmadasConDictamenPericial: "99"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "tlax",
    oficiosDeSolicitud: "12",
    personasConhuellaConfronta: "1062",
    personasConCoincidenciasParaIdentificacion: "812",
    personasConfirmadasConDictamenPericial: "578"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "3",
    institucion: "zac",
    oficiosDeSolicitud: "38",
    personasConhuellaConfronta: "2260",
    personasConCoincidenciasParaIdentificacion: "757",
    personasConfirmadasConDictamenPericial: "315"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "ncbp",
    oficiosDeSolicitud: "33",
    personasConhuellaConfronta: "1187",
    personasConCoincidenciasParaIdentificacion: "512",
    personasConfirmadasConDictamenPericial: "799"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "fgr",
    oficiosDeSolicitud: "12",
    personasConhuellaConfronta: "1852",
    personasConCoincidenciasParaIdentificacion: "357",
    personasConfirmadasConDictamenPericial: "613"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "bc",
    oficiosDeSolicitud: "9",
    personasConhuellaConfronta: "700",
    personasConCoincidenciasParaIdentificacion: "206",
    personasConfirmadasConDictamenPericial: "558"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "chih",
    oficiosDeSolicitud: "22",
    personasConhuellaConfronta: "648",
    personasConCoincidenciasParaIdentificacion: "543",
    personasConfirmadasConDictamenPericial: "579"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "cdmx",
    oficiosDeSolicitud: "10",
    personasConhuellaConfronta: "1231",
    personasConCoincidenciasParaIdentificacion: "101",
    personasConfirmadasConDictamenPericial: "363"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "coah",
    oficiosDeSolicitud: "21",
    personasConhuellaConfronta: "660",
    personasConCoincidenciasParaIdentificacion: "965",
    personasConfirmadasConDictamenPericial: "495"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "edomex",
    oficiosDeSolicitud: "21",
    personasConhuellaConfronta: "1011",
    personasConCoincidenciasParaIdentificacion: "1000",
    personasConfirmadasConDictamenPericial: "653"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "gto",
    oficiosDeSolicitud: "12",
    personasConhuellaConfronta: "1221",
    personasConCoincidenciasParaIdentificacion: "330",
    personasConfirmadasConDictamenPericial: "400"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "hgo",
    oficiosDeSolicitud: "5",
    personasConhuellaConfronta: "1232",
    personasConCoincidenciasParaIdentificacion: "175",
    personasConfirmadasConDictamenPericial: "31"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "jal",
    oficiosDeSolicitud: "29",
    personasConhuellaConfronta: "2102",
    personasConCoincidenciasParaIdentificacion: "878",
    personasConfirmadasConDictamenPericial: "76"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "mor",
    oficiosDeSolicitud: "14",
    personasConhuellaConfronta: "610",
    personasConCoincidenciasParaIdentificacion: "514",
    personasConfirmadasConDictamenPericial: "555"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "nl",
    oficiosDeSolicitud: "34",
    personasConhuellaConfronta: "2225",
    personasConCoincidenciasParaIdentificacion: "688",
    personasConfirmadasConDictamenPericial: "213"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "quero",
    oficiosDeSolicitud: "5",
    personasConhuellaConfronta: "933",
    personasConCoincidenciasParaIdentificacion: "674",
    personasConfirmadasConDictamenPericial: "550"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "qroo",
    oficiosDeSolicitud: "27",
    personasConhuellaConfronta: "225",
    personasConCoincidenciasParaIdentificacion: "335",
    personasConfirmadasConDictamenPericial: "483"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "slp",
    oficiosDeSolicitud: "26",
    personasConhuellaConfronta: "24",
    personasConCoincidenciasParaIdentificacion: "222",
    personasConfirmadasConDictamenPericial: "208"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "tamps",
    oficiosDeSolicitud: "8",
    personasConhuellaConfronta: "653",
    personasConCoincidenciasParaIdentificacion: "37",
    personasConfirmadasConDictamenPericial: "248"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "tlax",
    oficiosDeSolicitud: "7",
    personasConhuellaConfronta: "1068",
    personasConCoincidenciasParaIdentificacion: "120",
    personasConfirmadasConDictamenPericial: "36"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2021",
    trimestre: "4",
    institucion: "zac",
    oficiosDeSolicitud: "32",
    personasConhuellaConfronta: "1045",
    personasConCoincidenciasParaIdentificacion: "209",
    personasConfirmadasConDictamenPericial: "167"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "ncbp",
    oficiosDeSolicitud: "3",
    personasConhuellaConfronta: "957",
    personasConCoincidenciasParaIdentificacion: "175",
    personasConfirmadasConDictamenPericial: "347"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "fgr",
    oficiosDeSolicitud: "30",
    personasConhuellaConfronta: "2271",
    personasConCoincidenciasParaIdentificacion: "352",
    personasConfirmadasConDictamenPericial: "200"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "bc",
    oficiosDeSolicitud: "20",
    personasConhuellaConfronta: "1798",
    personasConCoincidenciasParaIdentificacion: "669",
    personasConfirmadasConDictamenPericial: "257"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "chis",
    oficiosDeSolicitud: "30",
    personasConhuellaConfronta: "1085",
    personasConCoincidenciasParaIdentificacion: "249",
    personasConfirmadasConDictamenPericial: "322"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "chih",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "1427",
    personasConCoincidenciasParaIdentificacion: "587",
    personasConfirmadasConDictamenPericial: "548"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "cdmx",
    oficiosDeSolicitud: "12",
    personasConhuellaConfronta: "2231",
    personasConCoincidenciasParaIdentificacion: "57",
    personasConfirmadasConDictamenPericial: "407"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "coah",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "1409",
    personasConCoincidenciasParaIdentificacion: "277",
    personasConfirmadasConDictamenPericial: "30"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "edomex",
    oficiosDeSolicitud: "18",
    personasConhuellaConfronta: "2200",
    personasConCoincidenciasParaIdentificacion: "373",
    personasConfirmadasConDictamenPericial: "293"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "jal",
    oficiosDeSolicitud: "28",
    personasConhuellaConfronta: "685",
    personasConCoincidenciasParaIdentificacion: "183",
    personasConfirmadasConDictamenPericial: "717"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "nl",
    oficiosDeSolicitud: "19",
    personasConhuellaConfronta: "1913",
    personasConCoincidenciasParaIdentificacion: "25",
    personasConfirmadasConDictamenPericial: "149"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "tamps",
    oficiosDeSolicitud: "27",
    personasConhuellaConfronta: "1135",
    personasConCoincidenciasParaIdentificacion: "993",
    personasConfirmadasConDictamenPericial: "635"
  },
  {
    caso: "PersonasDesconocidas",
    anio: "2022",
    trimestre: "1",
    institucion: "zac",
    oficiosDeSolicitud: "11",
    personasConhuellaConfronta: "920",
    personasConCoincidenciasParaIdentificacion: "1003",
    personasConfirmadasConDictamenPericial: "241"
  }
]