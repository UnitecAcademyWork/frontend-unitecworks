<template>
    <!-- <FooterSecInc/> -->
    <footer-seg-inc></footer-seg-inc>
    <section class="footer2 py-3 bg-black">
        <div class="container">
            <p class="small mb-0 text-dark text-center">
                <a href="https://unitec.ac.mz" class="text-coruni py-2"> &copy; Universal Connection Works, Lda. 2022</a>
            </p>
        </div>
    </section>
  </template>
  
  <script>
  import FooterSegInc from './FooterSegInc.vue'

  export default {
    name: 'FooterInc',
    components: {
        FooterSegInc,
    },

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  