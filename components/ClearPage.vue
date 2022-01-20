<template>
  <div class="clear-page">
    <div class="clear-page__content">
      <img src="@/assets/images/list.png" alt="">
      <h1>Список компаний пуст</h1>
      <h2>Попробуйте изменить условия поиска</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.clear-page {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 200px;
      opacity: 0.5;
      padding-bottom: 10px;
    }
    h1,h2{
      font-weight: lighter;
      padding: 10px;
      text-align: center;
      font-size: 20px;
    }
    h1{
      font-size: 30px;
    }
  }
}
</style>
