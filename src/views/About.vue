<template>
    <div class="py-4 principal" id="#about">
        <div ref="abracadabrah" class="opacity-0 transition-opacity duration-1000">
            <h2 class="text-2xl font-bold container-texto py-2">Experiências</h2>
            <div class="container-texto py-6 md:w-3/4 flex items-start">
                <img src="../assets/images/perfil.webp" alt="Foto de perfil"
                    class="rounded-full w-10 h-10 object-cover drop-shadow-xl border-solid border-black border-2 mr-4 ">
                <div>
                    <p class="text-sm font-bold py-1">Cortaí, 2020</p>
                    <p class="mt-2 text-sm text-pretty pequeninas">Prefiro contar uma história real, vou contar a minha, em
                        busca de criar novos projetos
                        durante a pandemia desenvolvi um aplicativo para o agendamento de horários em
                        barbearias e salões de beleza</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.principal {
    background-color: #2C2C2C;
    color: white;
}

.pequeninas {
    color: #A3A3A3;
    font-size: 13px;
}
</style>
  

<script>

export default {
    name: 'AboutPage',
    mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.$refs.abracadabrah);
  }
};
</script>

<style scoped>
.pequeninas {
    color: #A3A3A3;

}

.container-texto {
    text-align: start;
}
</style>