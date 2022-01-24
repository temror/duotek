<template>
  <header class="nav" :class="{nav_dark:theme}">
    <div class="container">
      <nav class="nav__content">
        <Logo />
        <Navbar class="navbar" :active-menu="activeMenu" @changeMenu="changeMenu" />
        <Hamburger
          :active-menu="activeMenu"
          class="hamburger"
          @changeMenu="changeMenu"
        />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      activeMenu: false
    }
  },
  computed: {
    theme () { return this.$store.state.darkTheme }
  },
  methods: {
    changeMenu (menu) {
      this.activeMenu = menu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/main";
.nav{
  border-bottom: 1px solid #F2F2F2;
  margin-bottom: 60px;
  &__content{
    display: flex;
    padding: 10px;
    align-items: center;
  }
}
.nav_dark{
  border-bottom: none;
  background-color: $main-color;
}
.hamburger{
  display: none;
  z-index: 2000;
}
@media (max-width: 870px) {
  .nav{
    margin-bottom: 20px;
    &__content{
      justify-content: space-between;
    }
  }
  .navbar{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  .hamburger{
    display: block;
    cursor: pointer;
  }
}
</style>
