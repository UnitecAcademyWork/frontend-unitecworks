<template>
  <section class="section" id="service">
        <div class="container">
            <h2 class="mb-5 pb-4"><span class="text-coruni">O que</span> Fazemos</h2>
            <div class="row">
                <div class="col-md-4 col-sm-6 mr-auto">
                    <div class="card mb-5">
                       <div class="card-header has-icon">
                            <i class="ti-id-badge text-coruni" aria-hidden="true"></i>
                        </div>
                        <div class="card-body grow px-4 py-3">
                            <h5 class="mb-3 card-title text-dark">Recursos humanos</h5>
                            <p class="subtitle text-justify">
                                Acessoria de Recursos Humanos <br>
                                Recrutamento e selecção de pessoal <br>
                                Gestão Administrativa de RH e Pessoal <br>
                                Tercearização  <br>
                                Estruturação de departamento de RH <br>
                                Pagamento Salarial e Emissão de Guias de pagamentos de impostos
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card mb-5">
                       <div class="card-header has-icon">
                            <i class="ti-bar-chart text-coruni" aria-hidden="true"></i>
                        </div>
                        <div class="card-body grow px-4 py-3">
                            <h5 class="mb-3 card-title text-dark">Auditoria</h5>
                            <p class="subtitle">
                                Auditoria completa às demonstrações financeiras <br>
                                Análise de sistemas contabilísticos e de controlo interno <br>
                                Revisão limitada às demonstrações financeiras <br>
                                Auditorias específicas (incentivos; despesas; vendas; due diligence; etc.) <br>
                                Auditoria interna<br>
                                Auditoria fiscal
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card mb-5">
                       <div class="card-header has-icon">
                            <i class="ti-agenda text-coruni" aria-hidden="true"></i>
                        </div>
                        <div class="card-body grow px-4 py-3">
                            <h5 class="mb-3 card-title text-dark">Fiscalidade</h5>
                            <p class="subtitle">
                                Assistência fiscal <br>
                                Vericação e revisão de declarações fiscais <br>
                                Processo de reembolso de IVA <br>
                                Reclamações e impugnações fiscais <br>
                                Acompanhamento fiscal permanente <br>
                                Processos de liquidação e dissolução de sociedades <br>
                                Tributação de expatriados<br>
                                Obtenção de incentivos fiscais <br>
                                Legalização de transferências de capitais
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 ml-auto">
                    <div class="card mb-5">
                       <div class="card-header has-icon">
                            <i class="ti-light-bulb text-coruni" aria-hidden="true"></i>
                        </div>
                        <div class="card-body grow px-4 py-3">
                            <h5 class="mb-3 card-title text-dark">Consultoria</h5>
                            <p class="subtitle">
                                Serviços de consultoria especializada <br>
                                Avaliação de empresa e partes sociais <br>
                                Estudos de viabilidade <br>
                                Reestruturação de empresas e organizações <br>
                                Planos de negócio e planos estratégicosGestão de Projectos <br>
                                Acções de formação específica
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card mb-5">
                       <div class="card-header has-icon">
                            <i class="ti-money text-coruni" aria-hidden="true"></i>
                        </div>
                        <div class="card-body grow px-4 py-3">
                            <h5 class="mb-3 card-title text-dark">Contabilidade</h5>
                            <p class="subtitle">
                                Assistência contabilística <br>
                                Processamento de contabilidade <br>
                                Contas de gestão <br>
                                Demonstrações financeiras anuais <br>
                                Processamento de salários <br>
                                Consolidação de contas
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4 col-sm-6 mr-auto">
                    <div class="card mb-5">
                       <div class="card-header has-icon">
                            <i class="ti-briefcase text-coruni" aria-hidden="true"></i>
                        </div>
                        <div class="card-body grow px-4 py-3">
                            <h5 class="mb-3 card-title text-dark"> {{legal}} </h5>
                            <p class="subtitle">
                                Constituição da Empresa <br>
                                Licença/Alvará <br>
                                Alteração Contratual
                            </p>
                            <!-- <input type="text" class="" id="" v-model="legal"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
    export default {
        name: 'ServicosInc',
        data(){
            return{
                legal: "Legalização de Empresas",
                modelo:"" ,   
            }
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  