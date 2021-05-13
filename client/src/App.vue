<template>
  <div id="app">
    <Header/>
    <router-view :key="this.$route.fullPath" />
  </div>
</template>

<script>
import Header from './views/Header'
export default {
  name: 'App',
  components: {Header},
  data () {
    return {
      path: this.$route.fullPath,
      forceRerender: 0
    }
  }
}
</script>

<style>
/*$bell-yellow-primary: #FFE600;*/
/*$bell-blue-secondary: #6891B5;*/
/*$bell-accent-primary: #998888;*/
/*$bell-grey-accent:    #BFB8AD;*/
/*$bell-black-accent:   #04070D;*/
/*$bell-white-accent:   #FDFDF9;*/
/*$bell-red-accent:     #C5050C;*/
/*$bell-dark-grey:      #8D8D8D;*/
  @font-face {
    font-family: Lemon;
    src: url("assets/fonts/LemonMilk.otf") format('opentype');
  }
  @font-face {
    font-family: Quicksand;
    src: url("assets/fonts/Quicksand_Book.otf") format('opentype');
  }
  @font-face {
    font-family: Bebas Kai;
    src: url("assets/fonts/BebasKai.otf") format('opentype');
  }
  @font-face {
    font-family: Satisfy;
    src: url("assets/fonts/Satisfy-Regular.ttf") format('truetype');
  }
  @font-face {
    font-family: Fira Sans;
    src: url("assets/fonts/FiraSansExtraCondensed-ExtraBold.ttf") format('truetype');
  }
  @font-face {
    font-family: Open Sans;
    src: url("assets/fonts/OpenSans-Regular.ttf") format('truetype');
  }
  @font-face {
    font-family: Rubik Mono One;
    src: url("assets/fonts/RubikMonoOne-Regular.ttf") format('truetype');
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: 0;
  }
  h1, h1 > a,
  h2, h2 > a,
  h3, h3 > a,
  h4, h4 > a {
    font-family: Fira Sans, 'Arial', serif;
    font-weight: 700;
    color: #6891B5;
    text-decoration: none;
  }
  h1, h1 > a,
  h2, h2 > a,
  h3, h3 > a,
  h4, h4 > a {
    font-family: Fira Sans, 'Arial', serif;
    font-weight: 700;
    color: #6891B5;
    text-decoration: none;
    transition: color .3s ease-in-out;
  }
  h1, h1 > a:hover,
  h2, h2 > a:hover,
  h3, h3 > a:hover,
  h4, h4 > a:hover {
    font-family: Fira Sans, 'Arial', serif;
    font-weight: 700;
    color: #BFB8AD;
    text-decoration: none;
  }
  a, li > a, button, label {
    font-family: "Open Sans", Fira Sans, sans-serif;
  }
  p, i, li, span, td, tr, table, input, textarea, div {
    font-family: "Open Sans", Quicksand, 'Georgia', serif;
  }
  .container {
    max-width: 1286px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
