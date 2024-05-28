<template>
  <Navbar />
  <div class="principal min-h-screen text-white flex flex-col">
    <section class=" py-1 flex-grow">
      <div class="flex flex-col md:flex-row mb-12">
        <div class="md:flex-1 md:mr-8">
          <div class="container-texto  md:w-3/4 ">
            <h1 class="text-4xl font-bold">Fernando Nascimento</h1>
            <p class="text-sm font-bold py-1 ">Desenvolvedor Front-End.</p>
            <p class="mt-2 text-sm text-pretty pequeninas">Apaixonado por tecnologia, buscando sempre ser mais criativo,
              desenvolvendo aplicações complexas de forma simples</p>
          </div>
          <div class="flex space-x-4 mt-4">
           <SocialLinks  />
          </div>
        </div>
        <div class="flex-2 mt-6 md:mt-0 md:flex-shrink-0">
          <img src="../assets/images/perfil.webp" alt="Foto de perfil"
            class="rounded-full w-44 h-44 object-cover drop-shadow-xl border-solid border-black border-2 pointer-events-none">
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-bold container-texto py-2">Projetos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-4">
          <div class="bg-[#F17228] p-4 flex items-center justify-center h-80 w-50 transition-transform duration-300 ease-in-out transform hover:scale-105 ">
            <img src="../assets/images/projects/cortai-logo.png" alt="Cortaí" class="h-32">
          </div>
          <div class="bg-[#1848A0] p-4 flex items-center justify-center h-80 w-50 transition-transform duration-300 ease-in-out transform hover:scale-105">Autohouse</div>
          <div class="bg-[#1C98ED] p-4 flex items-center justify-center h-80 w-50 transition-transform duration-300 ease-in-out transform hover:scale-105 "><img src="../assets/images/projects/+ifmg.png" alt="+IFMG" class="h-8"></div>
          <div class="bg-[#242018] p-4 flex items-center justify-center h-80 w-50 transition-transform duration-300 ease-in-out transform hover:scale-105"><img src="../assets/images/projects/cdm-logo.png" alt="Centro de memória" class="h-20"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SocialLinks from '../components/SocialLinks.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    SocialLinks
  }
};
</script>

<style scoped>


.container-texto {
  text-align: start;
}

.pequeninas {
  color: #A3A3A3;

}


</style>
