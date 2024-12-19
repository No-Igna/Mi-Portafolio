<template>
  <footer class="footer">
    <div class="footer__social-links">
      <a href="https://github.com/No-Igna" target="_blank" class="footer__link">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/jose-ignacio-perez-b48354198/" target="_blank" class="footer__link">
        <i class="fab fa-linkedin"></i>
      </a>
      <button @click="toggleEmail" class="footer__link footer__email-button">
        <i class="fas fa-envelope"></i>
      </button>
    </div>
    <div v-if="showEmail" class="footer__email">
      <p>Contacto: <a href="mailto:j.Igna.Perez@gmail.com" class="footer__email-link">j.Igna.Perez@gmail.com</a></p>
    </div>

    <p class="footer__text">© 2024 José Ignacio Pérez</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      showEmail: false,
    };
  },
  methods: {
    toggleEmail() {
      this.showEmail = !this.showEmail;
    }
  }
};
</script>

<style scoped>
</style>
