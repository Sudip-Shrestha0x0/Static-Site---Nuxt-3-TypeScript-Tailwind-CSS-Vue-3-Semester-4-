<template>
  <div class="section-container">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-center mb-4">Tech & Innovation</h1>
      <p class="text-center text-dark-muted mb-12 max-w-3xl mx-auto text-lg">
        Building the future through code, autonomous systems, and security research. Technology as a tool for solving real problems.
      </p>

      <!-- Coding Section -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <svg class="w-8 h-8 text-accent-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h2>Software Development</h2>
        </div>

        <div class="card mb-8">
          <p class="text-dark-muted mb-8 leading-relaxed">
            I build web applications, automation tools, and creative coding projects. My approach focuses on clean, 
            maintainable code and user-centered design. I believe in choosing the right tool for the job rather than 
            following trends blindly.
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-accent-blue">Technical Stack</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-dark-text mb-2">Frontend</h4>
                  <p class="text-dark-muted text-sm">
                    JavaScript, TypeScript, Vue.js, Nuxt, React, HTML5, CSS3, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-text mb-2">Backend</h4>
                  <p class="text-dark-muted text-sm">
                    Node.js, Python, Express, RESTful APIs, GraphQL
                  </p>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-text mb-2">Tools & Other</h4>
                  <p class="text-dark-muted text-sm">
                    Git, Docker, Linux, Bash scripting, CI/CD pipelines
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4 text-accent-blue">Project Focus Areas</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-accent-green mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-dark-text">Web Applications</h4>
                    <p class="text-dark-muted text-sm">Full-stack applications with modern frameworks</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-accent-green mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-dark-text">Automation Tools</h4>
                    <p class="text-dark-muted text-sm">Scripts and tools to streamline workflows</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-accent-green mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-dark-text">Data Visualization</h4>
                    <p class="text-dark-muted text-sm">Interactive dashboards and charts</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-accent-green mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <h4 class="font-semibold text-dark-text">API Development</h4>
                    <p class="text-dark-muted text-sm">RESTful and GraphQL APIs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 bg-dark-surface p-6 rounded-lg">
            <div class="aspect-video bg-dark-bg rounded overflow-hidden">
              <img src="/images/tech/coding.png" alt="Coding workspace" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-dark-surface p-6 rounded-lg border border-dark-border hover:border-accent-blue transition-all">
            <h4 class="font-semibold mb-2 text-dark-text">Clean Code</h4>
            <p class="text-dark-muted text-sm">
              Writing readable, maintainable code that others can understand and build upon
            </p>
          </div>
          <div class="bg-dark-surface p-6 rounded-lg border border-dark-border hover:border-accent-blue transition-all">
            <h4 class="font-semibold mb-2 text-dark-text">Testing</h4>
            <p class="text-dark-muted text-sm">
              Comprehensive testing strategies to ensure reliability and catch issues early
            </p>
          </div>
          <div class="bg-dark-surface p-6 rounded-lg border border-dark-border hover:border-accent-blue transition-all">
            <h4 class="font-semibold mb-2 text-dark-text">Documentation</h4>
            <p class="text-dark-muted text-sm">
              Clear documentation that serves as a guide for future developers and users
            </p>
          </div>
        </div>
      </section>

      <!-- Autonomous Systems Section -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <svg class="w-8 h-8 text-accent-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          <h2>Autonomous Systems Engineering</h2>
        </div>

        <div class="card mb-8">
          <p class="text-dark-muted mb-8 leading-relaxed">
            My fascination with robotics and autonomous systems drives me to explore the intersection of hardware and 
            software. From humanoid robots to autonomous vehicles, I am interested in creating intelligent systems that 
            can perceive and interact with the world.
          </p>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-accent-purple">Areas of Interest</h3>
              <ul class="space-y-3 text-dark-muted text-sm">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Computer vision and image processing
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Machine learning for robotics
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Sensor fusion and perception systems
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Motion planning and control
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Human-robot interaction
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Embedded systems programming
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4 text-accent-purple">Technologies</h3>
              <ul class="space-y-3 text-dark-muted text-sm">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  Arduino and Raspberry Pi platforms
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  ROS (Robot Operating System)
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  Python for automation and ML
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  C/C++ for embedded systems
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  3D printing for rapid prototyping
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  TensorFlow and PyTorch
                </li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="aspect-video bg-dark-surface rounded-lg overflow-hidden">
              <img src="/images/tech/robotics1.png" alt="Robotics project" class="w-full h-full object-cover" />
            </div>
            <div class="aspect-video bg-dark-surface rounded-lg overflow-hidden">
              <img src="/images/tech/robotics2.png" alt="Autonomous systems" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="card bg-gradient-to-r from-dark-surface to-dark-card border-accent-purple">
          <h3 class="mb-4">Current Projects</h3>
          <p class="text-dark-muted leading-relaxed">
            I am currently working on a humanoid robot project that explores bipedal locomotion and balance control. 
            The project involves designing custom servo controllers, implementing inverse kinematics, and developing 
            a real-time control system. Additionally, I am experimenting with small-scale autonomous rovers for 
            navigation and mapping applications.
          </p>
        </div>
      </section>

      <!-- Cybersecurity Section -->
      <section>
        <div class="flex items-center mb-8">
          <svg class="w-8 h-8 text-accent-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2>Cybersecurity</h2>
        </div>

        <div class="card mb-8">
          <p class="text-dark-muted mb-8 leading-relaxed">
            Understanding security is essential in our connected world. I study cybersecurity from both defensive and 
            offensive perspectives, learning how systems can be compromised and how to protect them. This knowledge 
            informs my development practices and helps me build more secure applications.
          </p>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-dark-surface p-6 rounded-lg">
              <h3 class="text-lg font-semibold mb-3 text-accent-green">Network Security</h3>
              <p class="text-dark-muted text-sm">
                Understanding network protocols, firewalls, intrusion detection systems, and secure network architecture
              </p>
            </div>

            <div class="bg-dark-surface p-6 rounded-lg">
              <h3 class="text-lg font-semibold mb-3 text-accent-green">Web Security</h3>
              <p class="text-dark-muted text-sm">
                OWASP Top 10, SQL injection, XSS, CSRF, secure authentication, and authorization mechanisms
              </p>
            </div>

            <div class="bg-dark-surface p-6 rounded-lg">
              <h3 class="text-lg font-semibold mb-3 text-accent-green">Penetration Testing</h3>
              <p class="text-dark-muted text-sm">
                Ethical hacking methodologies, vulnerability assessment, and security auditing using industry tools
              </p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="mb-4 text-accent-green">Tools & Frameworks</h3>
            <div class="grid grid-cols-2 gap-3 text-dark-muted text-sm">
              <div class="flex items-center">
                <svg class="w-4 h-4 text-accent-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Kali Linux
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-accent-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Metasploit
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-accent-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Wireshark
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-accent-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Burp Suite
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-accent-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Nmap
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-accent-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                OWASP ZAP
              </div>
            </div>
          </div>

          <div class="card">
            <h3 class="mb-4 text-accent-green">Learning Resources</h3>
            <p class="text-dark-muted text-sm leading-relaxed">
              I continuously update my security knowledge through platforms like HackTheBox, TryHackMe, and 
              participating in CTF competitions. I also follow security researchers and read vulnerability disclosures 
              to stay current with emerging threats.
            </p>
            <div class="mt-4 aspect-video bg-dark-bg rounded overflow-hidden">
              <img src="/images/tech/cybersecurity.png" alt="Cybersecurity setup" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Tech and innovation page showcasing coding, robotics, and cybersecurity
</script>