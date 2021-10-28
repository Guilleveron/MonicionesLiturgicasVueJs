<template>
    <div class="principal"> 
        <h2 class="fs-2 text-center">Moniciones Dominicales</h2>
        <div class="card-group">
            <div class="card">
                <div class="dominical">
                    <a :href="'/monicion?titulo='+monicionDominical1.titulo+'&dia='+monicionDominical1.dia+'&semana='+monicionDominical1.semana+'&ciclo='+monicionDominical1.ciclo+'&tiempo='+monicionDominical1.tiempo+'&id='+monicionDominical1.id" target="_blank"><img src="@/assets/Miercoles.jpg" class="card-img-top" :alt="'Monición del '+monicionDominical1.titulo+' '+monicionDominical1.dia+' de la Semana '+monicionDominical1.semana+' del tiempo '+monicionDominical1.tiempo+'- Moniciones Liturgicas.com'"></a>
                    <div class="card-body">
                        <h5 class="card-title">Monicion del {{ monicionDominical1.titulo }} {{ monicionDominical1.dia }} de la Semana {{ monicionDominical1.semana }} del tiempo {{ monicionDominical1.tiempo }} - Ciclo {{ monicionDominical1.ciclo }}</h5>
                        <a class="boton3" :href="'/monicion?titulo='+monicionDominical1.titulo+'&dia='+monicionDominical1.dia+'&semana='+monicionDominical1.semana+'&ciclo='+monicionDominical1.ciclo+'&tiempo='+monicionDominical1.tiempo+'&id='+monicionDominical1.id" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="dominical">
                    <a :href="'/monicion?titulo='+monicionDominical2.titulo+'&dia='+monicionDominical2.dia+'&semana='+monicionDominical2.semana+'&ciclo='+monicionDominical2.ciclo+'&tiempo='+monicionDominical2.tiempo+'&id='+monicionDominical2.id" target="_blank"><img src="@/assets/Jueves.jpg" class="card-img-top" :alt="'Monición del '+monicionDominical2.titulo+' '+monicionDominical2.dia+' de la Semana '+monicionDominical2.semana+' del tiempo '+monicionDominical2.tiempo+'- Moniciones Liturgicas.com'"></a>
                    <div class="card-body">
                        <h5 class="card-title">Monicion del {{ monicionDominical2.titulo }} {{ monicionDominical2.dia }} de la Semana {{ monicionDominical2.semana }} del tiempo {{ monicionDominical2.tiempo }} - Ciclo {{ monicionDominical2.ciclo }}</h5>
                        <a class="boton3" :href="'/monicion?titulo='+monicionDominical2.titulo+'&dia='+monicionDominical2.dia+'&semana='+monicionDominical2.semana+'&ciclo='+monicionDominical2.ciclo+'&tiempo='+monicionDominical2.tiempo+'&id='+monicionDominical2.id" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="dominical">
                    <a :href="'/monicion?titulo='+monicionDominical3.titulo+'&dia='+monicionDominical3.dia+'&semana='+monicionDominical3.semana+'&ciclo='+monicionDominical3.ciclo+'&tiempo='+monicionDominical3.tiempo+'&id='+monicionDominical3.id" target="_blank"><img src="@/assets/Viernes.jpg" class="card-img-top" :alt="'Monición del '+monicionDominical3.titulo+' '+monicionDominical3.dia+' de la Semana '+monicionDominical3.semana+' del tiempo '+monicionDominical3.tiempo+'- Moniciones Liturgicas.com'"></a>
                    <div class="card-body">
                        <h5 class="card-title">Monicion del {{ monicionDominical3.titulo }} {{ monicionDominical3.dia }} de la Semana {{ monicionDominical3.semana }} del tiempo {{ monicionDominical3.tiempo }} - Ciclo {{ monicionDominical3.ciclo }}</h5>
                        <a class="boton3" :href="'/monicion?titulo='+monicionDominical3.titulo+'&dia='+monicionDominical3.dia+'&semana='+monicionDominical3.semana+'&ciclo='+monicionDominical3.ciclo+'&tiempo='+monicionDominical3.tiempo+'&id='+monicionDominical3.id" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
            

           
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      monicionDominical1: {},
      monicionDominical2: {},
      monicionDominical3: {}
    }  
  },
  methods:{
    async cargarMonicionDominical1(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionDominical1 = monicion[0];
      //console.log(this.monicionesCarousel.ciclo);
    },
    async cargarMonicionDominical2(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionDominical2 = monicion[0];
      //console.log(this.monicionesCarousel.ciclo);
    },
    async cargarMonicionDominical3(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionDominical3 = monicion[0];
      //console.log(this.monicionesCarousel.ciclo);
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
      //console.log(objFecha);

      let numeroASumarFecha = null;

      if (objFecha.getDay() == 0){
        numeroASumarFecha = 7;
      }else if(objFecha.getDay() == 1){
        numeroASumarFecha = 6;
      }else if(objFecha.getDay() == 2){
        numeroASumarFecha = 5;
      }else if(objFecha.getDay() == 3){
        numeroASumarFecha = 4;
      }else if(objFecha.getDay() == 4){
        numeroASumarFecha = 3;
      }else if(objFecha.getDay() == 5){
        numeroASumarFecha = 2;
      }else if(objFecha.getDay() == 6){
        numeroASumarFecha = 1;
      };
      //console.log(numeroASumarFecha);
      
      let objFecha2 = this.sumarDias(objFecha, numeroASumarFecha);
      let dia2  = ('0' + objFecha2.getDate()).slice(-2);
      let mes2  = ('0' + (objFecha2.getMonth()+1)).slice(-2);
      let anio2 = objFecha2.getFullYear();
      this.cargarMonicionDominical1(anio2 + "-" + mes2 + "-" + dia2);
      //console.log(anio2 + "-" + mes2 + "-" + dia2);

      let objFecha3 = this.sumarDias(objFecha, 7);
      let dia3  = ('0' + objFecha3.getDate()).slice(-2);
      let mes3  = ('0' + (objFecha3.getMonth()+1)).slice(-2);
      let anio3 = objFecha3.getFullYear();
      this.cargarMonicionDominical2(anio3 + "-" + mes3 + "-" + dia3);
      //console.log(anio3 + "-" + mes3 + "-" + dia3);

      let objFecha4 = this.sumarDias(objFecha, 7);
      let dia4  = ('0' + objFecha4.getDate()).slice(-2);
      let mes4  = ('0' + (objFecha4.getMonth()+1)).slice(-2);
      let anio4 = objFecha4.getFullYear();
      this.cargarMonicionDominical3(anio4 + "-" + mes4 + "-" + dia4);
      //console.log(anio4 + "-" + mes4 + "-" + dia4);
    },
    cargarMonicionesAlIniciarElDia(){
    setTimeout(this.funcionProgramada(), this.hora());
    }
  },
  created: function(){
    this.cargarMonicionesAlIniciarElDia();
  }
}
</script>