<template>
  <NavbarInc/>
  <section class="container-fluid pad">
      <!-- Bootstrap row -->
    <div class="row" id="body-row">
        <!-- Sidebar -->
        <SidebarInc/>
        <!-- MAIN -->
        <div class="col">
            <div class="col mb-3">
            <div class="card">
              <div class="card-body">
                <div class="e-profile">
                  <div class="row">
                    <div class="col-12 col-sm-auto mb-3">
                      <div class="mx-auto" style="width: 140px;">
                        <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                          <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;">140x140</span>
                        </div>
                      </div>
                    </div>
                    <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                      <div class="text-center text-sm-left mb-2 mb-sm-0">
                        <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{dadosPessoais.nome?(dadosPessoais.nome&&dadosPessoais.apelido)?dadosPessoais.nome+' '+dadosPessoais.apelido:dadosPessoais.nome:'Sem nome'}}</h4>
                        <p class="mb-0">@johnny.s</p>
                        <div class="text-muted"><small>Visto pela última vez há 2 horas</small></div>
                        <div class="">Estado : Disponivel</div>
                      </div>
                      <div class="text-center text-sm-right">
                        <span class="badge badge-secondary">Candidato</span>
                        <div class="text-muted"><small> Ingressou 09 Dec 2017</small></div>
                      </div>
                    </div>
                  </div>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="dados-pessoais-tab" data-toggle="tab" href="#nav-dados-pessoais-tab" role="tab" aria-controls="home" aria-selected="true">Dados Pessoais</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="experiencia-pro" data-toggle="tab" href="#nav-experiencia-pro-tab" role="tab" aria-controls="profile" aria-selected="false">Experiência Profissional</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="contact-tab" data-toggle="tab" href="#nav-qualificacao-pro-tab" role="tab" aria-controls="contact" aria-selected="false">Qualificação Profissional</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="nav-dados-pessoais-tab" role="tabpanel" aria-labelledby="home-tab">
                      <form class="form" name="dadosPessoais" novalidate="">
                          <div class="row">
                            <div class="col">
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label for="name">Nome</label>
                                    <input class="form-control" type="text" name="nome" v-model="dadosPessoais.nome">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Apelido</label>
                                    <input class="form-control" type="text" name="apelido" v-model="dadosPessoais.apelido">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label for="data">Data de nascimento</label>
                                    <input class="form-control" type="date" name="data" v-model="dadosPessoais.data">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Gênero</label> <br>
                                    <div class="btn-group-toggle" >
                                      <label class="btn btn-outline-secondary col-md-6"  @click="activate(key)" :class="{ active : active_el == key }" v-for="(gender, key) in genders" :key="key">
                                          <input type="radio"
                                            class="btn-group-toggle"
                                            name="gender_id"
                                            :id="'gender_' + key"
                                            :value="gender"
                                            autocomplete="off"
                                            v-model="dadosPessoais.genero">
                                          {{gender}}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label> Nacionalidade</label>
                                    <input class="form-control" type="text" name="nacionalidade" v-model="dadosPessoais.nacionalidade">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label for="name">Nome do pai:</label>
                                    <input class="form-control" type="text" name="nomePai" v-model="dadosPessoais.nomePai">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Nome da mãe:</label>
                                    <input class="form-control" type="text" name="nomeMae" v-model="dadosPessoais.nomeMae">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label> Nacionalidade</label>
                                    <input class="form-control" type="text" name="nacionalidade" v-model="dadosPessoais.nacionalidade">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Tipo de documento</label>
                                    <select class="form-control" aria-label="selecione o pais" v-model="dadosPessoais.tipoDoc">
                                      <option selected>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>N.º do documento:</label>
                                    <input class="form-control" type="text" name="nrDoc" v-model="dadosPessoais.nrDoc">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label> Nuit</label>
                                    <input class="form-control" type="text" name="nacionalidade" v-model="dadosPessoais.nuit">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <div class="form-group">
                                    <label>Resumo de si</label>
                                    <textarea class="form-control" type="text" cols="30" rows="3" placeholder="descricao"></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col d-flex justify-content-end">
                              <button class="btn btn-primary" type="submit">Salvar alterações</button>
                            </div>
                          </div>
                      </form>
                    </div>
                    <!-- secundaria aba -->
                    <div class="tab-pane fade" id="nav-experiencia-pro-tab" role="tabpanel" aria-labelledby="profile-tab">
                      <form class="form" name="ExperienciaPro" novalidate="">
                        <div class="row pt-4">
                          <div class="col">      
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label for="name">Nome da empresa</label>
                                    <input class="form-control" type="text" name="nomeEmpresa" v-model="experienciaPro.nomeEmpresa">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Cargo</label>
                                    <input class="form-control" type="text" name="cargo" v-model="experienciaPro.cargo">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-6">
                                  <div class="form-group">
                                    <label>Provincia</label>
                                    <select class="form-control" v-model="experienciaPro.provincia">
                                      <option value="0" selected>Selecione uma provincia</option>
                                      <option value="1">Cursando</option>
                                      <option value="2">Finalista</option>
                                      <option value="3">Interrompida</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for="ano_inicio">Ano inicio</label>
                                    <input class="form-control" type="text" name="ano_inicio" v-model="experienciaPro.ano_inicio">
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for="ano_fim">Ano fim</label>
                                    <input class="form-control" type="text" name="ano_fim" v-model="experienciaPro.ano_fim">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Resumo do local</label>
                                    <textarea class="form-control" cols="30" rows="2"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col d-flex justify-content-end">
                                  <button class="btn btn-primary" type="submit">Salvar alterações</button>
                                </div>
                              </div>
                            </div>
                        </div>
                      </form>
                    </div>
                    <!-- terceira aba -->
                    <div class="tab-pane fade" id="nav-experiencia-pro-tab" role="tabpanel" aria-labelledby="profile-tab">
                      <form class="form" name="ExperienciaPro" novalidate="">
                        <div class="row pt-4">
                          <div class="col">      
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label for="name">Nome da empresa</label>
                                    <input class="form-control" type="text" name="nomeEmpresa" v-model="experienciaPro.nomeEmpresa">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Cargo</label>
                                    <input class="form-control" type="text" name="cargo" v-model="experienciaPro.cargo">
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-6">
                                  <div class="form-group">
                                    <label>Provincia</label>
                                    <select class="form-control" v-model="experienciaPro.provincia">
                                      <option value="0" selected>Selecione uma provincia</option>
                                      <option value="1">Cursando</option>
                                      <option value="2">Finalista</option>
                                      <option value="3">Interrompida</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for="ano_inicio">Ano inicio</label>
                                    <input class="form-control" type="text" name="ano_inicio" v-model="experienciaPro.ano_inicio">
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for="ano_fim">Ano fim</label>
                                    <input class="form-control" type="text" name="ano_fim" v-model="experienciaPro.ano_fim">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Resumo do local</label>
                                    <textarea class="form-control" cols="30" rows="2"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col d-flex justify-content-end">
                                  <button class="btn btn-primary" type="submit">Salvar alterações</button>
                                </div>
                              </div>
                            </div>
                        </div>
                      </form>
                    </div>
                    <!-- terceira aba -->
                    <div class="tab-pane fade" id="nav-qualificacao-pro-tab" role="tabpanel" aria-labelledby="contact-tab">
                      <form class="form" name="qualificacaoPro" novalidate="">
                        <div class="row pt-4">
                          <div class="col">      
                              <div class="row">
                                <div class="col">
                                  <div class="form-group">
                                    <label for="name">Nome da instituição de ensino</label>
                                    <input class="form-control" type="text" name="nome_instituicaoEnsino" v-model="qualificacaoPro.nome_instituicaoEnsino">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                      <label>Curso/Área</label>
                                      <select class="form-control" name="curso" v-model="experienciaPro.curso_nome">
                                        <option value="0" selected>Selecione uma provincia</option>
                                        <option value="1">Cursando</option>
                                        <option value="2">Finalista</option>
                                        <option value="3">Interrompida</option>
                                      </select>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                      <label>Nível</label>
                                      <select class="form-control" v-model="experienciaPro.nivel">
                                        <option value="0" selected>Selecione uma provincia</option>
                                        <option value="1">Cursando</option>
                                        <option value="2">Finalista</option>
                                        <option value="3">Interrompida</option>
                                      </select>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-6">
                                  <div class="form-group">
                                    <label>Provincia</label>
                                    <select class="form-control" v-model="experienciaPro.provincia">
                                      <option value="0" selected>Selecione uma provincia</option>
                                      <option value="1">Cursando</option>
                                      <option value="2">Finalista</option>
                                      <option value="3">Interrompida</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for="ano_inicio">Ano inicio</label>
                                    <input class="form-control" type="text" name="ano_inicio" v-model="experienciaPro.ano_inicio">
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for="ano_fim">Ano fim</label>
                                    <input class="form-control" type="text" name="ano_fim" v-model="experienciaPro.ano_fim">
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group">
                                    <label>Resumo do local</label>
                                    <textarea class="form-control" cols="30" rows="2"></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col d-flex justify-content-end">
                                  <button class="btn btn-primary" type="submit">Salvar alterações</button>
                                </div>
                              </div>
                            </div>
                         </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><!-- Main Col END -->
    </div><!-- body-row END -->
  </section>
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
      genders: {
        1: "Masculino",
        2: "Feminino"
      },
      active_el:1,
      dadosPessoais:{
        nome: "",
        apelido: "",
        genero:"Masculino",
        naturalidade:"",
        nomePai:"",
        nomeMae:"",
        nacionalidade:"",
        dtnasci:"",
        estadoCivil:"",
        tipoDoc:"",
        nrDoc:"",
        nuit:"",
        emissoror:"",
        dtEmissaossao:"",
        dtValidadeidade:"",
        status:"",
        resumoCv:""
      },
      experienciaPro:[{
        ano_inicio:'',
        ano_fim:'',
        cargo:'',
        nomeEmpresa:'',
        provincia:'',
        resumo:'',
        curriculumvitae_id:'',
        status:0,
      }],
      qualificacaoPro:[{
        ano_inicio:'',
        ano_fim:'',
        nivel:'',
        provincia:'',
        instituicaoEnsino_nome:'',
        instituicao_ensino_id:'',
        curso_nome:'',
        curso_id:'',
        curriculumvitae_id:'',
        status:'',
      }],
    }
  },
  mounted: function() {
    // var vm = this
  },
  methods:{
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
      activate:function(el) {
        this.active_el = el;
      }
  }
}
</script>

<style scoped>
  /* form {
    padding-top: 120px;
    padding-bottom: 120px;
  } */
  .pad{
    padding-top: 90px;
  }
</style>