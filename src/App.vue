<template>
    <div id="app">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light" id="menu">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="@/assets/Logo.svg" alt="Moniciones Litúrgicas" title="Moniciones Litúrgicas" class="logo">
                    Moniciones Litúrgicas
                </a>
                <button id="navbar-toggler-ocultar-buscador" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Ciclos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/ciclos?ciclo=A&santo=Mateo">Ciclo A</a></li>
                                <li><a class="dropdown-item" href="/ciclos?ciclo=B&santo=Marcos">Ciclo B</a></li>
                                <li><a class="dropdown-item" href="/ciclos?ciclo=C&santo=Lucas">Ciclo C</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="/moniciones">Moniciones</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form method="get" action="/buscar" class="d-flex" id="ctn-bars-search" target="_blank">
                        <input class="form-control me-1" autocomplete="off" type="search" id="inputSearch" name="monición" placeholder="Día, Semana, Solemnidad o Festividad">
                        <button class="btn btn-outline-primary" type="submit" value="Buscar">Buscar<i class="fas fa-search" ></i></button>
                    </form>
                </div>
            </div> 
        </nav>
        <div class="principal">
            <router-view/>  
            <Pie/>
        </div>       

    </div>
</template>
<script>
import Pie from '@/components/CompPie.vue'


export default {
  name: 'App',
  components: {
      Pie

  },
  data(){
    return{
      dia: '',
      monicionDelDia: {}
    }  
  },
  methods:{
      
  },
  created: function(){

  }
}


</script>

<style lang="scss" src="./scss/main.scss"></style>