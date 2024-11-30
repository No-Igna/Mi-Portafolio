<template>
  <div class="preview-container">
    <h3>Vista previa de la página externa</h3>
    <iframe 
      src="https://examen-quien-es-ese-pokemon.vercel.app"
      frameborder="0" 
      class="preview-frame"
      width="100%" 
      height="500px">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {};
  }
};
</script>

<style scoped>
.preview-container {
  text-align: center;
  padding: 1rem;
}

.preview-frame {
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
