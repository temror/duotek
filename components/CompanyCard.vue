<template>
  <NuxtLink :to="`companies/${company.id}`">
    <div class="company" @click="$store.commit('setDarkTheme',true)">
      <img class="company__image" :src="company.picture" alt="">
      <div class="company__description">
        <h1 class="company__title">
          {{ company.title }}
        </h1>
        <p class="company__text">
          {{ company.description_short }}
        </p>
        <ul class="company__params">
          <my-param
            v-for="param in company.industries"
            :key="param.id"
            class="company__param"
          >
            {{ param.title }}
          </my-param>
        </ul>
      </div>
      <img class="company__arrow" src="@/assets/icons/arrow-right.svg" alt="arrow">
    </div>
  </NuxtLink>
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

.company {
  display: flex;
  min-height: 210px;
  padding-right: 75px;
  cursor: pointer;
  position: relative;
  transition-duration: 100ms;

  &:hover {
    background: rgba(3, 9, 83, 0.03);
    border-radius: 8px;
    transition-duration: 100ms;
  }

  &:hover &__param {
    background: white;
    transition-duration: 100ms;
  }

  &:hover &__title {
    color: $custom-red;
    transition-duration: 100ms;
  }

  &:hover &__arrow {
    opacity: 1;
    transition-duration: 100ms;
  }

  &__image {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background: #F7F7F7;
    margin: 20px 30px;
  }

  &__title {
    font-size: 24px;
    padding-top: 15px;
    margin-top: 10px;
    font-weight: normal;
    color: $main-color;
  }

  &__text {
    font-size: 14px;
    padding: 16px 0;
    max-width: 525px;
    line-height: 21px;
  }

  &__params {
    display: flex;
  }

  &__param {
    margin-right: 10px;
  }

  &__arrow {
    position: absolute;
    right: 23px;
    bottom: 18px;
    background-color: white;
    opacity: 0;
    transition-duration: 100ms;
  }
}

@media (max-width: 870px) {
  .company {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-align: center;
    margin: 20px;
    border-radius: 4px;
    border: 1px solid lightgrey;
    &__params{
      flex-direction: column;
      align-items: center;
    }
    &__param{
      margin: 10px;
    }
  }
}
</style>
