<template>
  <div>
    <h2 class="fs-2 text-center">Monición Mariana</h2>
      <section class="banner-two">
        <h4>{{ monicionMariana.titulo }} {{ monicionMariana.dia }} {{ monicionMariana.semana }}</h4>
        <p><b>Ciclo {{ monicionMariana.ciclo }} - <b>Tiempo:</b> {{ monicionMariana.tiempo }}</b></p>
        <h5>Monición de Entrada</h5>
        <p>{{ monicionMariana.entrada }}</p>
        <button class="boton2" :id="'boton2'+monicionMariana.id" v-on:click="mostrar('flotante2'+monicionMariana.id);cerrar('boton2'+monicionMariana.id)" >Leer más   <i class="fas fa-book-reader"></i></button>
        <div class="flotantes" :id="'flotante2'+monicionMariana.id">
          <h5>Monición de las Lecturas</h5>
          <p>{{ monicionMariana.lecturas }}</p>
          <h5>Oración Universal</h5>
          <p>A cada intención respondemos: <b>{{ monicionMariana.respuestaOracionUniversal }}</b><br></p>
          <ol>
              <li>{{ monicionMariana.oracionUniversal1 }} <b>Oremos.</b></li>
              <li>{{ monicionMariana.oracionUniversal2 }} <b>Oremos.</b></li>
              <li>{{ monicionMariana.oracionUniversal3 }} <b>Oremos.</b></li>
              <li>{{ monicionMariana.oracionUniversal4 }} <b>Oremos.</b></li>
              <li>{{ monicionMariana.oracionUniversal5 }} <b>Oremos.</b></li>
          </ol>
          <h5>Presentación de las Ofrendas</h5>
          <p>{{ monicionMariana.presentacionDeLasOfrendas }}</p>
          <h5>Monición Antes de la Comunión</h5>
          <p>{{ monicionMariana.comunion }}</p>
          <h5>Monición de Despedida</h5>
          <p>{{ monicionMariana.despedida }}</p>
          <button class="boton2" v-on:click="mostrar('boton2'+monicionMariana.id);cerrar('flotante2'+monicionMariana.id)">Cerrar  <i class="far fa-times-circle"></i></button>
        </div>	
      </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      fechaDemonicionMariana: '2021-09-24',
      monicionMariana: {}
    }  
  },
  methods:{
    async cargarmonicionMariana(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionMariana = monicion[0];
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
    this.cargarmonicionMariana(this.fechaDemonicionMariana);
  }

}
</script>