<template>
    <transition name="expand">
        <div :style="{ backgroundColor: project.backgroundColor }">
            <div>
                <router-link to="/" class="text-black">
                    <a class="btn btn-background-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>

                    </a>
                </router-link>
            </div>
            <div class="min-h-screen pb-0 p-10 grid md:grid-cols-2 justify-center items-center">
                <div class=" flex flex-col justify-center text-center md:text-start items-center md:items-start ">
                    <a :href="project.link" target="_blank">
                        <img v-if="project.imageUrl" :src="project.imageUrl" alt="Project Image"
                            class="mt-4 justify-between imagem h-2/5  m-3">
                    </a>

                    <span v-if="!project.imageUrl"
                        class="font-light text-5xl text-white text-center justify-between mb-10">{{
                            project.title }}</span>
                    <div class="ml-4">
                        <h2 class="text-md font-lighter ">Tecnologias utilizadas:</h2>
                        <div class="flex flex-wrap gap-1">
                            <span v-for="(stack, index) in project.stacks" :key="index"
                                class="stack-name text-white px-2 py-1 rounded">{{ stack }}</span>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen-2 pt-28 p-20 align-end justify-between text-justify">
                    <p class=" break-words">{{ project.description }}</p>
                </div>
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
.stack-name {
    color: #ffffff;
    font-size: 13px;
    font-weight: 300;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--background-color);
    color: #222;
    border: none;
    outline: none;
    position: relative;
    cursor: pointer;
    margin: 10px;
    --background-color: #FFFFFF;
    --border-size: 2px;
    --accent-color: var(--bgColor);
}

.btn.btn-background-circle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: var(--background-color);
    filter: invert(0);
    border-radius: 50%;
    transition: transform 300ms ease-in-out;
    transform: scale(0);
}

.btn.btn-background-circle:hover::before,
.btn.btn-background-circle:focus::before {
    transform: scale(0.8);
}

.btn.btn-background-circle {
    z-index: 1;
    overflow: hidden;
    background-color: var(--accent-color);
    transition: color 300ms ease-in-out;
}

.btn.btn-background-circle:hover,
.btn.btn-background-circle:focus {
    color: white;
}

.btn.btn-background-circle:hover .icon {
    filter: invert(1);
    transition: 0.3s ease-in-out;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    filter: invert(1);
    transition: 0.3s ease-in-out;
}
</style>
