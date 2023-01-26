<template>
  <header-inc></header-inc>
    <section class="section bg-light py-3">
        <div class="container text-center">
            <h4 class="text-coruni mb-4 font-weight-normal smalltext2">DESENVOLVEMOS SOLUÇÕES À MEDIDA DAS NECESSIDADES DA SUA EMPRESA</h4>
            <a href="#about" class="link-easy text-coruni h4 w-lg" > <i class="ti-angle-down" aria-hidden="true"></i> </a>
            <button @click="submit()">Submeter </button>
        </div>
    </section>
    <section class="section" id="about">
        <div class="container">
            <div class="row ">
                <div class="col about-card">
                    <h2 class="font-weight-light mb-5 "><span class="text-coruni">Quem  </span>somos</h2>
                    <h5 class="mb-3">
                        Somos o parceiro de confiança no que se refere a Consultoria Empresarial. Através dos nossos serviços aumentamos a eficácia das empresas, permitindo que se foquem no mais importante: os seus negócios.
                    </h5>
                </div>
            </div>
        </div>
    </section>
    <section class="section" id="work">
        <div class="container">
            <div class="row ">
                <div class="col about-card">
                    <h2 class="font-weight-light mb-5 "><span class="text-coruni">Nossa  </span>Actuação</h2>
                    <h5 class="mb-2">Presencialmente ou Remotamente conectados com os nossos clientes, fornecedores dependendo da necessidade da empresa para alcançar o objectivo proposto tendo a tecnologia como maior aliada do nosso negócio.</h5>
                </div>
            </div>
        </div>
    </section>
    <servicos-inc></servicos-inc>
    <footer-inc></footer-inc>

</template>

<script>
import HeaderInc from '@/components/includes/HeaderInc.vue'
import FooterInc from '@/components/includes/FooterInc.vue'
import ServicosInc from '@/components/includes/ServicosInc.vue'
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  name: 'HomeView',
  components: {
    HeaderInc,
    FooterInc,
    ServicosInc,
  },
  methods:{
    async submit(){
        // await axios.get(`http://localhost:8000/sanctum/csrf-cookie`).then((response)=>{
        // console.log('crsf-cookie',response);
        // })

        // await axios.get(`http://localhost:8000/login`).then((response)=>{
        //     console.log('login',response);
        // })

        await axios.get(`http://localhost:8000/users`).then((response)=>{
            console.log('users',response);
        })

        // await axios.get(`http://localhost:8000/api/user`).then((response)=>{
        //     console.log('user api',response);
        // })

        // await axios.get(`http://localhost:8000/api/empresas`).then((response)=>{
        //     console.log('API-Empresas',response);
        // })
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

