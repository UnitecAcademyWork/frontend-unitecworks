<template>
    <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-black mb-5">
        <div class="container">
            <router-link to="/" class="navbar-brand text-white h1 logotipo">
                <img src="../../assets/imgs/unitecbpartnerlogo.png" alt="Unitec BPartner"/>
            </router-link>
            <!-- <a class="navbar-brand text-white h1 logotipo" href="#">
                <img src="../../assets/imgs/unitecbpartnerlogo.png" alt="Unitec BPartner">
            </a> -->
            <button class="navbar-toggler bg-transparent ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" > 
                    <ul class="navbar-nav" v-if="currentRouteName=='home'">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#header-top">Inicio</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link text-white" href="#about">Sobre nós</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#service">Serviços</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#foot">Contactos</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link text-white">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/perfil/candidato" class="nav-link text-white">Perfil</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Registar</a>
                            <div class="dropdown-menu">
                                <router-link to="/registar/candidato" class="dropdown-item">Candidato</router-link>
                                <router-link to="/registar/empresa" class="dropdown-item">Empresa</router-link>
                                <router-link to="/registar/iensino" class="dropdown-item">Instituição de Ensino</router-link>
                            </div>
                        </li>
                     </ul>
                     <ul class="navbar-nav" v-if="currentRouteName=='login'">
                        <li class="nav-item ml-auto" >
                            <router-link to="/" class="nav-link text-white">Inicio</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Registar</a>
                            <div class="dropdown-menu">
                                <router-link to="/registar/candidato" class="dropdown-item">Candidato</router-link>
                                <router-link to="/registar/empresa" class="dropdown-item">Empresa</router-link>
                                <router-link to="/registar/iensino" class="dropdown-item">Instituição de Ensino</router-link>
                            </div>
                        </li>
                     </ul>
                     <ul class="navbar-nav" v-if="currentRouteName=='regCandidato'||currentRouteName=='regEmpresa'||currentRouteName=='regIensino'">
                        <li class="nav-item ml-auto" >
                            <router-link to="/" class="nav-link text-white">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link text-white">Login</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Registar</a>
                            <div class="dropdown-menu">
                                <router-link to="/registar/candidato" class="dropdown-item" v-show="currentRouteName!='regCandidato'">Candidato</router-link>
                                <router-link to="/registar/empresa" class="dropdown-item" v-show="currentRouteName!='regEmpresa'">Empresa</router-link>
                                <router-link to="/registar/iensino" class="dropdown-item" v-show="currentRouteName!='regIensino'">Instituição de Ensino</router-link>
                            </div>
                        </li>
                     </ul>
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
   