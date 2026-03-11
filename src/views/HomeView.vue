<script>
import { lugares } from '../data/lugares'

export default {
  name: 'HomeView',
  data() {
    return {
      lugares,
      busqueda: '',
      unidad: 'C'
    }
  },
  computed: {
    lugaresFiltrados() {
      const texto = this.busqueda.toLowerCase().trim()

      if (!texto) return this.lugares

      return this.lugares.filter((lugar) =>
        lugar.nombre.toLowerCase().includes(texto)
      )
    }
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
  <section class="hero">
    <h2>Explora el clima de tus lugares favoritos</h2>
    <p>
      Revisa el clima actual, busca lugares y entra al detalle para ver pronóstico y estadísticas.
    </p>
  </section>

  <section class="controls card">
    <div class="control-group">
      <label for="buscar">Buscar lugar</label>
      <input
        id="buscar"
        v-model="busqueda"
        type="text"
        placeholder="Ej: Playa, Valle, Ruta..."
      />
    </div>

    <div class="control-group">
      <label for="unidad">Unidad de temperatura</label>
      <select id="unidad" v-model="unidad">
        <option value="C">Celsius (°C)</option>
        <option value="F">Fahrenheit (°F)</option>
      </select>
    </div>
  </section>

  <section v-if="lugaresFiltrados.length" class="places-grid">
    <article
      v-for="lugar in lugaresFiltrados"
      :key="lugar.id"
      class="place-card"
    >
      <div class="place-top">
        <span class="tag">{{ lugar.categoria }}</span>
        <h3>{{ lugar.nombre }}</h3>
      </div>

      <p class="description">{{ lugar.descripcion }}</p>

      <div class="climate-box">
        <p><strong>Estado:</strong> {{ lugar.climaActual.estado }}</p>
        <p>
          <strong>Temperatura:</strong>
          {{ convertirTemperatura(lugar.climaActual.temperaturaC) }} {{ simboloUnidad() }}
        </p>
        <p><strong>Humedad:</strong> {{ lugar.climaActual.humedad }}%</p>
        <p><strong>Viento:</strong> {{ lugar.climaActual.viento }} km/h</p>
      </div>

      <router-link :to="`/lugar/${lugar.id}`" class="detail-link">
        Ver detalle
      </router-link>
    </article>
  </section>

  <section v-else class="card empty-state">
    <h3>No se encontraron lugares</h3>
    <p>Intenta con otro nombre en la búsqueda.</p>
  </section>
</template>

<style scoped>
.hero {
  margin-bottom: 24px;
}

.hero h2 {
  margin: 0 0 8px;
  font-size: 2rem;
  color: #0f172a;
}

.hero p {
  margin: 0;
  color: #475569;
  max-width: 750px;
}

.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.controls {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-group label {
  font-weight: 700;
  color: #1e293b;
}

.control-group input,
.control-group select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font: inherit;
}

.places-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.place-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.place-top h3 {
  margin: 6px 0 0;
}

.tag {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
}

.description {
  color: #475569;
  margin: 0;
}

.climate-box {
  background: #f8fbff;
  border: 1px solid #e0ecff;
  border-radius: 14px;
  padding: 12px;
}

.climate-box p {
  margin: 6px 0;
}

.detail-link {
  margin-top: auto;
  text-decoration: none;
  text-align: center;
  background: #2563eb;
  color: white;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 12px;
}

.empty-state h3 {
  margin-top: 0;
}

@media (max-width: 700px) {
  .controls {
    grid-template-columns: 1fr;
  }
}
</style>