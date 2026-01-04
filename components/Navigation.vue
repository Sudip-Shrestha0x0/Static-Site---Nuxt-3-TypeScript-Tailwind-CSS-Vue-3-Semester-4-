<template>
  <nav class="bg-dark-surface border-b border-dark-border sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-accent-blue hover:text-accent-purple transition-colors">
          𝕾𝖚𝖉𝖎𝖕
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/creative" class="nav-link">Creative</NuxtLink>
          <NuxtLink to="/adventures" class="nav-link">Adventures</NuxtLink>
          <NuxtLink to="/tech" class="nav-link">Tech & Innovation</NuxtLink>
          <NuxtLink to="/explorations" class="nav-link">Explorations</NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-dark-text focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden pb-4">
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/" class="nav-link py-2" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link py-2" @click="closeMenu">About</NuxtLink>
          <NuxtLink to="/creative" class="nav-link py-2" @click="closeMenu">Creative</NuxtLink>
          <NuxtLink to="/adventures" class="nav-link py-2" @click="closeMenu">Adventures</NuxtLink>
          <NuxtLink to="/tech" class="nav-link py-2" @click="closeMenu">Tech & Innovation</NuxtLink>
          <NuxtLink to="/explorations" class="nav-link py-2" @click="closeMenu">Explorations</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.router-link-active {
  @apply text-accent-blue;
}
</style>