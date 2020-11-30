<template>
  <div class="container">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: ' %s - One Schedule To Rule Them All',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A daily scheduler to keep track of my appointments'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: url("~@/assets/zen.jpg");
  background-size: cover;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  background-color: white;
  opacity: 0.6;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
