<template>
  <div>
    <CompanyTemplate
      v-for="t in Array(perPage)"
      :key="t"
    />
  </div>
</template>

<script>
export default {
  computed: {
    perPage () { return Number(this.$store.state.per_page) }
  }
}
</script>

<style scoped>

</style>
