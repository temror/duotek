<template>
  <div class="logo">
    <NuxtLink to="">
      <img v-if="darkTheme" alt="logo" src="@/assets/images/logo/logo-dark.svg">
      <img v-else alt="logo" src="@/assets/images/logo/logo-light.svg">
    </NuxtLink>
  </div>
</template>

<script>
export default {
  computed: {
    darkTheme () { return this.$store.state.darkTheme }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  flex: 0 1 30%;
}
</style>
