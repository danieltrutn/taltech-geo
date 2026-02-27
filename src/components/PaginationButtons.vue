<script setup lang="ts">
defineProps<{
  hasPrevious: boolean
  hasNext: boolean
}>()
defineEmits<{
  previous: []
  next: []
}>()
</script>

<template>
  <div class="flex gap-2">
    <button
      type="button"
      :disabled="!hasPrevious"
      class="text-xl font-semibold text-green hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
      @click="$emit('previous')"
    >
      < Previous
    </button>
    <button
      type="button"
      :disabled="!hasNext"
      class="text-xl font-semibold text-green hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
      @click="$emit('next')"
    >
      Next >
    </button>
  </div>
</template>