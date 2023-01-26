<template>
    <form action="">
      <div class="conteudos p-5">
        <div class="text-center p-5">
            <h1>Registo</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4"> 
              <div class="form-group ml-4">
                  <h6 class="title-small">Email :</h6>
                  <input type="password" class="form-control" id=""  placeholder="Insira o seu o Endereco de e-mail">
              </div>
          </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-4"> 
        <div class="form-group ml-4">
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
              <button type="submit" class="btn btn-primary text-right">Entrar</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </form>
    </template>
    
    <script>
    export default {
      name: 'RegistoView',
    }
    </script>
    
    <style scoped>
    
    </style>
    