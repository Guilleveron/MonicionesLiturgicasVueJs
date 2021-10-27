<template>
  <div>
    <MonicionActual/>
    <Carousel/>
    <MonicionEspecial/>
    <MonicionMariana/>
    <Pie/>
  </div>
</template>

<script>
// @ is an alias to /src
import MonicionActual from '@/components/MonicionActual'
import Carousel from '@/components/Carousel'
import MonicionEspecial from '@/components/MonicionEspecial'
import MonicionMariana from '@/components/MonicionMariana'
import Pie from '@/components/Pie.vue'


export default {
  components: {
    MonicionActual,
    Carousel,
    MonicionEspecial,
    MonicionMariana,
    Pie
  }
}
</script>
