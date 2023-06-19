<template>
<NavbarInc/>
  <form action="">
    <div class="conteudos">
        <div class="text-center p-5">
            <h1>Bem vindo</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4"> 
              <h6 class="section-secondary-title">Email:</h6>        
              <div class="form-group">
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Endereço de email">
              </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4"> 
            <div class="form-group">
              <h6>Senha :</h6>
              <input type="password" class="form-control" id="password"  v-model="password" placeholder="Insira a sua senha">
              <div class="row col-md-12">
                <div class="checkbox mr-auto py-2 text-muted">
                  <label><input type="checkbox">Remember me</label>
                </div>
                <div class="forgot p-2">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div class="button">
                <button type="button" @click="login()" class="btn btn-primary text-center w-100">Entrar</button>
              </div>
          </div>
        </div>
        </div>
    </div>
  </form>
<footer-inc></footer-inc>
</template>

<script>
import NavbarInc from '@/components/includes/NavbarInc.vue'
import FooterInc from '@/components/includes/FooterInc.vue'
import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true
export default {
  name: 'LoginView',
  components:{
    NavbarInc,
    FooterInc,
  },
  data: function() {
    return {
      email: "",
      password: "",
    }
  },
  mounted: function() {
    // var vm = this
  },
  methods:{
    async getToken() {
      await axios.get(`http://localhost:8000/sanctum/csrf-cookie`).then((response)=>{
        console.log('crsf-cookie',response);
      })
    },
    async login() {
        await this.getToken();
        let uri = `http://localhost:8000/loggin`
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
    form {
      padding-top: 120px;
      padding-bottom: 120px;
    }
</style>
