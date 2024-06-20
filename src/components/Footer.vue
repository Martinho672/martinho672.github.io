<template>
  <footer class="footer">
    <div class="container h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-48 py-4">
      <div class="mb-4 md:mb-0 text-center md:text-left">
        <p class="text-sm font-bold">&copy; 2024 Fernando Nascimento. Todos os direitos reservados.</p>
      </div>
      <div class="flex space-x-4">
        <SocialLinks :bgColor="'#3C3B3C'" />
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from './SocialLinks.vue';

export default {
  name: 'FooterComponent',
  components: { SocialLinks }
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #3C3B3C;
}

.text-sm {
  color: #A3A3A3;
}
</style>
