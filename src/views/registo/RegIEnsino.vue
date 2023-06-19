<template>
    <form action="">
    <div class="container">
        <h1 class="text-center py-4 text-muted">Registo da Instituição de Ensino</h1>
            <div class="row justify-content-center">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nome:</label>
                            <input type="text" v-model="candidato.nome" class="form-control ml-auto mr-auto" id="exampleInputEmail10" aria-describedby="emailHelp" placeholder="Insira o seu nome">
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                    </div>
                    <div class="col-md-3">  
                        <div class="form-group">
                        <label for="exampleInputEmail1">Apelido</label>
                        <input type="text" v-model="candidato.apelido" class="form-control" id="exampleInputEmail11" aria-describedby="emailHelp" placeholder="Insira o seu Apelido">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div> 
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6"> 
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email:</label>
                        <input type="email" v-model="candidato.email_candidato" class="form-control" id="exampleInputEmail12" aria-describedby="emailHelp" placeholder="Insira o seu e-mail">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-6 "> 
                    <div class="form-group">
                        <label for="pwd">Senha:</label>
                        <input type="password" class="form-control" id="pwd" v-model="candidato.password" aria-describedby="emailHelp" placeholder="Insira sua senha">
                        <small id="emailHelp2" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 "> 
                    <div class="form-group">
                        <label for="password_confirmation">Confirmar Senha:</label>
                        <input type="password" class="form-control" id="password_confirmation" v-model="candidato.password_confirmation" aria-describedby="emailHelp" placeholder="confirme sua senha">
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
            candidato:{
                'nome': '',
                'apelido': '',
                'email_candidato':'',
                'genero':'',
                'naturalidade':'',
                'nomePai':'',
                'nomeMae':'',
                'nacionalidade':'',
                'dtnasci':'',
                'estadoCivil':'',
                'tipoDoc':'',
                'nrDoc':'',
                'nuit':'',
                'emissor':'',
                'dtEmissao':'',
                'dtValidade':'',
                'contacto':'',
                'status':'',
                'password':'',
                'password_confirmation':'',
                'resumoCv':''
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
                'naturalidade':this.candidato.naturalidade,
                'nomePai':this.candidato.nomePai,
                'nomeMae':this.candidato.nomeMae,
                'nacionalidade':this.candidato.nacionalidade,
                'dtnasci':this.candidato.dtnasci,
                'estadoCivil':this.candidato.estadoCivil,
                'tipoDoc':this.candidato.tipoDoc,
                'nrDoc':this.candidato.nrDoc,
                'nuit':this.candidato.nuit,
                'emissor':this.candidato.emissor,
                'dtEmissao':this.candidato.dtEmissao,
                'dtValidade':this.candidato.dtValidade,
                'status':'teste vue',                
                'password':this.candidato.password,
                'password_confirmation':this.candidato.password_confirmation,
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
    