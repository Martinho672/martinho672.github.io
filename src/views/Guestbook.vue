<template>
    <div class="py-4 principal" id="#guestbook">
        <div ref="abracadabrah" class="opacity-0 transition-opacity duration-1000">
            <h2 class="text-2xl font-bold container-texto py-2">Assine o livro de visitas 😉​</h2>
            <div class="mt-4">
                <button class="bg-[#3C3B3C] drop-shadow-x1 p-2 border-black rounded-md flex justify-between items-center">
                    <img src="../assets/github.svg" alt="" class="h-5 w-5" />
                    <p class="ml-2 text-sm font-light ">Assine com Github</p>
                </button>
            </div>
            <!--todo - criar um componente dinamico para as assinaturas-->
            <div class="mt-6 flex items-center">
                <p class="pequeninas text-sm">Fulano: </p>
                <p class="ml-2 text-sm"> Que legal, achei inspirador sua ideia, continue o bom trabalho !</p>
            </div>
            <div class="mt-6 flex items-center">
                <p class="pequeninas text-sm">Fulano: </p>
                <p class="ml-2 text-sm"> Que legal, achei inspirador sua ideia, continue o bom trabalho !</p>
            </div>
            <div class="mt-6 flex items-center">
                <p class="pequeninas text-sm">Fulano: </p>
                <p class="ml-2 text-sm"> Que legal, achei inspirador sua ideia, continue o bom trabalho !</p>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
  

<script>
import { experiences } from '../experiences.js';
import ExperienceItem from '../components/ExperienceItem.vue';

export default {
    name: 'Guestbook',
    components: {
        ExperienceItem
    },
    data() {
        return {
            experiences
        };
    },
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
.container-texto {
    text-align: start;
}
</style>