<template>
  <div>
    <MonicionActual/> 
    <Carousel/>
    <MonicionEspecial/>
    <MonicionesDominicales/>
    <MonicionMariana/>
  </div>
</template>

<script>
// @ is an alias to /src
import MonicionActual from '@/components/CompMonicionActual'
import Carousel from '@/components/CompCarousel'
import MonicionEspecial from '@/components/CompMonicionEspecial'
import MonicionesDominicales from '@/components/CompMonicionesDominicales'
import MonicionMariana from '@/components/CompMonicionMariana'

import { mapState, mapActions } from "vuex";

export default {
  components: {
    MonicionActual,
    Carousel,
    MonicionEspecial,
    MonicionesDominicales,
    MonicionMariana
  },
  computed:{
    //...mapState([''])
  },
  methods:{
    //...mapActions([''])
  }
}
</script>
