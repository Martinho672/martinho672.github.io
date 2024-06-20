<template>
  <div id="nav">
    <nav class="principal navbar-content p-4">
      <div class="container mx-auto py-2 flex flex-row items-center justify-between md:items-start">
        <button @click="toggleMenu" class="block md:hidden text-white hamburguer">
          <svg class="w-4 h-4 items-center" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul :class="[' flex-col', 'md:flex', 'gap-4', { 'flex': menuOpen, 'hidden': !menuOpen }]"
          class="md:flex-row mt-2 md:mt-0">
          <li class="mr-6">
            <router-link to="/"
              class="font-bold text-white transition-colors duration-300 ease-in-out hover:text-gray-300 text-base">Home</router-link>
          </li>
          <li class="mr-6">
            <a href="#projects" @click.prevent="scrollToSection('projects')"
              class="font-bold text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">
              Projetos</a>
          </li>
          <li class="mr-6">
            <a href="#about" @click.prevent="scrollToSection('about')"
              class="font-bold text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Sobre</a>
          </li>
          <li class="mr-6">
            <router-link to="/guestbook"
              class="font-bold text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Guestbook</router-link>
          </li>
        </ul>
        <div>
          <button v-bind:class="{ 'i-am-active': button_active_state }"
            v-on:click="button_active_state = !button_active_state" name="button"
            class="theme-icon items-center flex justify-center font-bold">
          </button>
        </div>
      </div>
      <div class="bottom-0 left-0 right-0 bg-white linha"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      button_active_state: false,
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.theme-icon {
  padding: 1rem;
  background-image: url('../assets/light.svg');
  background-size: 50%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
}

.theme-icon:hover,
.theme-icon.hovered {
  background-image: url('../assets/moon.svg');
  background-size: 50%;
  filter: invert(1);
  transition: 300ms ease-in-out;
}

.i-am-active {
  background-image: url('../assets/moon.svg');
  background-size: 50%;
  background-color: #ffffff;
  filter: invert(1);
}

.navbar-content {
  background-color: #2c2c2c;
}

.linha {
  width: 100%;
  height: 0.2px;
}

.mr-6 {
  font-weight: 700;
}

@media (max-width: 768px) {
  .container {
    flex-direction: row;
  }

  .hamburguer {
    width: 10px;
  }
}
</style>
