<template>
  <v-btn :disabled="isDisabled" @click="onClick">
    {{btnText}}
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    isDisabled: {
      type: Boolean,
      // default: true
    },
    btnText: {
      type: String
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus">
// .button
//   border: 1px solid #eee
//   border-radius: 3px
//   background-color: #ffffff
//   cursor: pointer
//   font-size: 15pt
//   padding: 3px 10px
//   margin: 10px
</style>
