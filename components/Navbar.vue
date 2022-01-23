<template>
  <div class="navbar" :style="activeMenu && {display:'flex'}" @click="$emit('changeMenu',false)">
    <ul class="navbar__content" @click.stop>
      <li
        v-for="item in navbarItems"
        :key="item.title"
        @click="$emit('changeMenu',false)"
      >
        <NuxtLink
          to=""
          :class="{dark: theme}"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
    <span class="navbar__log">
      <NuxtLink to="" :class="{dark: theme}">Вход и регистрация</NuxtLink>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    activeMenu: {
      type: Boolean
    }
  },
  data () {
    return {
      navbarItems: [
        { title: 'Тендеры', url: '/' },
        { title: 'Компании', url: '/' },
        { title: 'Продукты', url: '/' },
        { title: 'Кейсы', url: '/' },
        { title: 'Блог', url: '/' }
      ]
    }
  },
  computed: {
    theme () { return this.$store.state.darkTheme }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/main";
.navbar {
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 1s;
  a{
    @if background-color == $main-color{
      color: white;
    }
    display: block;
    padding: 10px;
    text-decoration: none;
    color: $main-color;
    font-size: 16px;
    line-height: 150%;
    transition-duration: 400ms;
    &:hover{
      border-bottom: 1px solid $main-color;
      opacity: 0.5;
      transition-duration: 400ms;
    }
  }
  .dark{
    color: white;
  }
  &__content {
    display: flex;
    list-style-type: none;
    li{
      padding: 10px;
    }
  }
}
@media (max-width: 870px) {
  .navbar{
    display: none;
    flex-direction: column;
    background-color: #030953;
    justify-content: space-around;
    transition-duration: 1s;
    &__content{
      display: flex;
      flex-direction: column;
    }
    li{
      text-align: center;
    }
    a{
      color: lightgrey;
      font-size: 25px;
      &:hover{
        background-color: lightgrey;
        color: #030953;
      }
    }
  }
}
</style>
