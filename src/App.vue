<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900">
    <header class="border-b border-slate-200 bg-white shadow-sm">
      <div class="mx-auto max-w-4xl px-4 py-4 sm:px-6">
        <router-link to="/" class="text-xl font-semibold text-slate-800 hover:text-slate-600">
          Geological Localities
        </router-link>
      </div>
    </header>
    <main class="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped></style>
