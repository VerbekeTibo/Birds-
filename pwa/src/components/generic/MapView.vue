<template>
  <div class="min-h-[50vh]" ref="mapElement"></div>
</template>

<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'

// TODO: set developer API in .env

// Props
// TODO: Set coordinates of map
// TODO: Set marker on map
// TODO: Set polygon on map

// Emit
// TODO: Return coordinates of tap / click on map

// API
// TODO: Replace location with coordinates
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue-demi'

export default {
  setup() {
    const mapElement = ref()

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string

    onMounted(() => {
      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: { name: 'globe' }, // display the map as a 3D globe
      })

      map.on('style.load', () => {
        map.setFog({}) // Set the default atmosphere style
      })
    })

    return {
      mapElement,
    }
  },
}
</script>
