<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useLocalities } from '@/composables/useLocalities'
import LocalityMap from '@/components/LocalityMap.vue'

const {
  localities,
  fetchLocalityPage,
} = useLocalities()

const route = useRoute()

onBeforeMount(() => {
  fetchLocalityPage(route.params.id)
})
</script>

<template>
  <div class="space-y-6">
    <template v-if="localities[0]">
      <div>
        <router-link to="/" class="mb-6 text-xl font-semibold text-green hover:text-slate-600">
         < Back
        </router-link>
        <h1 class="text-2xl font-semibold text-slate-800">
          {{ localities[0].name_en || localities[0].name }}
        </h1>
        <p v-if="localities[0].name !== localities[0].name_en" class="mt-1 text-slate-600">
          {{ localities[0].name }}
        </p>

        <dl class="mt-6 grid gap-4 sm:grid-cols-2">
          <div v-if="localities[0].country" class="flex flex-col">
            <dt class="text-sm font-medium text-slate-500">Country</dt>
            <dd class="mt-0.5 text-slate-800">
              {{ localities[0].country.name_en }}
            </dd>
          </div>
          <div v-if="localities[0].number" class="flex flex-col">
            <dt class="text-sm font-medium text-slate-500">Number</dt>
            <dd class="mt-0.5 text-slate-800">{{ localities[0].number }}</dd>
          </div>
          <div v-if="localities[0].depth != null" class="flex flex-col">
            <dt class="text-sm font-medium text-slate-500">Depth (m)</dt>
            <dd class="mt-0.5 text-slate-800">{{ localities[0].depth }}</dd>
          </div>
          <div v-if="localities[0].elevation" class="flex flex-col">
            <dt class="text-sm font-medium text-slate-500">Elevation</dt>
            <dd class="mt-0.5 text-slate-800">{{ localities[0].elevation }}</dd>
          </div>
          <div v-if="localities[0].latitude != null && localities[0].longitude != null" class="flex flex-col">
            <dt class="text-sm font-medium text-slate-500">Coordinates</dt>
            <dd class="mt-0.5 text-slate-800">{{ localities[0].latitude }}, {{ localities[0].longitude }}</dd>
          </div>
          <div v-if="localities[0].date_changed" class="flex flex-col">
            <dt class="text-sm font-medium text-slate-500">Last updated</dt>
            <dd class="mt-0.5 text-slate-800">{{ localities[0].date_changed }}</dd>
          </div>
        </dl>

        <div v-if="localities[0].remarks" class="mt-6 border-t border-slate-300 pt-4">
          <dt class="text-sm font-medium text-slate-500">Remarks</dt>
          <dd class="mt-1 text-slate-700">{{ localities[0].remarks }}</dd>
        </div>
      </div>

      <LocalityMap
        v-if="localities[0].latitude && localities[0].longitude"
        :name="localities[0].name_en"
        :latitude="localities[0].latitude"
        :longitude="localities[0].longitude"
      />
      <div v-else class="border border-slate-300 py-8 text-center text-slate-600">
        There is no data for map.
      </div>
    </template>

    <div v-else class="py-8 text-center text-slate-500">
      Loading...
    </div>
  </div>
</template>
