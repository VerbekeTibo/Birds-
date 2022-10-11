<template>
  <div class="min-h-[50vh]" ref="mapElement"></div>
</template>

<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'

import mapboxgl, { LngLatLike, Map, MapMouseEvent, Marker } from 'mapbox-gl'
import { onMounted, Ref, ref, watch } from 'vue-demi'
import { Polygon } from 'geojson'

export default {
  // Props
  props: {
    mapCoordinates: {
      type: Object as () => LngLatLike,
      required: true,
    },
    markers: {
      type: Array as () => LngLatLike[],
      required: false,
      default: () => [],
    },
    // TODO: Set polygon on map
    polygons: {
      type: Array as () => Polygon[],
      required: false,
    },
  },

  setup(props, { emit }) {
    const mapElement: Ref<HTMLElement | undefined> = ref()
    const selectedMarker: Ref<Marker | undefined> = ref()

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

    const renderMarkerIfAny = (map: Map) => {
      if (props.markers && props.markers.length < 1) return

      for (const marker of props.markers!) {
        new mapboxgl.Marker().setLngLat(marker).addTo(map)
      }
    }

    const renderPolygonsIfAny = (map: Map) => {
      console.log(props.polygons)

      if (props.polygons && props.polygons.length < 1) return

      for (const polygon in props.polygons!) {
        map.addSource(`area-${polygon}`, {
          type: 'geojson',
          data: props.polygons[polygon],
        })

        map.addLayer({
          id: `area-${polygon}`,
          type: 'fill',
          source: `area-${polygon}`,
          layout: {},
          paint: {
            'fill-color': '#088',
            'fill-opacity': 0.6,
          },
        })
      }
    }

    // DOM Content Loaded
    onMounted(() => {
      const map = new mapboxgl.Map({
        container: mapElement.value!,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: props.mapCoordinates,
        zoom: 15,
        projection: { name: 'globe' },
      })

      map.on('style.load', () => {
        map.setFog({}) // Set the default atmosphere style
      })

      renderMarkerIfAny(map)
      renderPolygonsIfAny(map)

      map.on('click', (e: MapMouseEvent) => {
        if (selectedMarker.value) selectedMarker.value.remove()
        selectedMarker.value = new Marker().setLngLat(e.lngLat).addTo(map)

        emit('coordinateSelection', e.lngLat)
      })

      watch(props, () => {
        renderMarkerIfAny(map)
        renderPolygonsIfAny(map)
      })
    })

    return {
      mapElement,
    }
  },
}
</script>
