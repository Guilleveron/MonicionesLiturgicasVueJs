<template>
  <div>
    <MonicionActual/> 
    <Carousel/>
    <MonicionEspecial/>
    <MonicionesDominicales/>
    <MonicionMariana/>
    <GoogleAdsense style="display:block" ad-client="ca-pub-6129079724757336" ad-slot="6840732830"></GoogleAdsense>
  </div>
</template>

<script>
// @ is an alias to /src
import MonicionActual from '@/components/CompMonicionActual'
import Carousel from '@/components/CompCarousel'
import MonicionEspecial from '@/components/CompMonicionEspecial'
import MonicionesDominicales from '@/components/CompMonicionesDominicales'
import MonicionMariana from '@/components/CompMonicionMariana'
import GoogleAdsense from '@/components/CompGoogleAdsense'

import { mapState, mapActions } from "vuex";

export default {
  components: {
    MonicionActual,
    Carousel,
    MonicionEspecial,
    MonicionesDominicales,
    MonicionMariana,
    GoogleAdsense
  },
  computed:{
    //...mapState([''])
  },
  methods:{
    //...mapActions([''])
  }
}
</script>
