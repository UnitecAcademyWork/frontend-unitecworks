<template>
    <form action="">
    <div class="container">
        <h1 class="text-center py-4 text-muted">Registo da Empresa</h1>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nome da empresa</label>
                        <input type="text" v-model="empresa.nome_empresa" class="form-control ml-auto mr-auto" id="exampleInputEmail10" aria-describedby="emailHelp" placeholder="Insira o seu nome">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nome responsável</label>
                        <input type="text" v-model="empresa.nome_responsavel" class="form-control ml-auto mr-auto" id="exampleInputEmail10" aria-describedby="emailHelp" placeholder="Insira o seu nome">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-md-4">  
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cargo</label>
                        <select class="form-control" aria-label="selecione uma opção">
                            <option value="0" selected>Concluida</option>
                            <option value="1">Cursando</option>
                            <option value="2">Finalista</option>
                            <option value="3">Interrompida</option>
                        </select>
                    </div>
                </div> 
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="nuit"> Nuit </label>
                        <input type="email" v-model="empresa.nuit" class="form-control" id="nuit" aria-describedby="emailHelp" placeholder="Insira o nuit">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" v-model="empresa.email_empresa" class="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="Insira o seu e-mail">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" class="form-control" id="pwd" v-model="empresa.password" aria-describedby="password" placeholder="Insira sua password">
                        <small id="emailHelp2" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="password_confirmation">Confirmar password</label>
                        <input type="password" class="form-control" id="password_confirmation" v-model="empresa.password_confirmation" aria-describedby="password_confirmation" placeholder="Confirme sua password">
                        <small id="emailHelp" class="form-text text-muted"></small>
                        <div class="button py-3">
                            <button type="button" @click="salvar()" class="btn btn-primary w-100">Registar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
  </template>
      
  <script>
    import axios from 'axios'
    // import router from '@/router'
      export default {
        name: 'RegCandidato',
        data: function() {
          return {
            genders: {
              1: "Masculino",
              2: "Feminino"
            },
            gender_id: 'Masculino',
            empresa:{
                'nome': '',
                'apelido': '',
                'email_candidato':'',
                'genero':'',
                'naturalidade':'',
            }
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
           async salvar() { 
            let uri = `http://localhost:8000/candidatoUser/reg`
            await axios.post(uri, {
                'nome': this.candidato.nome,
                'apelido': this.candidato.apelido,
                'email_candidato':this.candidato.email_candidato,
                'genero':this.candidato.genero,
                'resumoCv':'*'
            })
            .then((response)=>{
                console.log('RegistoCandidato',response);
            })
            .catch(error=>console.log(error))
          },
        }
      }
    </script>
    
    <style scoped>

    </style>
    