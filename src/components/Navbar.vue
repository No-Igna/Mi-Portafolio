<template>
  <nav class="navbar navbar-expand-lg bg-transparent mt-5" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand mx-5"><img src="../assets/img/PlaceHolder.png" class="navbar-brand--img" alt="placeholder"></RouterLink>
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

<style lang="scss" scoped>
$title-color: #ececec;
$subtitle-color: #FFDE88;
$text-color: #a6d6ec;

.navbar-brand {
  color: $subtitle-color;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
    color: lighten($subtitle-color, 10%);
  }

  .navbar-brand--img {
    width: 100%;
    max-width: 150px;
    height: auto;
    transition: transform 0.5s ease;

    &:hover {
      animation: rotateImage 2s linear infinite;
    }
  }
}
@keyframes rotateImage {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50%{
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(-90deg)
  }
  100%{
    transform: rotate(0deg);
  }
}

.navbar-nav .nav-link {
  font-size: 1.2rem;
  color: $text-color; 
  font-weight: 500;
  padding: 0.5rem 1rem; 
  position: relative;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: lighten($text-color, 20%);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px; 
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: $subtitle-color;
    transition: width 0.3s ease, left 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%; 
  }
}

.navbar-toggler {
  border: none; 
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 5px;

  .navbar-toggler-icon {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"%3E%3Cpath stroke="rgba%2833, 37, 41, 1%29" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E');
  }
}

</style>