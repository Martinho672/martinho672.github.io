<template>
  <div class="items-center justify-between flex gap-4 ">
    <a href="#" class="btn btn-background-circle">
      <img src="../assets/github.svg" alt="GitHub" class="icon  h-5">
    </a>
    <a href="#" class="btn btn-background-circle">
      <img src="../assets/mail.svg" alt="Email" class="icon h-4">
    </a>
    <a href="#" class="btn btn-background-circle ">
      <img src="../assets/linkedin.svg" alt="LinkedIn" class="icon h-4">
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
  z-index: -1;
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


.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--bgColor);
}

.social-link:hover .icon {
  filter: invert(0);
  transition: 0.5s ease-in-out;
}

.social-link:hover {
  background-color: #ffffff;
}

.social-link:hover .icon path {
  fill: #ffffff;
}
</style>
  