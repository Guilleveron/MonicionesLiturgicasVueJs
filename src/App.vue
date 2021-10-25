<template>
  <div id="app">
    <div id="nav">
      <header>
            <nav class="navbar navbar-expand-md navbar-light bg-light" id="menu">
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
                                <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Nosotros" class="nav-link" >Nosotros</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ciclos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><router-link to="/Ciclos?ciclo=A&santo=Mateo" class="dropdown-item">Ciclo A</router-link></li>
                                    <li><router-link to="/Ciclos?ciclo=B&santo=Marcos" class="dropdown-item" >Ciclo B</router-link></li>
                                    <li><router-link to="/Ciclos?ciclo=C&santo=Lucas" class="dropdown-item">Ciclo C</router-link></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><router-link to="/Moniciones" class="dropdown-item">Moniciones</router-link></li>
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
        </header>
  
        <ul id="box-search"></ul>
    </div>
      <router-view/>
      <div class="container-xl" id="principal">
      <Inicio></Inicio>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'Home',
  components: {
    Inicio
  }
}
</script>

<style lang="scss" src="./scss/main.scss"></style>