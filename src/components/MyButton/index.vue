<template lang="pug">
  v-btn(v-bind:disabled="isDisabled" @click="onClick")
    slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'my-button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
})
</script>

<style lang="stylus">
.button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
