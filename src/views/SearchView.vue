<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLocalities } from '@/composables/useLocalities'
import SearchInput from '@/components/SearchInput.vue'
import LocalitiesList from '@/components/LocalitiesList.vue'

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
    <div class="flex gap-2">
      <button
        type="button"
        :disabled="!hasPrevious"
        class="text-xl font-semibold text-green hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
        @click="goPrevious"
      >
        < Previous
      </button>
      <button
        type="button"
        :disabled="!hasNext"
        class="text-xl font-semibold text-green hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
        @click="goNext"
      >
        Next >
      </button>
    </div>
    <LocalitiesList :localities="localities" :search-query="searchQuery"/>
     <div class="flex gap-2">
      <button
        type="button"
        :disabled="!hasPrevious"
        class="text-xl font-semibold text-green hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
        @click="goPrevious"
      >
        < Previous
      </button>
      <button
        type="button"
        :disabled="!hasNext"
        class="text-xl font-semibold text-green hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
        @click="goNext"
      >
        Next >
      </button>
    </div>
  </div>
</template>
