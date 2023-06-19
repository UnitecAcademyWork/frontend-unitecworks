<template>
  <NavbarInc/>
  <SidebarInc/>
  <footer-inc></footer-inc>
</template>
<script>
import NavbarInc from '@/components/includes/NavbarInc.vue'
import FooterInc from '@/components/includes/FooterInc.vue'
import SidebarInc from '@/components/includes/SidebarInc.vue'
import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true
export default {
  name: 'ProfileCandidatoView',
  components: {
    NavbarInc,
    FooterInc,
    SidebarInc,
  },
  data: function() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async getToken() {
      await axios.get(`https://backend.unitec.co.mz/sanctum/csrf-cookie`).then((response)=>{
        console.log('crsf-cookie',response);
      })
    },
    async login() {
      await this.getToken();
      let uri = `https://backend.unitec.co.mz/loggin`
      await axios.post(uri, {
        'email':this.email,
        'password':this.password,
      })
      .then((response)=>{
          console.log('login',response);
          router.push('/')
      })
      .catch(error=>console.log(error))
    },
  }
}
</script>

<style scoped>
    form{
      padding-top: 120px;
      padding-bottom: 120px;
    }
</style>
