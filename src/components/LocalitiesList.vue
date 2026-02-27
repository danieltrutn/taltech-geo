<script setup lang="ts">
import type { Locality } from '@/types/locality'

defineProps<{
  localities: Locality[]
  searchQuery?: string
}>()
</script>

<template>
  <div class="relative space-y-3">
    <router-link
      v-for="locality in localities"
      :key="locality.id"
      :to="`/locality/${locality.id}`"
      class="w-full border flex border-slate-300 p-5 text-slate-900 mb-5 hover:bg-white"
    >
      <div class="w-full flex items-center justify-between">
        <div>
          <p class="font-medium text-slate-800">
            {{ locality.name_en }}
          </p>
          <p class="mt-0.5 text-sm text-slate-500">
            ID: {{ locality.id }}
          </p>
          <p  class="mt-0.5 text-sm text-slate-500">
            Country: {{ locality.country.name_en }}
          </p>
        </div>
        <span class="text-slate-400">></span>
      </div>
    </router-link>

    <div
      v-if="searchQuery?.trim() && localities.length === 0"
      class="py-8 text-center text-slate-600"
    >
      No localities found for "{{ searchQuery }}"
    </div>
  </div>
</template>