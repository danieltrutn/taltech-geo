<script setup lang="ts">
import type { Locality } from '@/types/locality'

defineProps<{
  localities:  Locality[]
  searchQuery?: string
}>()

</script>

<template>
  <div class="relative">
    <router-link :to="`/locality/${locality.id}`" v-for="locality in localities" :key="locality.id" class="w-full border flex place-content-between border-slate-300 py-2 pl-4 pr-10 text-slate-900 mb-4 hover:bg-white">
        <div>
            <p>{{ locality.name_en }}</p>
            <p>ID: {{ locality.id }}</p>
            <p>Country: {{ locality.country.name_en }}</p>
        </div>
        <p class="content-center">></p>
    </router-link>
    <div v-if="searchQuery?.trim() && localities.length === 0" class="py-8 text-center text-slate-600">
      No localities found for "{{ searchQuery }}"
    </div>
  </div>
</template>
