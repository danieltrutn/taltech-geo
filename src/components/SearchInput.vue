<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target?.value ?? '')
}
</script>

<template>
  <div class="relative">
    <input
      type="search"
      :value="modelValue"
      :placeholder="placeholder ?? 'Search by name...'"
      class="w-full border border-slate-300 bg-white py-4 pl-5 pr-15 text-slate-900 placeholder-slate-500 focus:outline-none  disabled:opacity-60"
      @input="onInput"
    />
  </div>
</template>
