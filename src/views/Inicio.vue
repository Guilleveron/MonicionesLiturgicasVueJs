<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/Logo.svg">
    <Cabecera></Cabecera>
    <Inicio msg="Hola"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Cabecera from '@/components/Cabecera.vue'

export default {
  name: 'Home',
  components: {
    Inicio,
    Cabecera
  }
}
</script>
