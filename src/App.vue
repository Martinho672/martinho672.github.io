<template>
  <div >
    <HomePage/>
    <AboutPage/>
  </div>
  <Footer class=" bottom"/>
</template>

<script>
import HomePage from './views/Home.vue' 
import Footer from '../src/components/Footer.vue';
import AboutPage from './views/About.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    Footer,
    AboutPage
  }
};
</script>