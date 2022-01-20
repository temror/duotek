<template>
  <div class="main">
    <Header />
    <div class="content">
      <Nuxt keep-alive />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
}
.content{
  flex: 1 1 auto;
}
</style>
