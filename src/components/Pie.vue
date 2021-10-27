<template>
    <div class="principal">
        <div class="social">
            <h3 class="text-center">Contáctanos</h3>
            <div class="links">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="mailto: monicionesliturgicas@gmail.com">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
        <!-- COOKIES -->
         <!-- <section class="cookies">
            <h5 class="cookies__titulo">Política de Cookies</h5> 
            <p class="cookies__texto">
                Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                <br>
                <b>¿Aceptas nuestras Cookies?</b>
            </p>
            <div class="cookies__botones">
                <button class="cookies__boton cookies__boton--no">Denegar</button>
                <button class="cookies__boton cookies__boton--si">Aceptar</button>
            </div>
        </section> -->
        <!-- No borrar, aquí se generarán todas las etiquetas <script> si acepta el usuario -->
        <div id="nuevosScripts"></div>

        <!-- COPYRIGHT 2021 -->
        <footer class="footer">
            <p>Copyright © 2021 Moniciones Litúrgicas. Todos los derechos reservados.</p>
        </footer>
    
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
    
  },
  created: function(){
    
  }
}
</script>