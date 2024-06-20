<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
    <FooterComponent class="mt-auto" />
  </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterComponent
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.2;
}
</style>
