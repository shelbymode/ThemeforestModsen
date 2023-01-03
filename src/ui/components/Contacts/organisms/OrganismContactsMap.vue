<template>
  <GoogleMap
    api-key="AIzaSyAKjmW5-DtRbYZN7AayOV0-iknDeItKmL4"
    style="width: 100%"
    :style="{ height: heightMap }"
    :center="center"
    :zoom="3"
  >
    <MarkerCluster>
      <Marker v-for="(location, i) in locations" :key="i" :options="{ position: location }" />
    </MarkerCluster>
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup() {
    const center = { lat: -28.024, lng: 140.887 }
    const isMdScreen = useMediaQuery(`(min-width: 720px)`)
    const heightMap = computed(() => (isMdScreen.value ? '460px' : '300px'))

    const locations = [
      // Minsk
      { lat: 53.899999, lng: 27.566 },
      // Tokyo
      { lat: 35.652832, lng: 139.839478 },
      // Sydney
      { lat: -33.865143, lng: 151.2099 },
    ]

    return { center, locations, heightMap }
  },
})
</script>
