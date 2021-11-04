<template>
    <div class="buscadorMonicion">
        <form method="get" class="d-flex" id="formularioBuscador">
            <input name="monición" type="search" id="inputBuscador" @keyup="buscador()"  :value="busqueda" class="form-control me-1" autocomplete="off" placeholder="Día, Semana, Solemnidad o Festividad - Tiempo - Ciclo">
            <button class="btn btn-outline-primary" id="botonFormulario" type="submit" value="Buscar">Buscar<i class="fas fa-search" ></i></button>
        </form>
        <ul class="resultadoBuscador" id="resultadoBusqueda"></ul>
        <div class="resultadoBuscador" id="otrosResultados" style="display: none">
            <h6 id="escribeLaMonicion">Escribe la monición que estás Buscando...</h6>
            <h6 id="monicionNoEncontrada">La Monicion que estas buscando no fue encontrada.</h6>
        </div>
                
            	
    </div>
</template>

<script>
export default {
  name: 'Buscador',
  props:{
  },
  data (){
    return {
        busqueda: ''
    }
  },
  computed:{

  },
  methods:{
    cargarBusqueda(){
        const busqueda= this.$route.query.monición;
        this.busqueda = busqueda;
        //console.log(this.busqueda);
    },
    async monicionBusqueda(){
        await fetch(`https://api-moniciones-liturgicas.herokuapp.com/api/moniciones/`)
            .then(respuesta => {return respuesta.json()})
            .then(monicion => {
                let monicionAMostrar = document.querySelector('#resultadoBusqueda');
                //console.log(monicion);
                monicion.forEach(monicion => {
                    const row = document.createElement("li");
                row.innerHTML += //html
                `
                    <a href="/monicion?titulo=${monicion.titulo}&dia=${monicion.dia}&semana=${monicion.semana}&ciclo=${monicion.ciclo}&tiempo=${monicion.tiempo}&id=${monicion.id}" target="_blank">
                        <i class="fas fa-search"></i>
                        ${monicion.titulo} ${monicion.dia} ${monicion.semana} - Tiempo ${monicion.tiempo} - Ciclo ${monicion.ciclo} 
                        <i class="fas fa-angle-double-right"></i>
                        <div class="d-none">
                            ${monicion.titulo} ${monicion.dia} ${monicion.semana} tiempo ${monicion.tiempo} ciclo ${monicion.ciclo}
                        </div>

                    </a>
                `;
                monicionAMostrar.appendChild(row);
                    })
                })
            .catch(error => console.log("Hubo un Error: " + error.message))
    },
    //Creando filtrado de busqueda
    buscador(){
        let inputBuscador = document.getElementById("inputBuscador");
        let resultadoBusqueda = document.getElementById("resultadoBusqueda");
        let filter = inputBuscador.value.toUpperCase();
        let li = resultadoBusqueda.getElementsByTagName("li");

        let otrosResultados = document.getElementById("otrosResultados");
        let escribeLaMonicion = document.getElementById("escribeLaMonicion");
        let monicionNoEncontrada = document.getElementById("monicionNoEncontrada");

        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        let filter2 = removeAccents(filter);

        let contador = 0;
        //console.log(filter2);
        //Recorriendo elementos a filtrar mediante los "li"
        for (let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName("a")[0];
            let textValue = a.textContent || a.innerText;
            
            let textValue2 = removeAccents(textValue);
           

            if(textValue2.toUpperCase().indexOf(filter2) > -1){
                li[i].style.display = "";
                contador ++;
                resultadoBusqueda.style.display = "block";
                    
            }else{
                li[i].style.display = "none";
            }
        }
        //console.log('el contador es ' + contador);
        if(inputBuscador.value === ""){
            resultadoBusqueda.style.display = "none";
            escribeLaMonicion.style.display = "block";
            monicionNoEncontrada.style.display = "none";
                    
        }else if (contador === 0){
            resultadoBusqueda.style.display = "none";
            otrosResultados.style.display = "block";
            escribeLaMonicion.style.display = "none";
            monicionNoEncontrada.style.display = "block";
        }else if (contador > 0){
            otrosResultados.style.display = "none";
        }
        

    }

  },
  created: async function(){
        await this.cargarBusqueda();
        await this.monicionBusqueda();
        await this.buscador();
       
  }
}
</script>