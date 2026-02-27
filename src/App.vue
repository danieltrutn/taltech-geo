<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-slate-900">
    <header>
      <div class="mx-auto max-w-4xl border border-gray-300 bg-transarent px-4 py-4 sm:px-6">
        <router-link to="/" class="text-xl font-semibold text-green hover:text-slate-600">
          Geological Localities
        </router-link>
      </div>
    </header>
    <main class="mx-auto max-w-4xl border-x border-gray-300 px-4 py-6 sm:px-6">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <footer>
      <div class="mx-auto max-w-4xl border border-gray-300 bg-transarent px-4 py-4 sm:px-6">
        <router-link to="/" class="text-xl font-semibold text-green hover:text-slate-600">
          Geological Localities
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
