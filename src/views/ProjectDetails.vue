<template>
    <transition name="expand">
        <div :style="{ backgroundColor: project.backgroundColor }"
            class="min-h-screen p-12 grid md:grid-cols-2 justify-center items-center ">
            <div class="flex flex-col justify-center items-center md:items-start ">
                <img :src="project.imageUrl" alt="Project Image" class="mt-4 justify-between imagem">
                <div class="ml-4">
                    <h2 class="text-md font-light ">Tecnologias utilizadas:</h2>
                    <div class="flex space-x-4 mt-4">
                        <SocialLinks />
                    </div>
                </div>
            </div>
            <div class="min-h-screen-2 pt-36 p-20 align-end justify-evenly">
                <p class="mt-4 break-words">{{ project.description }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
import SocialLinks from '../components/SocialLinks.vue';
import { projects } from '../projects';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        project() {
            return projects[parseInt(this.id)];
        }
    },
    components: {
        SocialLinks
    }
};
</script>

<style scoped>
.imagem {
    width: 350px;
    height: 350px;
    pointer-events: none;
}
</style>
