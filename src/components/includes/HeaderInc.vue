<template>
   <header class="header" id="header-top">
      <div class="container">
         <NavbarInc/>
         <div class="header-content">
            <h3 class="text-right ml-auto smalltext">
               Fundada por Jovens Moçambicanos com expertise em negócios, buscamos o melhor resultado para o nosso cliente com o que há de mais inovador e eficiente no mercado.
            </h3>
         </div>
      </div>
   </header>
</template>

<script>
   import NavbarInc from '@/components/includes/NavbarInc.vue'
   export default {
      name: 'HeaderInc',
      components:{
         NavbarInc,
      }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  