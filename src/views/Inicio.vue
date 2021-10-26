<template>
  <div>
    <MonicionActual/>
    <Pie/>
  </div>
</template>

<script>
// @ is an alias to /src
import MonicionActual from '@/components/MonicionActual'
import Pie from '@/components/Pie.vue'


export default {
  components: {
    MonicionActual,
    Pie
  }
}
</script>
