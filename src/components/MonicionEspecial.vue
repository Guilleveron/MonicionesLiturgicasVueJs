<template>
  <div class="principal">
    <h2 class="fs-2 text-center">Monición Especial</h2>
      <section class="banner-one">
        <div class="container-lg">
          <h4>{{ monicionEspecial.titulo }} {{ monicionEspecial.dia }} {{ monicionEspecial.semana }}</h4>
          <p><b>Ciclo {{ monicionEspecial.ciclo }} - <b>Tiempo:</b> {{ monicionEspecial.tiempo }}</b></p>
          <h5>Monición de Entrada</h5>
          <p>{{ monicionEspecial.entrada }}</p>
          <button class="boton2" :id="'boton'+monicionEspecial.id" v-on:click="mostrar('flotante'+monicionEspecial.id);cerrar('boton'+monicionEspecial.id)" >Leer más   <i class="fas fa-book-reader"></i></button>
          <div class="flotantes" :id="'flotante'+monicionEspecial.id">
            <h5>Monición de las Lecturas</h5>
            <p>{{ monicionEspecial.lecturas }}</p>
            <h5>Oración Universal</h5>
            <p>A cada intención respondemos: <b>{{ monicionEspecial.respuestaOracionUniversal }}</b><br></p>
            <ol>
                <li>{{ monicionEspecial.oracionUniversal1 }} <b>Oremos.</b></li>
                <li>{{ monicionEspecial.oracionUniversal2 }} <b>Oremos.</b></li>
                <li>{{ monicionEspecial.oracionUniversal3 }} <b>Oremos.</b></li>
                <li>{{ monicionEspecial.oracionUniversal4 }} <b>Oremos.</b></li>
                <li>{{ monicionEspecial.oracionUniversal5 }} <b>Oremos.</b></li>
            </ol>
            <h5>Presentación de las Ofrendas</h5>
            <p>{{ monicionEspecial.presentacionDeLasOfrendas }}</p>
            <h5>Monición Antes de la Comunión</h5>
            <p>{{ monicionEspecial.comunion }}</p>
            <h5>Monición de Despedida</h5>
            <p>{{ monicionEspecial.despedida }}</p>
            <button class="boton2" v-on:click="mostrar('boton'+monicionEspecial.id);cerrar('flotante'+monicionEspecial.id)">Cerrar  <i class="far fa-times-circle"></i></button>
          </div>
        </div>	
      </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      fechaDeMonicionEspecial: '2021-09-23',
      monicionEspecial: {}
    }  
  },
  methods:{
    async cargarmonicionEspecial(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionEspecial = monicion[0];
    },
    mostrar(id) {
      let elemento = document.getElementById(id);
      elemento.style.display = 'inline-block';
    },
    cerrar(id) {
      let elemento = document.getElementById(id);
      elemento.style.display = 'none';
    }
  },
  created: function(){
    this.cargarmonicionEspecial(this.fechaDeMonicionEspecial);
  }

}
</script>