<template>
  <div id="nav">
    <nav class="principal navbar-content p-4" :class="{ 'slide-in': isMounted }">
      <div class="container mx-auto py-2 flex flex-row items-center justify-between md:items-start">
        <!-- Botão Hamburguer (aparece apenas em dispositivos móveis) -->
        <div class="block pb-8 md:hidden">
          <div @click="toggleMenu" :class="{ 'change': menuOpen }" class="text-white hamburguer">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
        <!-- Menu para dispositivos maiores que 768px -->
        <ul class="hidden md:flex md:flex-row gap-4 mt-2 md:mt-0">
          <li class="mr-6">
            <router-link to="/"
              class="font-medium text-white transition-colors duration-300 ease-in-out hover:text-gray-300 text-base">Home</router-link>
          </li>
          <li class="mr-6">
            <a href="#projects" @click.prevent="scrollToSection('projects')"
              class="font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Projetos</a>
          </li>
          <li class="mr-6">
            <a href="#about" @click.prevent="scrollToSection('about')"
              class="font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Sobre</a>
          </li>
          <li class="mr-6">
            <router-link to="/guestbook"
              class="font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Guestbook</router-link>
          </li>
        </ul>
      </div>
      <div class="bottom-0 left-0 right-0 mb-4 bg-white linha"></div>
    </nav>
    <!-- Overlay do menu mobile -->
    <div v-if="menuOpen" class="mobile-menu-overlay" @click="closeMenu">
      <div class="mobile-menu-content justify-center text-center align-center" @click.stop>
        <ul class="flex flex-col gap-4 mt-4">
          <li @click="closeMenu">
            <router-link to="/"
              class="font-medium text-white transition-colors duration-300 ease-in-out hover:text-gray-300 text-base">Home</router-link>
          </li>
          <li @click="closeMenu">
            <a href="#projects" @click.prevent="scrollToSection('projects')"
              class="font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Projetos</a>
          </li>
          <li @click="closeMenu">
            <a href="#about" @click.prevent="scrollToSection('about')"
              class="font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Sobre</a>
          </li>
          <li @click="closeMenu">
            <router-link to="/guestbook"
              class="font-medium text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Guestbook</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      button_active_state: false,
      menuOpen: false,
      isMounted: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      this.closeMenu();
    }
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true;
    }, 200);
  }
};
</script>

<style scoped>
.hamburguer {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 28px;
  height: 1px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}

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
  transition: transform 0.7s ease-out;
  /* Transição suave para a animação */
  transform: translateY(-100%);
  /* Inicia fora da tela */
}

.navbar-content.slide-in {
  transform: translateY(0);
  /* Move para a posição final */
}

.linha {
  width: 100%;
  height: 0.2px;
}

.mr-6 {
  font-weight: 700;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu-content {
  background-color: #2c2c2c;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
}

@media (min-width: 769px) {
  .hamburguer {
    display: none;
  }

  .container {
    flex-direction: row;
  }
}
</style>
