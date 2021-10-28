<template>
    <div class="showcase">
        <h4>{{ monicion.titulo }} {{ monicion.dia }} de la Semana {{ monicion.semana }} del tiempo {{ monicion.tiempo }}</h4>
        <p><b>Ciclo {{ monicion.ciclo }}</b></p>
        <h5>Monición de Entrada</h5>
        <p>{{ monicion.entrada }}</p>
        <h5>Monición de las Lecturas</h5>
        <p>{{ monicion.lecturas }}</p>
        <h5>Oración Universal</h5>
        <p>A cada intención respondemos: <b>{{ monicion.respuestaOracionUniversal }}</b><br></p>
        <ol>
            <li>{{ monicion.oracionUniversal1 }} <b>Oremos.</b></li>
            <li>{{ monicion.oracionUniversal2 }} <b>Oremos.</b></li>
            <li>{{ monicion.oracionUniversal3 }} <b>Oremos.</b></li>
            <li>{{ monicion.oracionUniversal4 }} <b>Oremos.</b></li>
            <li>{{ monicion.oracionUniversal5 }} <b>Oremos.</b></li>
        </ol>
        <h5>Presentación de las Ofrendas</h5>
        <p>{{ monicion.presentacionDeLasOfrendas }}</p>
        <h5>Monición Antes de la Comunión</h5>
        <p>{{ monicion.comunion }}</p>
        <h5>Monición de Despedida</h5>
        <p>{{ monicion.despedida }}</p>
    </div>
</template>

<script>
export default {
  name: 'Monicion',
  data(){
    return{
      monicion: {}
    }  
  },
  methods:{
    async cargarmonicion(){
        const id = await this.$route.query.id;
        const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/${id}`);
        const response = await request.json();
        const monicion = await response;
        //console.log(monicion[0]);
        this.monicion = monicion[0];
    }
  },
  created: function(){
    this.cargarmonicion();
  }
}
</script>

