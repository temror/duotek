<template>
  <div class="company-info">
    <div
      class="company-info__backLink"
      @click="$router.back()"
    >
      <img
        class="company-info__backLink"
        src="@/assets/icons/arrow-left.svg"
        alt=""
      >
      <p>Компании</p>
    </div>
    <img
      class="company-info__picture"
      :src="company.picture"
      alt=""
    >
    <div class="company-info__title">
      {{ company.title }}
    </div>
    <div class="company-info__numbers">
      <div>
        <span class="company-info__number">{{ company.age }}</span>лет
      </div>
      <div>
        <span class="company-info__number">{{ company.staff }}</span>человек
      </div>
    </div>
    <div class="company-info__shortInfo">
      {{ company.description_short }}
    </div>
    <div class="company-info__fullInfo">
      {{ company.description_full }}
    </div>
    <div class="company-info__params">
      <h1>Проектная специализация</h1>
      <ul class="company-info__params-row">
        <my-param
          v-for="spec in company.companySpecializations"
          :key="spec.id"
        >
          {{ spec.title }}
        </my-param>
      </ul>
    </div>
    <div class="company-info__params">
      <h1>Технологии</h1>
      <ul class="company-info__params-row">
        <my-param
          v-for="ind in company.industries"
          :key="ind.id"
        >
          {{ ind.title }}
        </my-param>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: Object,
      default: () => { return {} }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../duotek-nuxt/assets/css/main";

.company-info {
  flex: 1 1 auto;
  padding: 40px;

  > div {
    padding-bottom: 20px;
  }

  &__backLink {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    p {
      padding-left: 14px;
      font-size: 14px;
      line-height: 150%;
      color: $main-color;
    }
  }

  &__title {
    font-family: $title-font;
    font-style: normal;
    font-size: 36px;
    line-height: 130%;
  }

  &__numbers {
    > div {
      display: flex;
      align-items: flex-start;
    }

    display: flex;
    color: #333333;
    font-size: 16px;
  }
  &__picture{
    width: 200px;
    margin-bottom: 20px;
    display: none;
  }

  &__number {
    color: $custom-red;
    font-weight: 300;
    font-size: 60px;
    line-height: 110%;
    padding: 0 5px;
  }

  &__shortInfo, &__fullInfo {
    color: #333333;
    line-height: 150%;
    font-size: 18px;
  }

  &__fullInfo {
    font-size: 14px;
  }

  &__params {
    padding-top: 20px;

    h1 {
      font-size: 18px;
      font-weight: normal;
    }
  }

  &__params-row {
    display: flex;
    padding: 20px 0;

    li {
      margin-right: 10px;
    }
  }
}
@media (max-width: 870px) {
  .company-info{
    &__picture{
      display: block;
    }
  }
}
</style>
