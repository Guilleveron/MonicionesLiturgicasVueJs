<template>
    <!-- Anuncio responsivo -->
    <ins class="adsbygoogle"
        :style="googleAdStyle"
        :data-ad-client="googleAdClient"
        :data-ad-slot="googleAdSlot"
        :data-ad-format="googleAdFormat"
        :data-full-width-responsive="googleAdResponsive">
    </ins>
</template>

<script>
export default {
    props:{
        googleAdStyle: {
            type: String,
            required: false,
            default:"display:block",
        },
        googleAdClient: {
            type: String,
            required: false,
            default:"ca-pub-6129079724757336",
        },
        googleAdSlot: {
            type: String,
            required: false,
            default:"6840732830",
        },
        googleAdFormat: {
            type: String,
            required: false,
            default:"auto",
        },
        googleAdResponsive: {
            type: String,
            required: false,
            default:"true",
        }
    },
    mounted: function () {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }

}
</script>