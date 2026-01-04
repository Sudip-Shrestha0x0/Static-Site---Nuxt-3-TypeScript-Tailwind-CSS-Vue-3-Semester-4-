<template>
  <div class="section-container">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-center mb-4">Adventures</h1>
      <p class="text-center text-dark-muted mb-12 max-w-3xl mx-auto text-lg">
        From conquering Himalayan peaks to exploring remote trails, every adventure is a lesson in perseverance and humility.
      </p>

      <!-- Mountain Climbing Section -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <svg class="w-8 h-8 text-accent-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <h2>Mountain Climbing</h2>
        </div>
        
        <div class="card mb-8">
          <p class="text-dark-muted mb-8 leading-relaxed">
            The mountains have always called to me. There is something profound about standing at high altitude, where the 
            air is thin and every step requires intention. I have been fortunate to summit several significant peaks in the 
            Himalayas, each expedition teaching me valuable lessons about preparation, teamwork, and respect for nature.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <!-- Mera Peak -->
            <div class="bg-dark-surface rounded-lg overflow-hidden">
              <div class="aspect-video bg-dark-bg">
                <img src="/images/adventures/mera-peak.png" alt="Mera Peak summit" class="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-accent-blue">Mera Peak</h3>
                <p class="text-dark-muted text-sm mb-3">Elevation: 6,476m (21,247 ft)</p>
                <p class="text-dark-muted text-sm leading-relaxed">
                  The highest trekking peak in Nepal. The climb offered stunning views of Everest, Lhotse, and Makalu. 
                  A challenging yet rewarding expedition that tested my endurance at extreme altitude.
                </p>
              </div>
            </div>

            <!-- Island Peak -->
            <div class="bg-dark-surface rounded-lg overflow-hidden">
              <div class="aspect-video bg-dark-bg">
                <img src="/images/adventures/island-peak.png" alt="Island Peak summit" class="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-accent-blue">Island Peak</h3>
                <p class="text-dark-muted text-sm mb-3">Elevation: 6,189m (20,305 ft)</p>
                <p class="text-dark-muted text-sm leading-relaxed">
                  Also known as Imja Tse, this technical climb in the Everest region required ice climbing and glacier 
                  traversing. The summit push at dawn revealed breathtaking panoramic views.
                </p>
              </div>
            </div>

            <!-- Chulu West -->
            <div class="bg-dark-surface rounded-lg overflow-hidden">
              <div class="aspect-video bg-dark-bg">
                <img src="/images/adventures/chulu-west.png" alt="Chulu West summit" class="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-accent-blue">Chulu West</h3>
                <p class="text-dark-muted text-sm mb-3">Elevation: 6,419m (21,060 ft)</p>
                <p class="text-dark-muted text-sm leading-relaxed">
                  Located in the Annapurna region, this peak demanded technical climbing skills and careful acclimatization. 
                  The route through the Manang valley was equally spectacular.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-gradient-to-r from-dark-surface to-dark-card border-accent-blue">
          <h3 class="mb-4">Climbing Philosophy</h3>
          <p class="text-dark-muted leading-relaxed">
            Mountain climbing is not about conquering peaks but about understanding our limitations and pushing them 
            respectfully. Every mountain teaches patience, humility, and the importance of preparation. I approach each 
            climb with deep respect for the environment and local cultures, following Leave No Trace principles and 
            supporting local communities.
          </p>
        </div>
      </section>

      <!-- Hiking & Trekking Section -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <svg class="w-8 h-8 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2>Hiking & National Parks</h2>
        </div>

        <div class="card mb-6">
          <p class="text-dark-muted mb-6 leading-relaxed">
            When not pursuing high-altitude objectives, I spend time exploring national parks and forest areas. These 
            hikes offer a different kind of connection with nature - less about the challenge and more about observation, 
            photography, and peaceful contemplation.
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-dark-surface p-6 rounded-lg">
              <h4 class="font-semibold mb-4 text-accent-green">Favorite Hiking Destinations</h4>
              <ul class="space-y-3 text-dark-muted text-sm">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5L6 10h8l-4-6.5z"/>
                    <path d="M4 12l6 7.5 6-7.5H4z"/>
                  </svg>
                  Gatineau Park trails and lookouts
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5L6 10h8l-4-6.5z"/>
                    <path d="M4 12l6 7.5 6-7.5H4z"/>
                  </svg>
                  Algonquin Provincial Park backcountry routes
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5L6 10h8l-4-6.5z"/>
                    <path d="M4 12l6 7.5 6-7.5H4z"/>
                  </svg>
                  Bruce Trail sections in Ontario
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5L6 10h8l-4-6.5z"/>
                    <path d="M4 12l6 7.5 6-7.5H4z"/>
                  </svg>
                  Langtang Valley trek in Nepal
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5L6 10h8l-4-6.5z"/>
                    <path d="M4 12l6 7.5 6-7.5H4z"/>
                  </svg>
                  Everest Base Camp trail
                </li>
              </ul>
            </div>

            <div class="aspect-video bg-dark-bg rounded-lg overflow-hidden">
              <img src="/images/adventures/hiking.png" alt="Hiking in national park" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- Sports Section -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <svg class="w-8 h-8 text-accent-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2>Sports & Activities</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Football -->
          <div class="card">
            <h3 class="text-lg font-semibold mb-3 text-accent-purple">Football</h3>
            <p class="text-dark-muted text-sm mb-4">
              Playing football has taught me teamwork and strategic thinking. Whether on the field or watching professional 
              matches, I appreciate the beautiful game.
            </p>
            <div class="aspect-video bg-dark-surface rounded overflow-hidden">
              <img src="/images/adventures/football.png" alt="Football" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Cricket -->
          <div class="card">
            <h3 class="text-lg font-semibold mb-3 text-accent-purple">Cricket</h3>
            <p class="text-dark-muted text-sm mb-4">
              Cricket combines patience with explosive action. I enjoy both playing and following international cricket, 
              especially test matches.
            </p>
            <div class="aspect-video bg-dark-surface rounded overflow-hidden">
              <img src="/images/adventures/cricket.png" alt="Cricket" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Gaming -->
          <div class="card">
            <h3 class="text-lg font-semibold mb-3 text-accent-purple">Competitive Gaming</h3>
            <p class="text-dark-muted text-sm mb-4">
              Strategic games sharpen my decision-making skills. I enjoy first-person shooters, strategy games, and 
              occasionally competitive esports.
            </p>
            <div class="aspect-video bg-dark-surface rounded overflow-hidden">
              <img src="/images/adventures/gaming.png" alt="Gaming setup" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- Swimming & Farming -->
      <section>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Swimming -->
          <div class="card">
            <div class="flex items-center mb-6">
              <svg class="w-8 h-8 text-accent-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <h3 class="text-xl font-semibold">Swimming</h3>
            </div>
            <p class="text-dark-muted leading-relaxed">
              Swimming provides both physical exercise and mental clarity. I swim regularly for fitness and enjoy open 
              water swimming when conditions permit. The meditative quality of swimming helps me process ideas and 
              decompress from technical work.
            </p>
            <div class="mt-4 aspect-video bg-dark-surface rounded overflow-hidden">
              <img src="/images/adventures/swimming.png" alt="Swimming" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Farming -->
          <div class="card">
            <div class="flex items-center mb-6">
              <svg class="w-8 h-8 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 class="text-xl font-semibold">Organic Farming</h3>
            </div>
            <p class="text-dark-muted leading-relaxed">
              Growing food connects me to fundamental life processes. I practice organic farming methods, focusing on 
              soil health and sustainable practices. This hands-on work with earth and plants offers a grounding 
              counterbalance to my digital pursuits.
            </p>
            <div class="mt-4 aspect-video bg-dark-surface rounded overflow-hidden">
              <img src="/images/adventures/farming.png" alt="Organic farming" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Adventures page showcasing outdoor activities and sports
</script>