<template>
    <router-link :to="{ name: 'ProjectDetails', params: { id: id } }">
        <div @click="growCard" :style="{ backgroundColor: backgroundColor }"
            :class="['card', { 'is-growing': isGrowing }]" class="p-4 flex items-center 
            justify-center h-80 w-50 transition-all 
            duration-500 ease-in-out cursor-pointer">
            <img v-if="imageUrl" :src="imageUrl" alt="Card Image" :class="imageClass" @error="handleImageError">
            <span v-if="!imageUrl" class="font-bold text-2xl text-white">{{ title }}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            required: true
        },
        backgroundHeight: {
            type: String,
            default: 'h-12'
        }
    },
    data() {
        return {
            isGrowing: false,
            imageLoadError: false
        };
    },
    computed: {
        imageClass() {
            return this.backgroundHeight;
        }
    },
    methods: {
        growCard() {
            this.isGrowing = true;
            setTimeout(() => {
                this.isGrowing = false;
            }, 1000);
        },
        handleImageError() {
            this.imageLoadError = true;
        }
    }
};
</script>

<style scoped>
.card {
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
}

.card:hover {
    transform: scale(1.05);
}

.card.is-growing {
    transform: scale(10.5);
}
</style>
