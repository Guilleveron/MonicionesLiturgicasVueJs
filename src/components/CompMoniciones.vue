<template>
    <div class="container-md">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h4 class="text-center">Moniciones del Ciclo A - Evangelio Según <i>San Mateo</i></h4><img class="imgM" src="@/assets/San Mateo.png" alt="Moniciones del Ciclo A - Evangelio Según San Mateo">
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="accordion accordion-flush" id="accordionFlushExample1">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                                        <h5>Tiempo de Adviento <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Adviento"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                                    <div class="accordion-body">
                                        <div id="advientoA"></div>
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
                                        <div id="navidadA"></div>
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
                                        <div id="ordinarioA1"></div>
                                        <div id="ordinarioA2"></div>
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
                                        <div id="cuaresmaA"></div>
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
                                        <div id="triduoA"></div>
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
                                        <div id="pascualA1"></div>
                                        <div id="pascualA2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <h4 class="text-center">Moniciones del Ciclo B - Evangelio Según <i>San Marcos</i></h4><img class="imgM" src="@/assets/San Marcos.png" alt="Moniciones del Ciclo B - Evangelio Según San Marcos">
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="accordion accordion-flush" id="accordionFlushExample2">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo1" aria-expanded="false" aria-controls="flush-collapseTwo1">
                                        <h5>Tiempo de Adviento <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Adviento"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo1" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo1" data-bs-parent="#accordionFlushExample2">
                                    <div class="accordion-body">
                                        <div id="advientoB"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">
                                        <h5>Tiempo de Navidad <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Navidad"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo2" data-bs-parent="#accordionFlushExample2">
                                    <div class="accordion-body">
                                        <div id="navidadB"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo3" aria-expanded="false" aria-controls="flush-collapseTwo3">
                                        <h5>Tiempo de Ordinario <img class="imgC" src="@/assets/casullaVerde.svg" alt="Moniciones Litúrgicas - Ordinario"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo3" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo3" data-bs-parent="#accordionFlushExample2">
                                    <div class="accordion-body">
                                        <div id="ordinarioB1"></div>
                                        <div id="ordinarioB2"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo4" aria-expanded="false" aria-controls="flush-collapseTwo4">
                                        <h5>Tiempo de Cuaresma <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Cuaresma"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo4" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo4" data-bs-parent="#accordionFlushExample2">
                                    <div class="accordion-body">
                                        <div id="cuaresmaB"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo5">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo5" aria-expanded="false" aria-controls="flush-collapseTwo5">
                                        <h5>Tiempo del Triduo Pascual <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Triduo Pascual"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo5" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo5" data-bs-parent="#accordionFlushExample2">
                                    <div class="accordion-body">
                                        <div id="triduoB"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo6">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo6" aria-expanded="false" aria-controls="flush-collapseTwo6">
                                        <h5>Tiempo Pascual <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Tiempo Pascual"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo6" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo6" data-bs-parent="#accordionFlushExample2">
                                    <div class="accordion-body">
                                        <div id="pascualB1"></div>
                                        <div id="pascualB2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <h4 class="text-center">Moniciones del Ciclo C - Evangelio Según <i>San Lucas</i></h4><img class="imgM" src="@/assets/San Lucas.png" alt="Moniciones del Ciclo C - Evangelio Según San Lucas">
                    </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div class="accordion accordion-flush" id="accordionFlushExample3">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree1" aria-expanded="false" aria-controls="flush-collapseThree1">
                                        <h5>Tiempo de Adviento <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Adviento"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree1" class="accordion-collapse collapse" aria-labelledby="flush-headingThree1" data-bs-parent="#accordionFlushExample3">
                                    <div class="accordion-body">
                                        <div id="advientoC"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
                                        <h5>Tiempo de Navidad <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Navidad"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree2" class="accordion-collapse collapse" aria-labelledby="flush-headingThree2" data-bs-parent="#accordionFlushExample3">
                                    <div class="accordion-body">
                                        <div id="navidadC"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree3" aria-expanded="false" aria-controls="flush-collapseThree3">
                                        <h5>Tiempo de Ordinario <img class="imgC" src="@/assets/casullaVerde.svg" alt="Moniciones Litúrgicas - Ordinario"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree3" class="accordion-collapse collapse" aria-labelledby="flush-headingThree3" data-bs-parent="#accordionFlushExample3">
                                    <div class="accordion-body">
                                        <div id="ordinarioC1"></div>
                                        <div id="ordinarioC2"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree4" aria-expanded="false" aria-controls="flush-collapseThree4">
                                        <h5>Tiempo de Cuaresma <img class="imgC" src="@/assets/casullaMorado.svg" alt="Moniciones Litúrgicas - Cuaresma"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree4" class="accordion-collapse collapse" aria-labelledby="flush-headingThree4" data-bs-parent="#accordionFlushExample3">
                                    <div class="accordion-body">
                                        <div id="cuaresmaC"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree5">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree5" aria-expanded="false" aria-controls="flush-collapseThree5">
                                        <h5>Tiempo del Triduo Pascual <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Triduo Pascual"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree5" class="accordion-collapse collapse" aria-labelledby="flush-headingThree5" data-bs-parent="#accordionFlushExample3">
                                    <div class="accordion-body">
                                        <div id="triduoC"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree6">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree6" aria-expanded="false" aria-controls="flush-collapseThree6">
                                        <h5>Tiempo Pascual <img class="imgC" src="@/assets/casullaBlanco.svg" alt="Moniciones Litúrgicas - Tiempo Pascual"></h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree6" class="accordion-collapse collapse" aria-labelledby="flush-headingThree6" data-bs-parent="#accordionFlushExample3">
                                    <div class="accordion-body">
                                        <div id="pascualC1"></div>
                                        <div id="pascualC2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>    
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
    }
  },
  created: function(){
    this.cargarmoniciones('A', 'de Adviento', "#advientoA");
    this.cargarmoniciones('A, B y C', 'de Navidad', "#navidadA");
    this.cargarmoniciones('A, B y C', 'ordinario', "#ordinarioA1");
    this.cargarmoniciones('A', 'ordinario', "#ordinarioA2");
    this.cargarmoniciones('A', 'de cuaresma', "#cuaresmaA");
    this.cargarmoniciones('A, B y C', 'del triduo pascual', "#triduoA");
    this.cargarmoniciones('A', 'Pascual', "#pascualA1");
    this.cargarmoniciones('A, B y C', 'Pascual', "#pascualA2");

    this.cargarmoniciones('B', 'de Adviento', "#advientoB");
    this.cargarmoniciones('A, B y C', 'de Navidad', "#navidadB");
    this.cargarmoniciones('A, B y C', 'ordinario', "#ordinarioB1");
    this.cargarmoniciones('B', 'ordinario', "#ordinarioB2");
    this.cargarmoniciones('B', 'de cuaresma', "#cuaresmaB");
    this.cargarmoniciones('A, B y C', 'del triduo pascual', "#triduoB");
    this.cargarmoniciones('B', 'Pascual', "#pascualB1");
    this.cargarmoniciones('A, B y C', 'Pascual', "#pascualB2");

    this.cargarmoniciones('C', 'de Adviento', "#advientoC");
    this.cargarmoniciones('A, B y C', 'de Navidad', "#navidadC");
    this.cargarmoniciones('A, B y C', 'ordinario', "#ordinarioC1");
    this.cargarmoniciones('C', 'ordinario', "#ordinarioC2");
    this.cargarmoniciones('C', 'de cuaresma', "#cuaresmaC");
    this.cargarmoniciones('A, B y C', 'del triduo pascual', "#triduoC");
    this.cargarmoniciones('C', 'Pascual', "#pascualC1")
    this.cargarmoniciones('A, B y C', 'Pascual', "#pascualC2");
  }
}
</script>