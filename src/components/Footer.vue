<template>
  <footer class="footer">
    <div class="footer__social-links">
      <a href="https://github.com/No-Igna" target="_blank" class="footer__link">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/josé-ignacio-pérez-b48354198/" target="_blank" class="footer__link">
        <i class="fab fa-linkedin"></i>
      </a>
      <button @click="toggleEmail" class="footer__link footer__email-button">
        <i class="fas fa-envelope"></i>
      </button>
    </div>
    <div v-if="showEmail" class="footer__email">
      <p>Contacto: <a href="mailto:tu-correo@dominio.com" class="footer__email-link">j.Igna.Perez@gmail.com</a></p>
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
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: relative;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.footer__social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.footer__link {
  font-size: 2rem;
  color: #ccc;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer__link:hover {
  color: #ffde88;
  transform: scale(1.1);
}

.footer__link:nth-child(1):hover {
  color: #DD4B25;
}

.footer__link:nth-child(2):hover {
  color: #0077b5;
}


.footer__email-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #ccc;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer__email-button:hover {
  color: #ffde88;
  transform: scale(1.1);
}


.footer__email {
  margin-top: 10px;
  color: #ccc;
  font-size: 1.1rem;
}

.footer__email-link {
  color: #ffde88;
  text-decoration: none;
}

.footer__email-link:hover {
  text-decoration: underline;
}

.footer__text {
  font-size: 1rem;
  color: #ccc;
  margin-top: 10px;
  font-weight: 300;
}
</style>
