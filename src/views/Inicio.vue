<template>
  <div>
    <Inicio/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import MonicionActual from '@/components/MonicionActual'

export default {
  name: 'Inicio',
  components: {
    Inicio,
    MonicionActual
  }
}
</script>
