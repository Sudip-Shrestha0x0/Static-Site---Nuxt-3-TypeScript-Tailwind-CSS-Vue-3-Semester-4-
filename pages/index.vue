<template>
  <div>
    <!-- Hero Section -->
    <section class="section-container min-h-[80vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green bg-clip-text text-transparent">
          Sudip Shrestha
        </h1>
        <p class="text-xl md:text-2xl text-dark-muted mb-8 max-w-3xl mx-auto">
          Creator, Explorer, Innovator
        </p>
        <p class="text-lg text-dark-text mb-12 max-w-2xl mx-auto leading-relaxed">
          Welcome to my personal space where creativity meets technology, and exploration knows no bounds. 
          From mountain peaks to code repositories, from musical notes to cosmic observations.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/about" class="btn-primary">
            About Me
          </NuxtLink>
          <NuxtLink to="/creative" class="bg-dark-card border border-accent-purple text-dark-text px-6 py-3 rounded-lg font-semibold hover:bg-accent-purple hover:text-dark-bg transition-all duration-300">
            View My Work
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Interests -->
    <section class="section-container">
      <h2 class="text-center mb-12">What I Do</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Creative -->
        <NuxtLink to="/creative" class="card group">
          <div class="mb-4">
            <svg class="w-12 h-12 text-accent-blue group-hover:text-accent-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-accent-blue transition-colors">Creative Work</h3>
          <p class="text-dark-muted">Photography, graphic design, UI/UX, and music production</p>
        </NuxtLink>

        <!-- Adventures -->
        <NuxtLink to="/adventures" class="card group">
          <div class="mb-4">
            <svg class="w-12 h-12 text-accent-green group-hover:text-accent-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-accent-green transition-colors">Adventures</h3>
          <p class="text-dark-muted">Mountain climbing, hiking, sports, and outdoor exploration</p>
        </NuxtLink>

        <!-- Tech -->
        <NuxtLink to="/tech" class="card group">
          <div class="mb-4">
            <svg class="w-12 h-12 text-accent-purple group-hover:text-accent-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors">Tech & Innovation</h3>
          <p class="text-dark-muted">Coding, robotics, cybersecurity, and autonomous systems</p>
        </NuxtLink>

        <!-- Explorations -->
        <NuxtLink to="/explorations" class="card group">
          <div class="mb-4">
            <svg class="w-12 h-12 text-accent-orange group-hover:text-accent-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-accent-orange transition-colors">Explorations</h3>
          <p class="text-dark-muted">Stargazing, ancient literature, and consciousness research</p>
        </NuxtLink>

        <!-- Contact Card -->
        <div class="card lg:col-span-2">
          <h3 class="text-2xl font-bold mb-3">Get In Touch</h3>
          <p class="text-dark-muted mb-4">
            Interested in collaborating or just want to chat about shared interests? Feel free to reach out.
          </p>
          <a href="mailto:shadownb0x01@icloud.com" class="inline-block bg-accent-blue text-dark-bg px-6 py-3 rounded-lg font-semibold hover:bg-accent-purple transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'home'
})
</script>