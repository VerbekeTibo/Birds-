<template>
  <div id="map"></div>
  <pre id="info"></pre>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import 'mapbox-gl/dist/mapbox-gl.css
//@ts-ignore
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default defineComponent({
  setup() {
    onMounted(() => {
      mapboxgl.accessToken =
        import.meta.env.VITE_mapBox
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [3.2503, 50.8241],
        zoom: 15,
      })
      map.on('load', () => {
        // TODO: Here we want to load a layer
        // TODO: Here we want to load/setup the popup

        map.addSource('howest', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              // These coordinates outline howest.
              coordinates: [
                [
                  [3.248333, 50.824613],
                  [3.249322, 50.82358],
                  [3.248769, 50.823374],
                  [3.250614, 50.821437],
                  [3.253356, 50.823312],
                  [3.249996, 50.825654],
                  [3.249156, 50.825109],
                  [3.249254, 50.825011],
                ],
              ],
            },
          },
        })
        map.addLayer({
          id: 'howest',
          type: 'fill',
          source: 'howest', // reference the data source
          layout: {},
          paint: {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.5,
          },
        })
        // Add a black outline around the polygon.
        map.addLayer({
          id: 'outline',
          type: 'line',
          source: 'howest',
          layout: {},
          paint: {
            'line-color': '#000',
            'line-width': 3,
          },
        })
        map.on('click', function (e:any) {
          var coordinates = e.lngLat
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML('you clicked here: <br/>' + coordinates.wrap())
            .addTo(map)
        })
      })
      const marker1 = new mapboxgl.Marker()
        .setLngLat([3.2513, 50.824])
        .addTo(map)
      const marker2 = new mapboxgl.Marker()
        .setLngLat([3.2503, 50.8245])
        .addTo(map)

      map.on('mousemove', (e: any) => {
        document.getElementById('info')!.innerHTML =
          // `e.point` is the x, y coordinates of the `mousemove` event
          // relative to the top-left corner of the map.
          JSON.stringify(e.point) +
          '<br />' +
          // `e.lngLat` is the longitude, latitude geographical position of the event.
          JSON.stringify(e.lngLat.wrap())
      })
    })
    return {}
  },
})
// Props
// TODO:Set coordinates of map ✔
// TODO: Set marker on map ✔
// TODO:set pollygon on map ✔

//Emit
//TODO:return coordinates of tap / click on map ✔

//API
//TODO: Replace location with coordinates
</script>
