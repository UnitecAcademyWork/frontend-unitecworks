<template>
  <header-inc></header-inc>
    <section class="section bg-light py-3">
        <div class="container text-center">
            <h4 class="text-coruni mb-4 font-weight-normal smalltext2">DESENVOLVEMOS SOLUÇÕES À MEDIDA DAS NECESSIDADES DA SUA EMPRESA</h4>
            <a href="#about" class="link-easy text-coruni h4 w-lg" > <i class="ti-angle-down" aria-hidden="true"></i> </a>
            <!-- <button @click="submit()">Submeter </button> -->
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
    <!-- <servicos-inc></servicos-inc> -->
    <section class="section" id="blog">
        <div class="container">
            <h2 class="mb-5">Latest <span class="text-danger">News</span></h2>
            <div class="row">
                <div class="blog-card">
                    <div class="img-holder">
                        <img src="../../assets/imgs/blog1.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                    </div>
                    <div class="content-holder">
                        <h6 class="title">Consectetur adipisicing elit</h6>

                        <p class="post-details">
                            <a href="#">By: Admin</a>
                            <a href="#"><i class="ti-heart text-danger"></i> 234</a>
                            <a href="#"><i class="ti-comment"></i> 123</a>
                        </p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>

                        <p><b>Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</b></p>
                        <p>Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>

                        <a href="#" class="read-more">Read more <i class="ti-angle-double-right"></i></a>
                    </div>
                </div><!-- end of blog wrapper -->

                <!-- blog-card -->
                <div class="blog-card">
                    <div class="img-holder">
                        <img src="../../assets/imgs/blog2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                    </div>
                    <div class="content-holder">
                        <h6 class="title">Explicabo illo</h6>

                        <p class="post-details">
                            <a href="#">By: Admin</a>
                            <a href="#"><i class="ti-heart text-danger"></i> 456</a>
                            <a href="#"><i class="ti-comment"></i> 264</a>
                        </p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                        <a href="#" class="read-more">Read more <i class="ti-angle-double-right"></i></a>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="img-holder">
                        <img src="../../assets/imgs/blog3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                    </div>
                    <div class="content-holder">
                        <h4 class="title">Porro Quisqua</h4>

                        <p class="post-details">
                            <a href="#">By: Admin</a>
                            <a href="#"><i class="ti-heart text-danger"></i> 431</a>
                            <a href="#"><i class="ti-comment"></i> 312</a>
                        </p>
                        
                        <p> consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>

                        <a href="#" class="read-more">Read more <i class="ti-angle-double-right"></i></a>
                    </div>
                </div><!-- end of blog wrapper -->
            </div>
        </div>
    </section>
    <footer-inc></footer-inc>
</template>

<script>
import HeaderInc from '@/components/includes/HeaderInc.vue'
import FooterInc from '@/components/includes/FooterInc.vue'
// import ServicosInc from '@/components/includes/ServicosInc.vue'
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
    name: 'HomeView',
    components: {
        HeaderInc,
        FooterInc,
        // ServicosInc,
    },
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    },
  methods: {
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

