<template>
    <div class="relative overflow-hidden mx-auto">
        <div class="slider">
            <div class="fade-gradient left"></div>
            <div class="fade-gradient right"></div>
            <div class="slide-track flex animate-scroll" :style="{ width: trackWidth }">
                <div class="slide h-100 w-150 flex items-center justify-center" v-for="(tech, index) in technologies"
                    :key="index">
                    <div class="flex items-center fill-white text-white">
                        <div class="icon-container mr-2 ">
                            <img :src="getIconSVG(tech.name)" alt="Icon" class="h-8 w-8 fill-white" />
                        </div>
                        <p class="text-center pequeninas">{{ tech.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebaseIcon from '../assets/icons/firebase.svg';
import flutterIcon from '../assets/icons/flutter-white.svg';
import javaIcon from '../assets/icons/java-white.svg';
import kotlinIcon from '../assets/icons/kotlin.svg';
import mysqlIcon from '../assets/icons/mysql-white.svg';
import nodejsIcon from '../assets/icons/nodejs-white.svg';
import vuejsIcon from '../assets/icons/vue-js-white.svg';
import javascriptIcon from '../assets/icons/javascript-white.svg';
import mongoDbIcon from '../assets/icons/mongodb.svg';
import reactIcon from '../assets/icons/react.png';
import typescriptIcon from '../assets/icons/typescript-white.svg';
import expressJsIcon from '../assets/icons/express-js.svg';
import angularIcon from '../assets/icons/angular-white.svg';
import dartIcon from '../assets/icons/dart-white.svg';
import restApiIcon from '../assets/icons/restapi.png';
import tailwindIcon from '../assets/icons/tailwind-css.svg';

export default {
    data() {
        return {
            technologies: [
                { name: 'Vue.js' },
                { name: 'React' },
                { name: 'Angular' },
                { name: 'Tailwind CSS' },
                { name: 'Node.js' },
                { name: 'Express.js' },
                { name: 'MongoDB' },
                { name: 'MySQL' },
                { name: 'JavaScript' },
                { name: 'REST API' },
                { name: 'TypeScript' },
                { name: 'Flutter' },
                { name: 'Dart' },
                { name: 'Java' },
                { name: 'Kotlin' },
                { name: 'Firebase' }
            ],
        };
    },
    computed: {
        trackWidth() {
            return `calc(150px * ${this.technologies.length})`;
        }
    },
    methods: {
        getIconSVG(techName) {
            switch (techName.toLowerCase()) {
                case 'vue.js':
                    return vuejsIcon;
                case 'node.js':
                    return nodejsIcon;
                case 'mysql':
                    return mysqlIcon;
                case 'flutter':
                    return flutterIcon;
                case 'java':
                    return javaIcon;
                case 'kotlin':
                    return kotlinIcon;
                case 'firebase':
                    return firebaseIcon;
                case 'javascript':
                    return javascriptIcon;
                case 'mongodb':
                    return mongoDbIcon;
                case 'typescript':
                    return typescriptIcon;
                case 'react':
                    return reactIcon;
                case 'express.js':
                    return expressJsIcon;
                case 'angular':
                    return angularIcon;
                case 'dart':
                    return dartIcon;
                case 'rest api':
                    return restApiIcon;
                case 'tailwind css':
                    return tailwindIcon;
                case 'angular':
                    return angularIcon;
                default:
                    return '';
            }
        }
    }
};
</script>


<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-150px * 7));
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.slide {
    height: 100px;
    width: 150px;
}

.fade-gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 8rem;
    z-index: 3;
}

.left {
    left: 0;
    transform: rotateY(180deg);
    background: linear-gradient(to right, rgba(44, 44, 44, 0), #2C2C2C);
}

.right {
    right: 0;
    transform: rotateY(180deg);
    background: linear-gradient(to left, rgba(44, 44, 44, 0), #2C2C2C);
}

.slider {
    height: auto;
    pointer-events: none;
    position: relative;
}
</style>
