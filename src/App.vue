<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar v-if="showHeaderFooter" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
    <FooterComponent v-if="showHeaderFooter" class="mt-auto" />
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
  },
  computed: {
    showHeaderFooter() {
      // Verifica se a rota atual não é a rota de detalhes do projeto
      return this.$route.name !== 'ProjectDetails';
    }
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
