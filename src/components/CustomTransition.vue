<!-- CustomTransition.vue -->
<template>
    <transition name="custom-fade">
        <slot></slot>
    </transition>
</template>

<style scoped>
.custom-fade-enter-active,
.custom-fade-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.custom-fade-enter,
.custom-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
