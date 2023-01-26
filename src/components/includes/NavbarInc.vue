<template>
    <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-black mb-5">
        <div class="container">
            <a class="navbar-brand text-white h1 logotipo" href="#">
                <img src="../../assets/imgs/unitecbpartnerlogo.png" alt="Unitec BPartner">
            </a>
            <button class="navbar-toggler bg-transparent ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" > 
                    <li class="nav-item" v-if="currentRouteName!='login'">
                        <a class="nav-link text-white" href="#header-top">Inicio</a>
                    </li>
                    <li class="nav-item" v-if="currentRouteName!='login'">
                        <a class="nav-link text-white" href="#about">Sobre nós</a>
                    </li>
                    <li class="nav-item" v-if="currentRouteName!='login'">
                        <a class="nav-link text-white" href="#service">Serviços</a>
                    </li>
                    <li class="nav-item" v-if="currentRouteName!='login'">
                        <a class="nav-link text-white" href="#foot">Contactos</a>
                    </li>
                    <li class="nav-item" >
                        <router-link to="/" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="nav-item" v-if="currentRouteName!='login'">
                        <router-link to="/login" class="nav-link text-white">Login </router-link>
                    </li>
                </ul>                       
            </div>
        </div>
    </nav>
 </template>
   
 <script>
 export default {
    name: 'NavbarInc',
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
 }
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 
 </style>
   