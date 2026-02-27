<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLocalities } from '@/composables/useLocalities'
import SearchInput from '@/components/SearchInput.vue'
import LocalitiesList from '@/components/LocalitiesList.vue'
import PaginationButtons from '@/components/PaginationButtons.vue'
const searchQuery = ref('')
const {
  localities,
  totalCount,
  loading,
  error,
  hasNext,
  hasPrevious,
  goNext,
  goPrevious,
  fetchPage,
} = useLocalities({ limit: 20 })

watch(searchQuery, (q) => {
  fetchPage({ name: searchQuery.value })
})

onMounted(() => {
  fetchPage({ limit: 20 })
})
</script>

<template>
  <div class="space-y-6">
    <h1  class="mt-6 text-2xl font-bold text-slate-800">Find localities</h1>

    <SearchInput
      v-model="searchQuery"
      :loading="loading"
    />

    <div v-if="error" class="rounded-lg bg-red-50 p-4 text-red-800">
      {{ error }}
    </div>

    <p class="text-red-800">Total: {{ totalCount }}</p>

    <PaginationButtons
      :has-previous="hasPrevious"
      :has-next="hasNext"
      @previous="goPrevious"
      @next="goNext"
    />
    <LocalitiesList :localities="localities" :search-query="searchQuery"/>
    <PaginationButtons
      :has-previous="hasPrevious"
      :has-next="hasNext"
      @previous="goPrevious"
      @next="goNext"
    />
  </div>
</template>
