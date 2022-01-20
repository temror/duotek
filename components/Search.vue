<template>
  <div class="search">
    <div class="search__row">
      <input
        class="search__input"
        :value="searchItem"
        placeholder="Поиск продукта или отрасли"
        type="text"
        @input="setSearch"
        @keyup.enter="setSortedCompanies"
      >
      <span
        v-if="searchItem"
        class="search__clear"
        @click.stop="clearSearch"
      >+</span>
      <button
        class="search__button"
        @click="setSortedCompanies"
      >
        Найти
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['searchItem', 'totalCount', 'per_page', 'page', 'query'])
  },
  mounted () {
    this.query.search && this.setSearchItem(this.query.search)
  },
  methods: {
    ...mapMutations(['setSearchItem', 'setSortedCompanies', 'setQuery', 'setPage']),
    ...mapActions(['getCompanies']),
    setSearch (event) {
      return this.setSearchItem(event.target.value)
    },
    setSortedCompanies () {
      if (this.searchItem.length === 0) { this.clearSearch() } else if (this.searchItem.length !== 1) {
        const newQuery = { ...this.query }
        newQuery.search = this.searchItem
        if (newQuery.page) {
          delete newQuery.page
          this.setPage('1')
        }
        this.setQuery(newQuery)
        this.getCompanies()
        this.$router.push({ name: 'companies', query: newQuery })
      }
    },
    clearSearch () {
      if (this.query.search) {
        const newQuery = { ...this.query }
        delete newQuery.search
        this.setQuery(newQuery)
        this.setSearchItem('')
        this.getCompanies()
        this.$router.push({ name: 'companies', query: newQuery })
      } else {
        this.setSearchItem('')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../duotek-nuxt/assets/css/main";

.search {
  padding: 10px;

  &__row {
    display: flex;
    height: 40px;
    padding-bottom: 20px;
    position: relative;
    align-items: center;
  }

  &__input {
    flex: 1 1 auto;
    padding: 10px 40px;
    border: 1px solid #E5E5E5;
    border-radius: 4px 0 0 4px;
    background: url("../../duotek-nuxt/assets/icons/serch.svg") no-repeat 1% 50%;
  }

  &__clear{
    position: absolute;
    right: 80px;
    transform: rotate(45deg);
    padding: 0 10px;
    font-size: 30px;
    color: grey;
    z-index: 3;
    cursor: pointer;
    &:hover{
      color: #EF3E4A;
    }
  }

  &__button {
    flex: 0 0 80px;
    padding: 10px;
    background-color: $main-color;
    color: white;
    border-radius: 0 4px 4px 0;
    border: none;
  }
}
</style>
