<template>
  <div class="container error-page">
    <h2 class="error-page__title">404 - Página no encontrada</h2>
    <p class="error-page__message">
      Lo sentimos, no hemos podido encontrar la página que estás buscando. ¡Vuelve al inicio y explora otras secciones!
    </p>
    <RouterLink to="/" class="error-page__button">
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
$title-color: #ececec;
$subtitle-color: #FFDE88;
$text-color: #a6d6ec;
$error-bg-color: rgba(255, 0, 0, 0.1); /* Fondo de la página de error */
$error-text-color: #ff5733; /* Color del texto del error */
$button-color: #FFDE88; /* Color del botón */
$button-hover-color: #e4c647; /* Color del botón al pasar el cursor */

.error-page {
  text-align: center;
  padding: 5rem 0;
  
  &__title {
    color: $error-text-color;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: #333 5px 5px 7px;
    margin-bottom: 1.5rem;
  }

  &__message {
    color: $text-color;
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    background: linear-gradient(to right, #a6d6ec, #ececec);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.8;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: $button-color;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: $button-hover-color;
      transform: scale(1.05);
    }
  }
}
</style>s