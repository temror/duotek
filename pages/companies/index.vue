<template>
  <div class="companies">
    <div class="container">
      <h1 class="companies__title">
        Каталог компаний
      </h1>
      <div class="companies__content">
        <CompaniesContent />
        <Aside><CompanyFilter /></Aside>
      </div>
      <CompanyPagination />
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "../../assets/css/main";
.companies {
  min-height: 100%;
  &__title{
    padding: 30px;
    font-weight: normal;
    font-size: 36px;
    line-height: 130%;
    font-family: $title-font;
  }
  &__content{
    display: flex;
    margin: 0 auto;
    min-height: 100%;
  }
}
@media (max-width: 870px) {
  .companies{
    &__title{
      text-align: center;
      font-size: 28px;
      padding: 0;
      line-height: 200%;
    }
    &__content{
      flex-direction: column-reverse;
      align-items: stretch;
    }
  }
  aside{
    order: 1;
  }
}
</style>
