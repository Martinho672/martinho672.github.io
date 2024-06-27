<template>
    <div class="py-4 principal" id="guestbook">
        <div ref="abracadabrah" class="opacity-0 transition-opacity duration-1000">
            <h2 class="text-2xl font-medium container-texto py-2">Assine o livro de visitas 😉​</h2>
            <div class="mt-4">
                <button @click="signInWithGitHub"
                    class="bg-[#3C3B3C] drop-shadow-x1 p-2 border-black rounded-md flex justify-between items-center">
                    <img src="../assets/github.svg" alt="" class="h-5 w-5" />
                    <p class="ml-2 text-sm font-light ">Assine com Github</p>
                </button>
            </div>
            <div v-if="user" class="mt-6 flex items-center">
                <p class="pequeninas font-mono text-sm">{{ user.displayName }}:</p>
                <p class="ml-2 text-sm">{{ userMessage }}</p>
            </div>

            <!-- Formulário para enviar mensagem -->
            <form @submit.prevent="sendMessage" v-if="user" class="mt-4">
                <textarea v-model="message" rows="3"
                    class="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
                    placeholder="Digite sua mensagem..." required></textarea>
                <button type="submit"
                    class="mt-2 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Enviar Mensagem
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { auth, provider, signInWithPopup, db } from '../../firebase';

export default {
    name: 'Guestbook',
    data() {
        return {
            user: null,
            message: '',
            userMessage: '',
        };
    },
    methods: {
        signInWithGitHub() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    this.user = result.user;
                })
                .catch((error) => {
                    console.error("Erro ao fazer login com GitHub: ", error);
                });
        },
        sendMessage() {
            if (this.message.trim() === '') return;

            db.collection('guestbookMessages').add({
                userId: this.user.uid,
                userName: this.user.displayName,
                message: this.message,
                timestamp: new Date(),
            })
                .then(() => {
                    this.userMessage = this.message; // Atualiza a mensagem na tela
                    this.message = ''; // Limpa o campo de mensagem após enviar
                })
                .catch((error) => {
                    console.error('Erro ao enviar mensagem:', error);
                });
        },
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
    },
};
</script>

<style scoped>
.container-texto {
    text-align: start;
}
</style>
