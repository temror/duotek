<template>
  <div class="company">
    <div class="company__image" />
    <div class="company__description">
      <div class="company__title" />
      <div class="company__text" />
      <div class="company__text" />
      <ul class="company__params">
        <my-param class="company__param" />
        <my-param class="company__param" />
        <my-param class="company__param" />
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
$background: #F7F7F7;
.company {
  animation: opacity 1s ease infinite;
  display: flex;
  min-height: 210px;
  padding-right: 75px;
  cursor: pointer;
  position: relative;
  transition-duration: 100ms;

  &__image {
    width: 150px;
    height: 150px;
    background: $background;
    margin: 20px 30px;
  }

  &__title {
    height: 24px;
    margin-top: 20px;
    font-size: 24px;
    padding-top: 15px;
    background-color: $background;
    width: 120px;
  }

  &__text {
    height: 14px;
    background-color: $background;
    margin: 16px 0;
    width: 500px;
    line-height: 21px;
  }
  &__params {
    display: flex;
  }

  &__param {
    margin-right: 10px;
    width: 150px;
    height: 8px;
  }
  @keyframes opacity {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0.3;
    }
    100%{
      opacity: 1;
    }
  }
}
</style>
