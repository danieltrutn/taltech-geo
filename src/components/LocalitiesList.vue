<script setup lang="ts">
import type { Locality } from '@/types/locality'

defineProps<{
  localities:  Locality[]
  searchQuery?: string
}>()

</script>

<template>
  <div class="relative">
    <div v-for="locality in localities" :key="locality.id" class="w-full border bg-green flex place-content-between border-slate-300 text-white py-2 pl-4 pr-10 text-slate-900 mb-4">
        {{locality.name_en}}
        <p>></p>
    </div>
    <div v-if="searchQuery?.trim() && localities.length === 0" class="py-8 text-center text-slate-600">
      No localities found for "{{ searchQuery }}"
    </div>
  </div>
</template>
