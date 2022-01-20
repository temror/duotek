<template>
  <div class="company">
    <div class="container">
      <div class="company__row">
        <div class="company-info">
          <NuxtLink to="/companies" class="company-info__backLink" />
          <div class="company-info__title" />
          <div class="company-info__numbers" />
          <div class="company-info__shortInfo" />
          <div class="company-info__fullInfo" />
        </div>
        <Aside>
          <div class="company-links" />
        </Aside>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../../duotek-nuxt/assets/css/main";
.company {
  animation: opacity 1s ease infinite;
  &__row {
    display: flex;
    margin: 0 auto;
  }
}
.company-info {
  flex: 1 1 auto;
  padding: 40px;

  > div {
    padding-bottom: 20px;
    margin-bottom: 10px;
    background: #F7F7F7;
  }

  &__title {
    height: 46px;
    width: 400px;
  }

  &__numbers {
    height: 66px;
    width: 300px;
  }

  &__shortInfo {
    height: 28px;
    width: 700px;
  }

  &__fullInfo {
    height: 100px;
    width: 800px;
  }
}

.company-links {
  width: 200px;
  height: 800px;
  background: #F7F7F7;
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
</style>
