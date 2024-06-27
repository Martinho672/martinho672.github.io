<template>
  <div>
    <div ref="abracadabrah" class="principal min-h-screen text-white flex flex-col ">
      <section class="py-1 md:flex-grow flex-col-reverse">
        <div class="flex flex-col md:flex-row mb-12 items-center">
          <div class="md:flex-1 md:mr-8 ">
            <div class="container-texto md:w-3/4 order-2 md:order-1 text-start">
              <h1 class="text-2xl md:text-4xl font-medium festa-top" :class="{ 'slide-in': isMounted }">
                Fernando
                Nascimento
              </h1>
              <p class="text-sm  festa-top " :class="{ 'slide-in': isMounted }">Desenvolvedor Frontend.</p>
              <p class=" text-sm text-pretty pequeninas festa" :class="{ 'slide-in': isMounted }">Apaixonado por
                tecnologia, desenvolvo soluções complexas
                com simplicidade e criatividade. Busco criar aplicações eficientes e inovadoras que tornam a vida mais
                fácil.</p>
            </div>
            <div class="flex space-x-4 mt-4 festa justify-center md:justify-normal" :class="{ 'slide-in': isMounted }">
              <SocialLinks />
            </div>
          </div>
          <div class="md:flex-2 mt-4 md:mt-0 sm:block sm:top-0  md:flex-shrink-0 festa md:order-2 order-1"
            :class="{ 'slide-in': isMounted }">
            <img src="../assets/images/perfil.webp" alt="Foto de perfil"
              class="rounded-full w-44 h-44 object-cover drop-shadow-xl border-solid border-black border-2 pointer-events-none">
          </div>
        </div>
      </section>
      <section id="projects">
        <div class="festa" :class="{ 'slide-in': isMounted }">
          <h2 class="text-2xl font-medium container-texto py-2">Projetos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-4 teste">
            <ProjectCard v-for="(card, index) in projects" :key="index" :id="index" :title="card.title"
              :imageUrl="card.imageUrl" :backgroundColor="card.backgroundColor"
              :backgroundHeight="card.backgroundHeight" @card-clicked="navigateToProject" />
          </div>
        </div>
      </section>
      <div class="pt-10">
        <h2 class="pequeninas font-medium container-texto py-4">Tecnologias com que já trabalhei...</h2>
        <Carrousel />
      </div>
    </div>
    <section id="about">
      <About />
    </section>
  </div>

</template>

<script>
import SocialLinks from '../components/SocialLinks.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../projects';
import Carrousel from '../components/Carrousel.vue';
import About from '../views/About.vue';

export default {
  components: {
    SocialLinks,
    ProjectCard,
    About,
    Carrousel,
  },
  data() {
    return {
      projects,
      isMounted: false
    }
  },
  methods: {
    navigateToProject(id) {
      this.$router.push({ name: 'ProjectDetails', params: { id: id } });
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
.festa {
  transition: transform 1s ease-out;
  /* Transição suave para a animação */
  transform: translateY(100%);
  /* Inicia fora da tela */
}

.festa.slide-in {
  transform: translateY(0);
  /* Animação para dentro da tela */
}

.festa-top {
  transition: transform 1s ease-out;
  /* Transição suave para a animação */
  transform: translateY(-100%);
  /* Inicia fora da tela */
}

.festa-left.slide-in {
  transform: translateY(0);
  /* Animação para dentro da tela */
}
</style>
