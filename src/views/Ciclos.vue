<template>
    <div class="container-md" id="monicionCiclos">
        <div class="row justify-content-center">
            <div class="col-auto"><img class="imgT" v-bind:src="imagen" :alt="'Moniciones del Ciclo '+ciclo+' - Evangelio Según San '+santo"></div>
            <div class="col-auto text-center">
                <h3>Moniciones Litúrgicas<br>Ciclo {{ ciclo }}<br>Evangelio según San {{santo}}</h3>
            </div>
        </div> 
        <div class="accordion accordion-flush" id="accordionFlushExample1">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne1">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                    <h5>Tiempo de Adviento <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Adviento"></h5>
                </button>
            </h2>
            <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                <div class="accordion-body">
                    <div id="adviento"></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                    <h5>Tiempo de Navidad <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Navidad"></h5>
                </button>
            </h2>
            <div id="flush-collapseOne2" class="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample1">
                <div class="accordion-body">
                    <div id="navidad"></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
                    <h5>Tiempo de Ordinario <img class="imgC" src="@/assets/casullaVerde.svg" alt="Moniciones Litúrgicas - Ordinario"></h5>
                </button>
            </h2>
            <div id="flush-collapseOne3" class="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample1">
                <div class="accordion-body">
                    <div id="ordinario1"></div>
                    <div id="ordinario2"></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne4">
                    <h5>Tiempo de Cuaresma <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Cuaresma"></h5>
                </button>
            </h2>
            <div id="flush-collapseOne4" class="accordion-collapse collapse" aria-labelledby="flush-headingOne4" data-bs-parent="#accordionFlushExample1">
                <div class="accordion-body">
                    <div id="cuaresma"></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne5">
                    <h5>Tiempo del Triduo Pascual <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Triduo Pascual"></h5>
                </button>
            </h2>
            <div id="flush-collapseOne5" class="accordion-collapse collapse" aria-labelledby="flush-headingOne5" data-bs-parent="#accordionFlushExample1">
                <div class="accordion-body">
                    <div id="triduo"></div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne6">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne6">
                    <h5>Tiempo Pascual <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Tiempo Pascual"></h5>
                </button>
            </h2>
            <div id="flush-collapseOne6" class="accordion-collapse collapse" aria-labelledby="flush-headingOne6" data-bs-parent="#accordionFlushExample1">
                <div class="accordion-body">
                    <div id="pascual1"></div>
                    <div id="pascual2"></div>
                </div>
            </div>
        </div>
    </div> 
    </div>
</template>

<script>
export default {
  name: 'Monicion',
  data(){
    return{
        ciclo:'',
        santo: '',
        imagen: ''
    }  
  },
  methods:{
    async cargarmoniciones(ciclo, tiempo, idSelector){
        await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/ciclo/${ciclo}/tiempo/${tiempo}`)
            .then(respuesta => {return respuesta.json()})
            .then(monicion => {
                let monicionAMostrar = document.querySelector(idSelector);
                //console.log(monicion);
                monicion.forEach(monicion => {
                    const row = document.createElement("tr");
                    row.innerHTML += //html
                    `
                    <ul>
                        <li class="lista"><a href="/monicion?titulo=${monicion.titulo}&dia=${monicion.dia}&semana=${monicion.semana}&ciclo=${monicion.ciclo}&tiempo=${monicion.tiempo}&id=${monicion.id}" target="_blank"><i class="fas fa-cross"></i> ${monicion.titulo} ${monicion.dia} ${monicion.semana}<i class="fas fa-angle-double-right"></i></a></li>
                    </ul>  
                    `;
                    monicionAMostrar.appendChild(row);
                    })
                })
            .catch(error => console.log("Hubo un Error: " + error.message))
    }, 
    cargarCicloYSanto (){
        const ciclo = this.$route.query.ciclo;
        const santo = this.$route.query.santo;
        this.ciclo = ciclo;
        this.santo = santo;
        
        if (santo == 'Mateo'){
            this.imagen = '/img/San Mateo.664b3b68.png'
        }else if (santo == 'Marcos'){
            this.imagen = '/img/San Marcos.f1674d56.png'
        }else if (santo == 'Lucas'){
            this.imagen = '/img/San Lucas.78069de4.png'
        }

        //console.log(this.imagen);
    }
  },
  created: function(){
        this.cargarCicloYSanto();
        this.cargarmoniciones(this.ciclo, 'de Adviento', "#adviento");
        this.cargarmoniciones('A, B y C', 'de Navidad', "#navidad");
        this.cargarmoniciones('A, B y C', 'ordinario', "#ordinario1");
        this.cargarmoniciones(this.ciclo, 'ordinario', "#ordinario2");
        this.cargarmoniciones(this.ciclo, 'de cuaresma', "#cuaresma");
        this.cargarmoniciones('A, B y C', 'del triduo pascual', "#triduo");
        this.cargarmoniciones(this.ciclo, 'Pascual', "#pascual1");
        this.cargarmoniciones('A, B y C', 'Pascual', "#pascual2");
  }
}
</script>