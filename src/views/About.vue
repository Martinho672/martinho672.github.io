<template>
    <div class="py-4 principal" id="#about">
        <div ref="abracadabrah" class="opacity-0 transition-opacity duration-1000">
            <h2 class="text-2xl font-bold container-texto py-2">Experiências</h2>

            <div>
                <ExperienceItem v-for="(experience, index) in experiences" :key="index" :experience="experience" />
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
import { experiences } from '../experiences.js';
import ExperienceItem from '../components/ExperienceItem.vue';

export default {
    name: 'AboutPage',
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
.pequeninas {
    color: #A3A3A3;

}

.container-texto {
    text-align: start;
}
</style>