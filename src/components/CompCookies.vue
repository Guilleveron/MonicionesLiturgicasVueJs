<template>
    <div class="cookies" v-if="isOpen">
      <h5 class="cookies__titulo">Política de Cookies</h5>
      <slot name="message" class="cookies__texto">
        {{ message }}<br>
        <b>{{ message2 }}</b>
      </slot>
      <div class="cookies__botones">
        <button class="cookies__boton" @click="accept">
        {{ buttonTextAccept }}
        </button>
        <button class="cookies__boton" @click="deny">
          {{ buttonTextDeny }}
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CookieMessage',
  props:{
    buttonTextAccept: {
      type: String,
      default: 'Aceptar'
    },
    buttonTextDeny: {
      type: String,
      default: 'Denegar'
    },
    message: {
      type: String,
      default: 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.'
    },
    message2: {
      type: String,
      default: '¿Aceptas nuestras Cookies?'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data (){
    return {
      isOpen: false
    }
  },
  computed:{
    containerPosition(){
      return `cookie--${this.position}`;
    }
  },
  created: function(){
    if (!this.getGDPR() === true){
      this.isOpen = true;
    }
  },
  methods:{
    getGDPR(){
      return localStorage.getItem('GDPR:accepted', true);
    },
    accept(){
      this.isOpen = false;
      localStorage.setItem('GDPR:accepted', true);
    },
    deny(){
      this.isOpen = false;
      localStorage.setItem('GDPR:accepted', false);
    }
  }
}
</script>