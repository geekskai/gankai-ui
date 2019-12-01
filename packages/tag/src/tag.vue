<template>
  <transition name="gk-zoom-in-center">
    <div class="gk__tag" :class="'gk__tag--'+color">
      <span class="gk__tag--desc"><slot></slot></span>
      <i class="gk-icon-close2 gk__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'GkTag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
