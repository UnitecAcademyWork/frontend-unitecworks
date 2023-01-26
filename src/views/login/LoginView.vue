<template>
<NavbarInc/>
  <form action="">
    <div class="conteudos p-5">
      <div class="text-center p-5">
          <h1>Bem vindo</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4"> 
          <h6 class="section-secondary-title">Email:</h6>        
              <div class="form-group">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Endereço de email">
              </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4"> 
          <div class="form-group">
            <h6>Senha :</h6>
            <input type="password" class="form-control" id=""  placeholder="Insira a sua senha">
            <div class="row col-md-12">
              <div class="checkbox mr-auto py-2 text-muted">
                <label><input type="checkbox">Remember me</label>
              </div>
              <div class="forgot p-2">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div class="button">
              <button type="submit" class="btn btn-primary text-center w-100">Entrar</button>
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
export default {
  name: 'LoginView',
  components:{
    NavbarInc,
    FooterInc,
  }
}
</script>

<style scoped>

</style>
