<template>
  <div class="container errorPage">
    <h2 class="errorPage__title">404 - Página no encontrada</h2>
    <p class="errorPage__message">
      Lo sentimos, no hemos podido encontrar la página que estás buscando. ¡Vuelve al inicio y explora otras secciones!
    </p>
    <RouterLink to="/" class="errorPage__button">
      Regresar al inicio
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'Error404'
};
</script>

<style lang="scss" scoped>
</style>