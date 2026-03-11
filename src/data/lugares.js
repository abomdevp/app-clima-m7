export const lugares = [
  {
    id: 1,
    nombre: 'Playa Blanca',
    categoria: 'Playa',
    descripcion: 'Una playa tranquila con arena clara y aguas templadas.',
    climaActual: {
      temperaturaC: 26,
      estado: 'Soleado',
      humedad: 58,
      viento: 14
    },
    pronostico: [
      { dia: 'Lunes', min: 22, max: 27, estado: 'Soleado' },
      { dia: 'Martes', min: 21, max: 26, estado: 'Parcial nublado' },
      { dia: 'Miércoles', min: 23, max: 28, estado: 'Soleado' },
      { dia: 'Jueves', min: 22, max: 25, estado: 'Viento costero' },
      { dia: 'Viernes', min: 24, max: 29, estado: 'Soleado' }
    ],
    estadisticas: {
      minSemana: 21,
      maxSemana: 29,
      promedioSemana: 24.7
    }
  },
  {
    id: 2,
    nombre: 'Cerro Azul',
    categoria: 'Montaña',
    descripcion: 'Zona de montaña ideal para senderismo y fotografía.',
    climaActual: {
      temperaturaC: 12,
      estado: 'Nublado',
      humedad: 71,
      viento: 10
    },
    pronostico: [
      { dia: 'Lunes', min: 8, max: 13, estado: 'Nublado' },
      { dia: 'Martes', min: 7, max: 12, estado: 'Lluvia ligera' },
      { dia: 'Miércoles', min: 6, max: 11, estado: 'Neblina' },
      { dia: 'Jueves', min: 8, max: 14, estado: 'Parcial nublado' },
      { dia: 'Viernes', min: 9, max: 15, estado: 'Soleado' }
    ],
    estadisticas: {
      minSemana: 6,
      maxSemana: 15,
      promedioSemana: 10.3
    }
  },
  {
    id: 3,
    nombre: 'Ruta del Sol',
    categoria: 'Ruta',
    descripcion: 'Ruta escénica con clima cálido y cielos despejados.',
    climaActual: {
      temperaturaC: 30,
      estado: 'Despejado',
      humedad: 40,
      viento: 18
    },
    pronostico: [
      { dia: 'Lunes', min: 25, max: 31, estado: 'Despejado' },
      { dia: 'Martes', min: 24, max: 30, estado: 'Soleado' },
      { dia: 'Miércoles', min: 26, max: 32, estado: 'Caluroso' },
      { dia: 'Jueves', min: 25, max: 31, estado: 'Despejado' },
      { dia: 'Viernes', min: 24, max: 29, estado: 'Parcial nublado' }
    ],
    estadisticas: {
      minSemana: 24,
      maxSemana: 32,
      promedioSemana: 28.1
    }
  },
  {
    id: 4,
    nombre: 'Valle Lunar',
    categoria: 'Planeta',
    descripcion: 'Paisaje árido inspirado en terrenos de otro mundo.',
    climaActual: {
      temperaturaC: 18,
      estado: 'Seco',
      humedad: 22,
      viento: 20
    },
    pronostico: [
      { dia: 'Lunes', min: 13, max: 19, estado: 'Seco' },
      { dia: 'Martes', min: 12, max: 18, estado: 'Viento' },
      { dia: 'Miércoles', min: 11, max: 17, estado: 'Polvo en suspensión' },
      { dia: 'Jueves', min: 13, max: 20, estado: 'Despejado' },
      { dia: 'Viernes', min: 14, max: 21, estado: 'Seco' }
    ],
    estadisticas: {
      minSemana: 11,
      maxSemana: 21,
      promedioSemana: 15.8
    }
  },
  {
    id: 5,
    nombre: 'Bahía Esmeralda',
    categoria: 'Playa',
    descripcion: 'Bahía de aguas verdes y ambiente húmedo tropical.',
    climaActual: {
      temperaturaC: 28,
      estado: 'Húmedo',
      humedad: 80,
      viento: 11
    },
    pronostico: [
      { dia: 'Lunes', min: 24, max: 29, estado: 'Húmedo' },
      { dia: 'Martes', min: 25, max: 30, estado: 'Lluvia corta' },
      { dia: 'Miércoles', min: 24, max: 28, estado: 'Nublado' },
      { dia: 'Jueves', min: 23, max: 29, estado: 'Parcial nublado' },
      { dia: 'Viernes', min: 24, max: 30, estado: 'Soleado' }
    ],
    estadisticas: {
      minSemana: 23,
      maxSemana: 30,
      promedioSemana: 26.6
    }
  }
]