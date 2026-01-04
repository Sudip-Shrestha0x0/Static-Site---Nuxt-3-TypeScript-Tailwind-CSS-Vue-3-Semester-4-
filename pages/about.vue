<template>
  <div class="section-container">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-center mb-12">About Me</h1>
      
      <div class="card mb-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-1">
            <div class="aspect-square bg-dark-surface rounded-lg overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Sudip Shrestha" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="md:col-span-2">
            <h2 class="mb-4">Sudip Shrestha</h2>
            <p class="text-dark-muted mb-4">
              I am a multidisciplinary creator and explorer with a deep passion for technology, arts, and the natural world. 
              My journey spans across various domains, from scaling mountain peaks to building autonomous systems, 
              from capturing moments through photography to composing music.
            </p>
            <p class="text-dark-muted mb-4">
              Based in Ottawa, I constantly seek to push the boundaries of what is possible, whether it is through code, 
              design, or physical challenges. I believe in the power of interdisciplinary learning and how different fields 
              can inform and enrich each other.
            </p>
            <div class="flex gap-4 mt-6">
              <a href="mailto:shadownb0x01@icloud.com" class="btn-primary">
                Contact
              </a>
              <a href="https://github.com/Sudip-sasquash0x01" target="_blank" rel="noopener noreferrer" class="bg-dark-surface border border-accent-blue text-dark-text px-6 py-3 rounded-lg font-semibold hover:bg-dark-border transition-all duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills & Interests Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <!-- Technical Skills -->
        <div class="card">
          <h3 class="mb-4 text-accent-blue">Technical Skills</h3>
          <ul class="space-y-2 text-dark-muted">
            <li class="flex items-start">
              <span class="text-accent-green mr-2">&#10148;</span>
              Full-stack web development
            </li>
            <li class="flex items-start">
              <span class="text-accent-green mr-2">&#10148;</span>
              UI/UX design and prototyping
            </li>
            <li class="flex items-start">
              <span class="text-accent-green mr-2">&#10148;</span>
              Autonomous systems engineering
            </li>
            <li class="flex items-start">
              <span class="text-accent-green mr-2">&#10148;</span>
              Cybersecurity and penetration testing
            </li>
            <li class="flex items-start">
              <span class="text-accent-green mr-2">&#10148;</span>
              Graphic design and visual communication
            </li>
          </ul>
        </div>

        <!-- Creative Pursuits -->
        <div class="card">
          <h3 class="mb-4 text-accent-purple">Creative Pursuits</h3>
          <ul class="space-y-2 text-dark-muted">
            <li class="flex items-start">
              <span class="text-accent-orange mr-2">&#10148;</span>
              Photography and visual storytelling
            </li>
            <li class="flex items-start">
              <span class="text-accent-orange mr-2">&#10148;</span>
              Music production using FL Studio
            </li>
            <li class="flex items-start">
              <span class="text-accent-orange mr-2">&#10148;</span>
              Playing various musical instruments
            </li>
            <li class="flex items-start">
              <span class="text-accent-orange mr-2">&#10148;</span>
              Reading ancient texts and philosophy
            </li>
            <li class="flex items-start">
              <span class="text-accent-orange mr-2">&#10148;</span>
              Exploring consciousness and psychedelics research
            </li>
          </ul>
        </div>
      </div>

      <!-- Adventure & Sports -->
      <div class="card">
        <h3 class="mb-4 text-accent-green">Adventure & Physical Pursuits</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold mb-3 text-dark-text">Mountain Climbing</h4>
            <p class="text-dark-muted mb-3">
              I have summited several challenging peaks in the Himalayas, including:
            </p>
            <ul class="space-y-2 text-dark-muted">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5L6 10h8l-4-6.5z"/>
                  <path d="M4 12l6 7.5 6-7.5H4z"/>
                </svg>
                Mera Peak (6,476m)
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5L6 10h8l-4-6.5z"/>
                  <path d="M4 12l6 7.5 6-7.5H4z"/>
                </svg>
                Island Peak (6,189m)
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5L6 10h8l-4-6.5z"/>
                  <path d="M4 12l6 7.5 6-7.5H4z"/>
                </svg>
                Chulu West (6,419m)
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-3 text-dark-text">Other Activities</h4>
            <ul class="space-y-2 text-dark-muted">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Hiking in national parks and forest areas
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Football and cricket enthusiast
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Competitive gaming
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Swimming and aquatic sports
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-accent-blue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Organic farming practices
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Philosophy Section -->
      <div class="card mt-8">
        <h3 class="mb-4">My Approach</h3>
        <p class="text-dark-muted leading-relaxed">
          I believe that the intersection of different disciplines creates the most innovative solutions. 
          Whether I am debugging code, composing music, or planning a mountain expedition, I apply the same 
          principles of careful planning, creative problem-solving, and relentless curiosity. Each field I explore 
          informs the others, creating a unique perspective that I bring to every project and challenge.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// About page showcasing background and interests
</script>