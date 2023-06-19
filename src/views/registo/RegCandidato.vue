<template>
    <form action="">
        <div class="container">
            <h1 class="text-center py-4 text-muted">Registo do candidato</h1>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" v-model="candidato.nome" class="form-control ml-auto mr-auto" id="nome" aria-describedby="emailHelp" placeholder="Insira o seu nome">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-md-4">  
                    <div class="form-group">
                        <label for="apelido">Apelido</label>
                        <input type="text" v-model="candidato.apelido" class="form-control" id="apelido" aria-describedby="emailHelp" placeholder="Insira o seu Apelido">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                </div> 
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="email_candidato">Email:</label>
                        <input type="email" v-model="candidato.email_candidato" class="form-control" id="email_candidato" aria-describedby="emailHelp" placeholder="Insira o seu e-mail">
                        <small id="email_candidato" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label>Genero:</label>
                        <!-- criar componente disto abaixo -->
                        <div class="btn-group-toggle" >
                            <label class="btn btn-outline-secondary col-md-6"  @click="activate(key)" :class="{ active : active_el == key }" v-for="(gender, key) in genders" :key="key">
                                <input type="radio"
                                    class="btn-group-toggle"
                                    name="gender_id"
                                    :id="'gender_' + key"
                                    :value="gender"
                                    autocomplete="off"
                                    v-model="candidato.genero">
                                {{gender}}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" v-model="candidato.password" aria-describedby="password" placeholder="Insira sua password">
                        <small id="password" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8"> 
                    <div class="form-group">
                        <label for="password_confirmation">Confirmar Senha:</label>
                        <input type="password" class="form-control" id="password_confirmation" v-model="candidato.password_confirmation" aria-describedby="password_confirmation" placeholder="confirme sua password">
                        <small id="password_confirmation" class="form-text text-muted"></small>
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
            active_el:1,
            // gender_id: "Masculino",
            candidato:{
                'nome': '',
                'apelido': '',
                'email_candidato':'',
                'genero':'Masculino',
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
                await this.getToken();
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
                    this.login(response.data.email_candidato,response.data.password)
                    console.log('RegistoCandidato',response.data);
                })
                .catch(error=>console.log(error))
            },
            async login({email,pwd}) {
                // await this.getToken();
                let uri = `http://localhost:8000/loggin`
                await axios.post(uri, {
                    'email':email,
                    'password':pwd,
                })
                .then((response)=>{
                    console.log('login',response);
                    // router.push('/')
                })
                .catch(error=>console.log(error))
            },
            activate:function(el) {
                this.active_el = el;
            }
        }
      }
    </script>
    
    <style scoped>

    </style>
    