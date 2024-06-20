<template>
    <div class="container-texto py-6 md:w-2/4 flex items-start">
        <img :src="experience.image" alt="Foto de perfil"
            class="rounded-full w-10 h-10 object-center object-scale-down drop-shadow-xl border-2 bg-white mr-4 pointer-events-none">
        <div>
            <p class="text-sm font-bold py-1">{{ experience.title }}</p>
            <p class="mt-2 text-sm text-pretty pequeninas">{{ experience.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceItem',
    props: {
        experience: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped></style>
