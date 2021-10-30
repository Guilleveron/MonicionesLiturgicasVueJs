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
        <div class="principal" v-on:click="ocultar_buscador()">
            <router-view/>  
            <div class="social">
            <h3 class="text-center">Contáctanos</h3>
                <div class="links">
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto: monicionesliturgicas@gmail.com">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <!-- COOKIES -->
            <section class="cookies">
                <h5 class="cookies__titulo">Política de Cookies</h5> 
                <p class="cookies__texto">
                    Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                    <br>
                    <b>¿Aceptas nuestras Cookies?</b>
                </p>
                <div class="cookies__botones">
                    <button class="cookies__boton cookies__boton--no" v-on:click="denegarCookies()">Denegar</button>
                    <button class="cookies__boton cookies__boton--si" v-on:click="aceptarCookies()">Aceptar</button>
                </div>
            </section>
            <!-- No borrar, aquí se generarán todas las etiquetas <script> si acepta el usuario -->
            <div id="nuevosScripts"></div>

            <!-- COPYRIGHT 2021 -->
            <footer class="footer">
                <p>Copyright © 2021 Moniciones Litúrgicas. Todos los derechos reservados.</p>
            </footer>
        </div>       

    </div>
</template>
<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      dia: '',
      monicionDelDia: {}
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
        //Recorriendo elementos a filtrar mediante los "li"
        for (let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName("a")[0];
            let textValue = a.textContent || a.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = "";
                box_search.style.display = "block";
                if (inputSearch.value === ""){
                box_search.style.display = "none";
                }
            }else{
                li[i].style.display = "none";
            }
        }
    },
    //===================================COOKIES===================================//
    //Mensaje de COOKIES
        //======================================================================
        // COOKIES
        //======================================================================

        //-----------------------------------------------------
        // Configuración
        //-----------------------------------------------------
    contenidoScriptsCookies () {
            ////////////  ¿Google Analítics? /////////////
            ////////////  ¿Facebook Pixel? /////////////
            ////////////  ¿Admob? /////////////
            ////////////  etc  /////////////
    },
        //-----------------------------------------------------
        // Funciones
        //-----------------------------------------------------

        /**
          * Método que oculta la sección de Cookie para siempre
          */
    ocultarCookie() {
        const seccionCookie = document.querySelector('section.cookies');
        // Borra la sección de cookies en el HTML
        seccionCookie.remove();
    },
    /**
      * Método que marca las cookies como aceptadas
      */
    aceptarCookies() {
        // Oculta el HTML de cookies
        this.ocultarCookie();
        // Guarda que ha aceptado
        localStorage.setItem('cookie', true);
        // Tu codigo a ejecutar si aceptan las cookies
        this.ejecutarSiAcepta();
    },
    /**
      * Método que marca las cookies como denegadas
      */
    denegarCookies() {
        // Oculta el HTML de cookies
        this.ocultarCookie();
        // Guarda que ha aceptado
        localStorage.setItem('cookie', false);
    },
    /**
      * Método que ejecuta tu código si aceptan las cookies
      */
    ejecutarSiAcepta() {
        const urlsScriptsCookies = ['https://analytics.google.com', 'https://facebook.com'];
        const nuevosScripts = document.querySelector('#nuevosScripts');
        // Crea los <script>
        urlsScriptsCookies.forEach((url) => {
            const nuevoScript = document.createElement('script');
            nuevoScript.setAttribute('src', url);
            nuevosScripts.appendChild(nuevoScript);
        });
        // Lanza los códigos
        this.contenidoScriptsCookies();
    },
    /**
      * Método que inicia la lógica
      */
    iniciar() {
        // Comprueba si en el pasado el usuario ha marcado una opción
        if (localStorage.getItem('cookie') !== null) {
            if(localStorage.getItem('cookie') === 'true') {
                // Aceptó
                this.aceptarCookies();
            } else {
                // No aceptó
                this.denegarCookies();
            }
        }
    }
    //-----------------------------------------------------
    // Eventos
    //-----------------------------------------------------
    //const cookieSi = document.querySelector('.cookies__boton--si');
    //const cookieNo = document.querySelector('.cookies__boton--no');
    //cookieSi.addEventListener('click',aceptarCookies, false);
    //cookieNo.addEventListener('click',denegarCookies, false);
   
  },
  created: function(){
        this.cargarMonicionesBuscador();
        // Activa el código de Cookie. Comenta si quieres desactivarlo.
        this.iniciar();
        
  }
}


</script>

<style lang="scss" src="./scss/main.scss"></style>