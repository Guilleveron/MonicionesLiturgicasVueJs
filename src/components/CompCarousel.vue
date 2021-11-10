<template>
    <div>
      <section class="text-center" id="intro">
      <h2 class="fs-2 text-center">Moniciones Diarias</h2>
      </section>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="semanal">
              <a :href="'/monicion?titulo='+monicionesCarousel1.titulo+'&dia='+monicionesCarousel1.dia+'&semana='+monicionesCarousel1.semana+'&ciclo='+monicionesCarousel1.ciclo+'&tiempo='+monicionesCarousel1.tiempo+'&id='+monicionesCarousel1.id" target="_blank"><img src="@/assets/Domingo.jpg" class="d-block w-100" :alt="'Monición del '+monicionesCarousel1.titulo+' '+monicionesCarousel1.dia+' de la Semana '+monicionesCarousel1.semana+' del tiempo '+monicionesCarousel1.tiempo+'- Moniciones Liturgicas.com'"></a>
              <div class="carousel-caption d-md-block">
                <h5>Monición del {{monicionesCarousel1.titulo}} {{monicionesCarousel1.dia}} de la Semana {{monicionesCarousel1.semana}} del tiempo {{monicionesCarousel1.tiempo}} - Ciclo {{monicionesCarousel1.ciclo}}</h5>
                <a class="boton" :href="'/monicion?titulo='+monicionesCarousel1.titulo+'&dia='+monicionesCarousel1.dia+'&semana='+monicionesCarousel1.semana+'&ciclo='+monicionesCarousel1.ciclo+'&tiempo='+monicionesCarousel1.tiempo+'&id='+monicionesCarousel1.id" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
              </div>      
            </div>
          </div>
          <div class="carousel-item">
            <div class="semanal">
              <a :href="'/monicion?titulo='+monicionesCarousel2.titulo+'&dia='+monicionesCarousel2.dia+'&semana='+monicionesCarousel2.semana+'&ciclo='+monicionesCarousel2.ciclo+'&tiempo='+monicionesCarousel2.tiempo+'&id='+monicionesCarousel2.id" target="_blank"><img src="@/assets/Martes.jpg" class="d-block w-100" :alt="'Monición del '+monicionesCarousel2.titulo+' '+monicionesCarousel2.dia+' de la Semana '+monicionesCarousel2.semana+' del tiempo '+monicionesCarousel2.tiempo+'- Moniciones Liturgicas.com'"></a>
              <div class="carousel-caption d-md-block">
                <h5>Monición del {{monicionesCarousel2.titulo}} {{monicionesCarousel2.dia}} de la Semana {{monicionesCarousel2.semana}} del tiempo {{monicionesCarousel2.tiempo}} - Ciclo {{monicionesCarousel2.ciclo}}</h5>
                <a class="boton" :href="'/monicion?titulo='+monicionesCarousel2.titulo+'&dia='+monicionesCarousel2.dia+'&semana='+monicionesCarousel2.semana+'&ciclo='+monicionesCarousel2.ciclo+'&tiempo='+monicionesCarousel2.tiempo+'&id='+monicionesCarousel2.id" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
              </div>      
            </div>
          </div>
          <div class="carousel-item">
            <div class="semanal">
              <a :href="'/monicion?titulo='+monicionesCarousel3.titulo+'&dia='+monicionesCarousel3.dia+'&semana='+monicionesCarousel3.semana+'&ciclo='+monicionesCarousel3.ciclo+'&tiempo='+monicionesCarousel3.tiempo+'&id='+monicionesCarousel3.id" target="_blank"><img src="@/assets/Jueves.jpg" class="d-block w-100" :alt="'Monición del '+monicionesCarousel3.titulo+' '+monicionesCarousel3.dia+' de la Semana '+monicionesCarousel3.semana+' del tiempo '+monicionesCarousel3.tiempo+'- Moniciones Liturgicas.com'"></a>
              <div class="carousel-caption d-md-block">
                <h5>Monición del {{monicionesCarousel3.titulo}} {{monicionesCarousel3.dia}} de la Semana {{monicionesCarousel3.semana}} del tiempo {{monicionesCarousel3.tiempo}} - Ciclo {{monicionesCarousel3.ciclo}}</h5>
                <a class="boton" :href="'/monicion?titulo='+monicionesCarousel3.titulo+'&dia='+monicionesCarousel3.dia+'&semana='+monicionesCarousel3.semana+'&ciclo='+monicionesCarousel3.ciclo+'&tiempo='+monicionesCarousel3.tiempo+'&id='+monicionesCarousel3.id" target="_blank">Ver más <i class="fas fa-angle-double-right"></i></a>
              </div>      
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      monicionesCarousel1: {},
      monicionesCarousel2: {},
      monicionesCarousel3: {}
    }  
  },
  methods:{
    async cargarMonicionCarousel1(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionesCarousel1 = monicion[0];
      //console.log(this.monicionesCarousel.ciclo);
    },
    async cargarMonicionCarousel2(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionesCarousel2 = monicion[0];
      //console.log(this.monicionesCarousel.ciclo);
    },
    async cargarMonicionCarousel3(fecha){
      const request = await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/fecha/${fecha}`);
      const response = await request.json();
      const monicion = await response;
      //console.log(monicion[0]);
      this.monicionesCarousel3 = monicion[0];
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

      let objFecha2 = this.sumarDias(objFecha, 1);
      let dia2  = ('0' + objFecha2.getDate()).slice(-2);
      let mes2  = ('0' + (objFecha2.getMonth()+1)).slice(-2);
      let anio2 = objFecha2.getFullYear();
      this.cargarMonicionCarousel1(anio2 + "-" + mes2 + "-" + dia2);
      //console.log(anio2 + "-" + mes2 + "-" + dia2);

      let objFecha3 = this.sumarDias(objFecha, 1);
      let dia3  = ('0' + objFecha3.getDate()).slice(-2);
      let mes3  = ('0' + (objFecha3.getMonth()+1)).slice(-2);
      let anio3 = objFecha3.getFullYear();
      this.cargarMonicionCarousel2(anio3 + "-" + mes3 + "-" + dia3);
      //console.log(anio3 + "-" + mes3 + "-" + dia3);

      let objFecha4 = this.sumarDias(objFecha, 1);
      let dia4  = ('0' + objFecha4.getDate()).slice(-2);
      let mes4  = ('0' + (objFecha4.getMonth()+1)).slice(-2);
      let anio4 = objFecha4.getFullYear();
      this.cargarMonicionCarousel3(anio4 + "-" + mes4 + "-" + dia4);
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