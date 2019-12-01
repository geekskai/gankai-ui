<template>
  <div class="gk__skeleton" :style="{background: bgColor, paddingBottom, width}">
  </div>
</template>

<script>
  export default{
    name: 'GkSkeleton',
    props: {
      proportion: {
        type: Number,
        default: 1
      }, // h : w
      bgColor: {
        type: String,
        default: '#b4bccc'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: [String, Boolean],
        default: false
      }
    },
    data () {
      return {
          paddingBottom: this.height || `${this.proportion * 100}%`
      }
    }
  }
</script>
