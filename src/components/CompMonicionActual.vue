<template>
  <div class="showcase">
    <h4>Monicion del Día {{ dia }}</h4>
    <h4>{{ monicionDelDia.titulo }} {{ monicionDelDia.dia }} {{ monicionDelDia.semana }}</h4>
    <p><b>Ciclo {{ monicionDelDia.ciclo }} - Tiempo {{ monicionDelDia.tiempo }}</b><img class="imgC" src="@/assets/casullaVerde.svg" alt="Moniciones Litúrgicas"></p>
    <h5>Monición de Entrada</h5>
    <p>{{ monicionDelDia.entrada }}</p>
    <h5>Monición de las Lecturas</h5>
      <p>{{ monicionDelDia.lecturas }}</p>
    <button class="boton2" :id="'boton1'+monicionDelDia.id" v-on:click="mostrar('flotante1'+monicionDelDia.id);cerrar('boton1'+monicionDelDia.id)" >Leer más   <i class="fas fa-book-reader"></i></button>
    <div class="flotantes" :id="'flotante1'+monicionDelDia.id">
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
      <button class="boton2" v-on:click="mostrar('boton1'+monicionDelDia.id);cerrar('flotante1'+monicionDelDia.id)">Cerrar  <i class="far fa-times-circle"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dia: '',
      monicionDelDia: {}
    }  
  },
  methods:{
    cargarDia(){
      const event = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      //alert(event.toLocaleDateString(undefined, options));
      this.dia = event.toLocaleDateString(undefined, options);
    },
    async cargarMonicionDelDia(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionDelDia = monicion[0];
    },
    hora(){
      let horaActual = new Date();
      let horaProgramada = new Date();
      horaProgramada.setHours(0);
      horaProgramada.setMinutes(0);
      horaProgramada.setSeconds(2);
      return horaProgramada.getTime() - horaActual.getTime();
    },
    sumarDias(fecha, dias){
      fecha.setDate(fecha.getDate() + dias);
      return fecha;
    },
    funcionProgramada() {
      let objFecha = new Date();
      let dia  = ('0' + objFecha.getDate()).slice(-2);
      let mes  = ('0' + (objFecha.getMonth()+1)).slice(-2);
      let anio = objFecha.getFullYear();
      this.cargarMonicionDelDia(anio + "-" + mes + "-" + dia);
    },
    mostrar(id) {
      let elemento = document.getElementById(id);
      elemento.style.display = 'inline-block';
    },
    cerrar(id) {
      let elemento = document.getElementById(id);
      elemento.style.display = 'none';
    },
    cargarMonicionesAlIniciarElDia(){
    setTimeout(this.funcionProgramada(), this.hora());
    }
  },
  created: function(){
    this.cargarMonicionesAlIniciarElDia();
    this.cargarDia();
  }

}
</script>