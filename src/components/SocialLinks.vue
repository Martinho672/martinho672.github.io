<template>
  <div class="items-center justify-between flex gap-4 ">
    <a href="https://github.com/Martinho672" target="_blank" class="btn btn-background-circle">
      <img src="../assets/github.svg" alt="GitHub" class="icon  h-5">
    </a>
    <a href="mailto:martinho672@gmail.com" target="_blank" class="btn btn-background-circle">
      <img src="../assets/mail.svg" alt="Email" class="icon h-4">
    </a>
    <a href="https://www.linkedin.com/in/fernando-martinho-nascimento-85b76a184/" target="_blank"
      class="btn btn-background-circle ">
      <img src="../assets/linkedin.svg" alt="LinkedIn" class="icon h-4">
    </a>
    <a href="../../assets/Fernando-Martinho-Nascimento.pdf" target="_blank" class="btn btn-background-circle">
      <svg class="icon h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 14h-8v-2h8v2zm0-4h-8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        <text x="50%" y="75%" dominant-baseline="middle" font-size="5" fill="currentColor"></text>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    bgColor: {
      type: String,
      default: '#2C2C2C'
    },
    mounted() {
      this.setBgColors();
    },
    methods: {
      setBgColors() {
        document.documentElement.style.setProperty('--bg-color', this.bgColor);
      }
    }
  }
};
</script>

<style scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  filter: invert(1);
  transition: 0.3s ease-in-out;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--background-color);
  color: #222;
  border: none;
  outline: none;
  position: relative;
  cursor: pointer;

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
  transition: transform 500ms ease-in-out;

  transform: scale(0);
}

.btn.btn-background-circle:hover::before,
.btn.btn-background-circle:focus::before {
  transform: scale(1.5);
}

.btn.btn-background-circle {
  z-index: 1;
  overflow: hidden;
  background-color: var(--accent-color);
  transition: color 500ms ease-in-out;
}

.btn.btn-background-circle:hover,
.btn.btn-background-circle:focus {
  color: white;
}

.btn.btn-background-circle:hover .icon {
  filter: invert(0);
  transition: 0.5s ease-in-out;
}
</style>