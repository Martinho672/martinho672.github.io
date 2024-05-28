<template>
  <nav class="principal navbar-content p-4">
    <div class="ml-4 container mx-auto py-2 flex items-center justify-between">
      <ul class="flex gap-4">
        <li class="mr-6">
          <a href="#"
            class="font-bold text-white transition-colors duration-300 ease-in-out hover:text-gray-300  text-base">Home</a>
        </li>
        <li class="mr-6">
          <a href="#"
            class="font-bold text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Projetos</a>
        </li>
        <li class="mr-6">
          <a href="#"
            class="font-bold text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Sobre</a>
        </li>
        <li class="mr-6">
          <a href="#"
            class="font-bold text-gray-300 transition-colors duration-300 ease-in-out hover:text-white text-base">Guestbook</a>
        </li>
      </ul>
      <div>
        <button v-bind:class="{ 'i-am-active': button_active_state }"
          v-on:click="button_active_state = !button_active_state" name="button"
          class="theme-icon items-center flex justify-center font-bold mr-8">
        </button>
      </div>
    </div>
    <div class="bottom-0 left-0 right-0 bg-white linha"></div>
  </nav>
</template>
  
<script>


export default {
  name: 'Navbar',
  data() {
    return {
      button_active_state: false
    };

  }
}
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
  widows: 100%;
  height: 0.2px;
}

.mr-6 {
  font-weight: 700;
}
</style>
