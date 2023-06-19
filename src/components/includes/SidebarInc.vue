<template>
   <div id="sidebar-container" class="sidebar-expanded d-none d-md-block">
        <ul class="list-group">
            <a href="#submenu1"  aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-start align-items-center">
                  <span class="fa fa-user fa-user mr-3"></span>
                  <span class="menu-collapsed">Painel de controlo</span>
              </div>
            </a>
            <a href="profileCandidato.html" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-user fa-user mr-3"></span>
                    <span class="menu-collapsed">Dados de Candidato</span>
                </div>
            </a>
            <a href="profileCandidato.html" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-start align-items-center">
                  <span class="fa fa-user fa-user mr-3"></span>
                  <span class="menu-collapsed">Oportunidades Recebidas</span>
              </div>
          </a>
          <a href="profileCandidato.html" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-start align-items-center">
                  <span class="fa fa-user fa-user mr-3"></span>
                  <span class="menu-collapsed">Gerir Oportunidades</span>
              </div>
          </a>
          <a href="#submenu2" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-start align-items-center">
                    <span class="fa fa-cog fa-cog mr-3"></span>
                    <span class="menu-collapsed">Definições</span>
                    <span class="submenu-icon ml-auto"></span>
                </div>
            </a>
            <div id='submenu2' class="collapse sidebar-submenu">
                <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                    <span class="menu-collapsed">Minha conta</span>
                </a>
            </div>
        </ul>
    </div>
</template>
 
<script>
    // import SidebarInc from '@/components/includes/NavbarInc.vue'
    export default {
        name: 'SidebarInc',
        components:{
            // SidebarInc,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

   