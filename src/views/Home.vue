<template>
  <div>
    <div class="principal min-h-screen text-white flex flex-col">
      <section class="py-1 flex-grow">
        <div class="flex flex-col md:flex-row mb-12">
          <div class="md:flex-1 md:mr-8">
            <div class="container-texto md:w-3/4">
              <h1 class="text-4xl font-bold">Fernando Nascimento</h1>
              <p class="text-sm font-bold py-1">Desenvolvedor Frontend.</p>
              <p class="mt-2 text-sm text-pretty pequeninas">Apaixonado por tecnologia, buscando sempre ser mais
                criativo,
                desenvolvendo aplicações complexas de forma simples</p>
            </div>
            <div class="flex space-x-4 mt-4">
              <SocialLinks />
            </div>
          </div>
          <div class="flex-2 mt-6 md:mt-0 sm:block sm:top-0 md:flex-shrink-0">
            <img src="../assets/images/perfil.webp" alt="Foto de perfil"
              class="rounded-full w-44 h-44 object-cover drop-shadow-xl border-solid border-black border-2 pointer-events-none">
          </div>
        </div>
        <section id="projects">
          <div>
            <h2 class="text-2xl font-bold container-texto py-2">Projetos</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-4 teste">
              <ProjectCard v-for="(card, index) in projects" :key="index" :id="index" :title="card.title"
                :imageUrl="card.imageUrl" :backgroundColor="card.backgroundColor"
                :backgroundHeight="card.backgroundHeight" @card-clicked="navigateToProject" />
            </div>
          </div>
        </section>
      </section>
    </div>
    <section id="about">
      <About />
    </section>
  </div>

</template>

<script>
import SocialLinks from '../components/SocialLinks.vue';
import ProjectCard from '../components/ProjectCard.vue';
import About from '../views/About.vue'; // Ensure the correct path to About.vue
import { projects } from '../projects';

export default {
  components: {
    SocialLinks,
    ProjectCard,
    About
  },
  data() {
    return {
      projects
    }
  },
  methods: {
    navigateToProject(id) {
      this.$router.push({ name: 'ProjectDetails', params: { id: id } });
    }
  }
};
</script>

<style scoped>
.container-texto {
  text-align: start;
}
</style>
