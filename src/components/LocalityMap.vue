<template>
  <div class="h-[400px] w-full">
    <l-map 
      ref="map" 
      v-model:zoom="zoom" 
      :center="center"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-marker
        v-if="latitude != null && longitude != null"
        :lat-lng="[Number(latitude), Number(longitude)]"
      >
        <l-popup>{{ name }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"

export default {
  components: { LMap, LTileLayer, LMarker, LPopup },
  props: {
    name: { type: String, default: null },
    latitude: { type: Number, default: null },
    longitude: { type: Number, default: null },
  },
  data() {
    return { zoom: 10 }
  },
  computed: {
    center() {
      return [this.latitude, this.longitude]
    },
  },
}
</script>