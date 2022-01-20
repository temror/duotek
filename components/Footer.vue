<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__nav">
          <ul class="footer__nav-column">
            <li class="footer__title">
              Тендеры
            </li>
            <li class="footer__addBtn" :style="{backgroundColor:'$main-color'}">
              Добавить тендер
            </li>
            <li>Каталог товаров</li>
            <li>Работа с клиентами</li>
            <li>Маркетинг</li>
            <li>Финансы</li>
            <li>Управление проектами</li>
            <li>Управление бизнесом</li>
          </ul>
          <ul class="footer__nav-column">
            <li class="footer__title">
              Компании
            </li>
            <li class="footer__addBtn" :style="{backgroundColor:'$custom-red'}">
              Добавить компанию
            </li>
            <li>Рейтинги</li>
            <li>Отраслевая специализация</li>
            <li>Интеграторы</li>
            <li>Решения для бизнеса крепеж</li>
            <li>Разработка сайтов</li>
            <li>Мобильные приложения</li>
            <li>Онлайн-реклама</li>
            <li>Контент</li>
          </ul>
          <ul class="footer__nav-column">
            <li class="footer__title">
              Продукты
            </li>
            <li>Рейтинги</li>
            <li>По отраслям</li>
            <li>Работа с клиентами</li>
            <li>Управление проектами</li>
            <li>Маркетинг</li>
            <li>Финансы</li>
            <li>Управление бизнесом</li>
          </ul>
          <ul class="footer__nav-column">
            <li class="footer__title">
              Кейсы
            </li>
            <li>Автоматизация сантехников</li>
            <li>Автоматизация клининга</li>
            <li>Автоматизация СТО</li>
            <li>Автоматизация сантехников</li>
            <li>Автоматизация клининга</li>
            <li>Автоматизация СТО</li>
          </ul>
        </div>
        <div class="footer__network">
          <div class="footer__icons">
            <img src="@/assets/icons/facebook.svg" alt="">
            <img src="@/assets/icons/vk.svg" alt="">
            <img src="@/assets/icons/youtube.svg" alt="">
          </div>
          <div class="footer__about">
            <p>О проекте</p>
            <p>Пользовательское соглашение</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../duotek-nuxt/assets/css/main";
.footer {
  border-top: 1px solid #F2F2F2;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 14px;
  line-height: 160%;
  color: #333333;
  margin-bottom: 90px;

  &__nav {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
  }

  &__title {
    color: black;
    font-size: 16px;
    font-family: Rubik, sans-serif;
  }

  &__addBtn {
    padding: 5px 20px;
    border-radius: 4px;
    color: white;
    text-align: center;
  }

  li {
    padding: 8px 0;
  }

  &__network {
    display: flex;
    justify-content: space-between;
  }

  &__about {
    display: flex;
    color: #808080;
    p{
      margin-left: 15px;
    }
  }
}
@media (max-width: 870px) {
  .footer{
    display: none;
  }
}
</style>
