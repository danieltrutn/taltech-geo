<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLocalities } from '@/composables/useLocalities'
import SearchInput from '@/components/SearchInput.vue'

const searchQuery = ref('')
const {
  localities,
  totalCount,
  loading,
  error,
  fetchPage,
} = useLocalities({ limit: 20 })


watch(searchQuery, (q) => {
  fetchPage(searchQuery.value)
})

onMounted(() => {
  fetchPage({ limit: 20 })
})
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold text-slate-800">Localities</h1>

    <SearchInput
      v-model="searchQuery"
      :loading="loading"
      placeholder="Filter by country ..."
    />

    <div v-if="error" class="rounded-lg bg-red-50 p-4 text-red-800">
      {{ error }}
    </div>

    {{ totalCount }}

    <div v-for="locality in localities">
        <p>{{ locality.name_en }} </p>
    </div>

  </div>
</template>
