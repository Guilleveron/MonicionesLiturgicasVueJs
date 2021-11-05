<template>
    <div id="app">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light" id="menu">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="@/assets/Logo.svg" alt="Moniciones Litúrgicas" title="Moniciones Litúrgicas" class="logo">
                    Moniciones Litúrgicas
                </a>
                <button id="navbar-toggler-ocultar-buscador" v-on:click="ocultar_buscador()" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <form method="get" action="/buscar" class="d-flex" id="ctn-bars-search" v-on:click="mostrar_buscador()" target="_blank">
                        <input class="form-control me-1" autocomplete="off" type="search" id="inputSearch" @keyup="buscador_interno()" name="monición" placeholder="Día, Semana, Solemnidad o Festividad">
                        <button class="btn btn-outline-primary" type="submit" value="Buscar">Buscar<i class="fas fa-search" ></i></button>
                    </form>
                </div>
            </div> 
        </nav>
        <ul id="box-search" v-on:click="ocultar_buscador()"></ul>
        <div class="principal container-xl" v-on:click="ocultar_buscador()">
            <router-view/>  
       <!--  Aquí aparecen las vistas -->
            <Cookies/>
            
        </div>  
        <!-- COPYRIGHT & CONTACTO-->
        <footer class="footer">
            <p>
                Para ponerse en contacto con nosotros, escribinos a <a href="mailto: monicionesliturgicas@gmail.com">monicionesliturgicas@gmail.com <i class="fas fa-envelope"></i></a>
                <br>
                Copyright © 2021 Moniciones Litúrgicas. Todos los derechos reservados.
            </p>
        </footer>     
    </div>
</template>
<script>
import Cookies from '@/components/CompCookies'

export default {
  name: 'App',
  components: {
      Cookies
  },
  data(){
    return{
      
    }  
  },
  methods:{
      async cargarMonicionesBuscador(){
        await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/`)
            .then(respuesta => {return respuesta.json()})
            .then(monicion => {
                let monicionAMostrar = document.querySelector('#box-search');
                //console.log(monicion);
                monicion.forEach(monicion => {
                    const row = document.createElement("li");
                row.innerHTML += //html
                `
                    <a href="/monicion?titulo=${monicion.titulo}&dia=${monicion.dia}&semana=${monicion.semana}&ciclo=${monicion.ciclo}&tiempo=${monicion.tiempo}&id=${monicion.id}" target="_blank">
                        <i class="fas fa-search"></i>
                        ${monicion.titulo} ${monicion.dia} ${monicion.semana} - Tiempo ${monicion.tiempo} - Ciclo ${monicion.ciclo} <i class="fas fa-angle-double-right">
                        </i>
                        <div class="d-none">${monicion.titulo} ${monicion.dia} ${monicion.semana} tiempo ${monicion.tiempo} ciclo ${monicion.ciclo} ${monicion.entrada}
                        </div>

                    </a>
                `;
                monicionAMostrar.appendChild(row);
                    })
                })
            .catch(error => console.log("Hubo un Error: " + error.message))
    },
    //Funcion para mostrar el buscador
    mostrar_buscador(){
        let inputSearch = document.getElementById("inputSearch");
        let box_search = document.getElementById("box-search");
        inputSearch.focus();
        if (inputSearch.value === ""){
            box_search.style.display = "none";
        }
    },
    //Funcion para ocultar el buscador
    ocultar_buscador(){
        let inputSearch = document.getElementById("inputSearch");
        let box_search = document.getElementById("box-search");
        inputSearch.value = "";
        box_search.style.display = "none";
    },
    //Creando filtrado de busqueda
    buscador_interno(){
        let inputSearch = document.getElementById("inputSearch");
        let box_search = document.getElementById("box-search");
        let filter = inputSearch.value.toUpperCase();
        let li = box_search.getElementsByTagName("li");


        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        let filter2 = removeAccents(filter);
        //console.log(filter2);
        //Recorriendo elementos a filtrar mediante los "li"
        for (let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName("a")[0];
            let textValue = a.textContent || a.innerText;
            
            let textValue2 = removeAccents(textValue);

            if(textValue2.toUpperCase().indexOf(filter2) > -1){
                li[i].style.display = "";
                box_search.style.display = "block";
                if (inputSearch.value === ""){
                box_search.style.display = "none";
                }
            }else{
                li[i].style.display = "none";
            }
        }
    }
  },
  created: function(){
        this.cargarMonicionesBuscador();
        
  }
}
</script>

<style lang="scss" src="./scss/main.scss"></style>