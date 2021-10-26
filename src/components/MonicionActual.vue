<template>
  <div class="principal">
    <div class="showcase">
      <h4>Monicion del Día {{ monicionDelDia.dia }}</h4>
      <h4>{{ monicionDelDia.titulo }} {{ monicionDelDia.dia }} {{ monicionDelDia.semana }}</h4>
        <p><b>Ciclo {{ monicionDelDia.ciclo }} - Tiempo {{ monicionDelDia.tiempo }}</b><img class="imgC" src="@/assets/casullaVerde.svg" alt="Moniciones Litúrgicas"></p>
        <h5>Monición de Entrada</h5>
        <p>{{ monicionDelDia.entrada }}</p>
        <h5>Monición de las Lecturas</h5>
          <p>{{ monicionDelDia.lecturas }}</p>
        <button class="boton2" id="boton1" v-on:click="mostrar('flotante1');cerrar('boton1')" >Leer más   <i class="fas fa-book-reader"></i></button>
        <div class="flotantes" id="flotante1">
          <h5>Oración Universal</h5>
          <p>A cada intención respondemos: <b>{{ monicionDelDia.respuestaOracionUniversal }}</b><br></p>
          <ol>
              <li>{{ monicionDelDia.oracionUniversal1 }} <b>Oremos.</b></li>
              <li>{{ monicionDelDia.oracionUniversal2 }} <b>Oremos.</b></li>
              <li>{{ monicionDelDia.oracionUniversal3 }} <b>Oremos.</b></li>
              <li>{{ monicionDelDia.oracionUniversal4 }} <b>Oremos.</b></li>
              <li>{{ monicionDelDia.oracionUniversal5 }} <b>Oremos.</b></li>
          </ol>
          <h5>Presentación de las Ofrendas</h5>
          <p>{{ monicionDelDia.presentacionDeLasOfrendas }}</p>
          <h5>Monición Antes de la Comunión</h5>
          <p>{{ monicionDelDia.comunion }}</p>
          <h5>Monición de Despedida</h5>
          <p>{{ monicionDelDia.despedida }}</p>
          <button class="boton2" v-on:click="mostrar('boton1');cerrar('flotante1')">Cerrar  <i class="far fa-times-circle"></i></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      monicionDelDia: {
      }
    }  
  },
  methods:{
    async monicionGet(){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/2021-10-26`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionDelDia = monicion[0];
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
    this.monicionGet()
  }

}
</script>