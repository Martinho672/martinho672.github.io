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

            <!-- Formulário para enviar mensagem -->
            <form @submit.prevent="sendMessage" v-if="user && !messageSent" class="mt-4">
                <textarea v-model="message" rows="3"
                    class="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
                    placeholder="Digite sua mensagem..." required></textarea>
                <button type="submit"
                    class="mt-2 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-yellow-600 ">
                    Enviar Mensagem
                </button>
            </form>

            <!-- Exibir mensagens -->
            <div class="mt-6" v-if="messages.length > 0">
                <h3 class="text-xl font-semibold">Mensagens:</h3>
                <div v-for="msg in messages" :key="msg.id" class="mt-6 flex items-center">
                    <p class="pequeninas font-mono text-sm">{{ msg.userName }}:</p>
                    <p class="ml-2 text-sm">{{ msg.message }}</p>
                </div>
            </div>

            <div class="mt-6" v-if="messages.length <= 0">
                <h6 class="md:text-xl pequeninas font-light ">Parece que ninguém deixou uma mensagem ainda 😓, que tal
                    ser o
                    primeiro
                    ?
                </h6>
            </div>

        </div>
    </div>
</template>

<script>
import { auth, provider, signInWithPopup, db, collection, setDoc, doc, getDocs, orderBy, query } from '../../firebase';

export default {
    name: 'Guestbook',
    data() {
        return {
            user: null,
            message: '',
            userMessage: '',
            messages: [], // Array para armazenar as mensagens
            messageSent: false, // Controla a visibilidade do formulário
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
        async sendMessage() {
            if (this.message.trim() === '') return;

            try {
                const userDocRef = doc(db, 'guestbookMessages', this.user.uid);
                await setDoc(userDocRef, {
                    userId: this.user.uid,
                    userName: this.user.login,
                    message: this.message,
                    timestamp: new Date(),
                }, { merge: true });
                this.userMessage = this.message; // Atualiza a mensagem na tela
                this.message = ''; // Limpa o campo de mensagem após enviar
                this.messageSent = true; // Oculta o formulário após o envio
                this.fetchMessages(); // Recarrega as mensagens após enviar
            } catch (error) {
                console.error('Erro ao enviar mensagem:', error);
            }
        },
        async fetchMessages() {
            try {
                const q = query(collection(db, 'guestbookMessages'), orderBy('timestamp', 'desc'));
                const querySnapshot = await getDocs(q);
                this.messages = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
            } catch (error) {
                console.error('Erro ao carregar mensagens:', error);
            }
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
        this.fetchMessages(); // Carrega as mensagens quando o componente é montado
    },
};
</script>

<style scoped>
.container-texto {
    text-align: start;
}
</style>
