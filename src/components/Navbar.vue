<template>
  <nav class="navbar navbar-expand-lg bg-transparent mt-5" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand mx-5"><img src="/img/PlaceHolder.png" class="navbar-brand--img" alt="placeholder"></RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
        <div class="navbar-nav">
          <RouterLink to="/formacion" class="nav-link">Formacion</RouterLink>
          <RouterLink to="/proyectos" class="nav-link">Proyectos</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>