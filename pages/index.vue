<template>
  <div />
</template>

<script>
export default {
  mounted () {
    this.$router.push({ name: 'companies', query: { page: '1' } })
  }
}
</script>
