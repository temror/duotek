<template>
  <div class="hamburger" :style="activeMenu && {transform: 'rotate(90deg)',transitionDuration: '200ms'}" @click="changeMenu">
    <hr>
    <hr>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    activeMenu: {
      type: Boolean
    }
  },
  methods: {
    changeMenu () {
      this.activeMenu
        ? this.$emit('changeMenu', false)
        : this.$emit('changeMenu', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger{
  width: 35px;
  height: 35px;
  transition-duration: 200ms;
  hr{
    background-color: black;
  }
}

</style>
