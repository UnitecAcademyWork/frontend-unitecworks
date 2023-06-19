<template>
  <NavbarInc/>
    <RegCandidato v-if="currentRouteName=='regCandidato'"/>
    <RegEmpresa v-if="currentRouteName=='regEmpresa'"/>
    <RegEmpresa v-if="currentRouteName=='regIensino'"/>
  <footer-inc></footer-inc>
</template>
    
<script>
  import NavbarInc from '@/components/includes/NavbarInc.vue'
  import FooterInc from '@/components/includes/FooterInc.vue'
  import RegCandidato from './RegCandidato.vue'
  import RegEmpresa from './RegEmpresa.vue'
  import axios from 'axios'
  // import router from '@/router'
    export default {
      name: 'RegistoView',
      components:{
        NavbarInc,
        FooterInc,
        RegCandidato,
        RegEmpresa,
      },
      data: function() { 
        return {
          email: "",
          password: "",
        }
      },
      mounted: function() {
        // var vm = thi
      },
      methods:{
         salvarCandidato() {
          axios.get(`https://backend.unitec.co.mz/sanctum/csrf-cookie`).then((response)=>{
            console.log('crsf-cookie',response);
          })
          let uri = `https://backend.unitec.co.mz/candidato/reg`
          axios.post(uri, {
            'email':this.email,
            'password':this.password,
          })
          .then((response)=>{
              console.log('login',response);
          })
          .catch(error=>console.log(error))
        },
      },
      computed: {
        currentRouteName() {
            return this.$route.name;
        }
      }
    }
</script>
  
  <style scoped>
    form{
      padding-top: 120px;
      padding-bottom: 50px;
    }
  </style>
  