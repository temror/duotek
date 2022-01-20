<template>
  <div class="company-links">
    <img class="company-links__logo" :src="company.picture" alt="">

    <div class="company-links__item">
      <div class="company-links__title">
        Сайт:
      </div>
      <a :href="company.url" target="_blank" class="company-links__link">
        {{ company.url }}
      </a>
    </div>
    <div class="company-links__item">
      <div class="company-links__title">
        E-mail:
      </div>
      <a :href="`mailto:${company.contact_email}`" class="company-links__link">
        {{ company.contact_email }}
      </a>
    </div>
    <div class="company-links__item">
      <div class="company-links__title">
        Телефон:
      </div>
      <a :href="`tel:${company.contact_phone}`" class="company-links__link">
        {{ company.contact_phone }}
      </a>
    </div>
    <div class="company-links__item">
      <div class="company-links__title">
        Telegram:
      </div>
      <a :href="`t.me/${company.contact_telegram}`" class="company-links__link">
        @{{ company.contact_telegram }}
      </a>
    </div>
    <div class="company-links__item">
      <div class="company-links__title">
        WhatsApp:
      </div>
      <div class="company-links__link">
        @{{ company.contact_whatsapp }}
      </div>
    </div>
    <div class="company-links__item">
      <div class="company-links__title">
        Skype:
      </div>
      <div class="company-links__link">
        @{{ company.contact_skype }}
      </div>
    </div>
    <div class="company-links__item">
      <div class="company-links__title">
        Офис:
      </div>
      <div class="company-links__link">
        {{ company.country.title }}, {{ company.city.title }}
      </div>
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

.company-links {
  display: flex;
  flex-direction: column;

  &__logo {
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
  }

  &__item {
    font-size: 14px;
    line-height: 150%;
    color: #808080;
    padding: 10px;
  }
  &__link{
    color: black;
  }

  a {
    color: $main-color;
  }
}

@media (max-width: 870px) {
  .company-links{
    margin: -40px 40px;
    &__logo{
      display: none;
    }
  }
}
</style>
