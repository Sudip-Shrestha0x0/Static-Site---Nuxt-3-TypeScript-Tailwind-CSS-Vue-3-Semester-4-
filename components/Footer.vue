<template>
  <footer class="bg-dark-surface border-t border-dark-border mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent-blue">Sudip Shrestha</h3>
          <p class="text-dark-muted text-sm leading-relaxed">
            A passionate explorer of technology, creativity, and the natural world. 
            Constantly learning and pushing boundaries.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent-blue">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="text-dark-muted hover:text-accent-blue transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/creative" class="text-dark-muted hover:text-accent-blue transition-colors">Creative Work</NuxtLink></li>
            <li><NuxtLink to="/tech" class="text-dark-muted hover:text-accent-blue transition-colors">Tech Projects</NuxtLink></li>
            <li><NuxtLink to="/adventures" class="text-dark-muted hover:text-accent-blue transition-colors">Adventures</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-accent-blue">Contact</h3>
          <div class="space-y-2 text-sm">
            <p class="text-dark-muted">
              <a href="mailto:shadownb0x01@icloud.com" class="hover:text-accent-blue transition-colors">
                shadownb0x01@icloud.com
              </a>
            </p>
            <p class="text-dark-muted">
              <a href="https://github.com/Sudip-sasquash0x01" target="_blank" rel="noopener noreferrer" class="hover:text-accent-blue transition-colors">
                GitHub: Sudip-sasquash0x01
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-dark-border text-center">
        <p class="text-dark-muted text-sm">
          &copy; 𝕾𝖚𝖉𝖎𝖕. Built with Nuxt and Tailwind CSS.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component with contact and navigation
</script>