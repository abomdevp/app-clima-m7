<script>
import { lugares } from '../data/lugares'

export default {
  name: 'PlaceDetailView',
  props: ['id'],
  data() {
    return {
      lugar: null,
      unidad: 'C'
    }
  },
  created() {
    this.lugar = lugares.find((item) => item.id === Number(this.id)) || null
  },
  methods: {
    convertirTemperatura(tempC) {
      if (this.unidad === 'F') {
        return Math.round((tempC * 9) / 5 + 32)
      }
      return tempC
    },
    simboloUnidad() {
      return this.unidad === 'F' ? '°F' : '°C'
    }
  }
}
</script>

<template>
  <section v-if="lugar">
    <div class="header-row">
      <div>
        <p class="back-line">
          <router-link to="/">← Volver al Home</router-link>
        </p>
        <h2>{{ lugar.nombre }}</h2>
        <p class="subtitle">{{ lugar.descripcion }}</p>
      </div>

      <div class="unit-box">
        <label for="unidadDetalle">Unidad</label>
        <select id="unidadDetalle" v-model="unidad">
          <option value="C">°C</option>
          <option value="F">°F</option>
        </select>
      </div>
    </div>

    <section class="current-weather card">
      <h3>Clima actual</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="label">Estado</span>
          <strong>{{ lugar.climaActual.estado }}</strong>
        </div>
        <div class="stat-item">
          <span class="label">Temperatura</span>
          <strong>
            {{ convertirTemperatura(lugar.climaActual.temperaturaC) }} {{ simboloUnidad() }}
          </strong>
        </div>
        <div class="stat-item">
          <span class="label">Humedad</span>
          <strong>{{ lugar.climaActual.humedad }}%</strong>
        </div>
        <div class="stat-item">
          <span class="label">Viento</span>
          <strong>{{ lugar.climaActual.viento }} km/h</strong>
        </div>
      </div>
    </section>

    <section class="card">
      <h3>Pronóstico de varios días</h3>

      <div class="forecast-grid">
        <article
          v-for="dia in lugar.pronostico"
          :key="dia.dia"
          class="forecast-card"
        >
          <h4>{{ dia.dia }}</h4>
          <p>{{ dia.estado }}</p>
          <p>
            <strong>Mín:</strong>
            {{ convertirTemperatura(dia.min) }} {{ simboloUnidad() }}
          </p>
          <p>
            <strong>Máx:</strong>
            {{ convertirTemperatura(dia.max) }} {{ simboloUnidad() }}
          </p>
        </article>
      </div>
    </section>

    <section class="card">
      <h3>Estadísticas de la semana</h3>

      <div class="stats-grid">
        <div class="stat-item">
          <span class="label">Mínima semanal</span>
          <strong>
            {{ convertirTemperatura(lugar.estadisticas.minSemana) }} {{ simboloUnidad() }}
          </strong>
        </div>
        <div class="stat-item">
          <span class="label">Máxima semanal</span>
          <strong>
            {{ convertirTemperatura(lugar.estadisticas.maxSemana) }} {{ simboloUnidad() }}
          </strong>
        </div>
        <div class="stat-item">
          <span class="label">Promedio semanal</span>
          <strong>
            {{ convertirTemperatura(lugar.estadisticas.promedioSemana) }} {{ simboloUnidad() }}
          </strong>
        </div>
      </div>
    </section>
  </section>

  <section v-else class="card not-found">
    <h3>Lugar no encontrado</h3>
    <p>No existe un lugar asociado al id: {{ id }}</p>
    <router-link to="/" class="back-btn">Volver al Home</router-link>
  </section>
</template>

<style scoped>
.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
  margin-bottom: 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: start;
  margin-bottom: 20px;
}

.back-line {
  margin: 0 0 8px;
}

.back-line a,
.back-btn {
  text-decoration: none;
  color: #2563eb;
  font-weight: 700;
}

h2 {
  margin: 0 0 8px;
  font-size: 2rem;
}

.subtitle {
  margin: 0;
  color: #475569;
}

.unit-box {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.unit-box label {
  font-weight: 700;
}

.unit-box select {
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font: inherit;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.stat-item {
  background: #f8fbff;
  border: 1px solid #e0ecff;
  border-radius: 14px;
  padding: 14px;
}

.label {
  display: block;
  color: #475569;
  margin-bottom: 6px;
  font-size: 0.95rem;
}

.forecast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
}

.forecast-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 14px;
}

.forecast-card h4 {
  margin-top: 0;
  margin-bottom: 8px;
}

.not-found h3 {
  margin-top: 0;
}

@media (max-width: 700px) {
  .header-row {
    flex-direction: column;
  }
}
</style>