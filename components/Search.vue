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
import { mapState } from 'vuex'
import { useSearch } from '../composables/useSearch'

export default {
  setup () {
    const { setSearch, setSortedCompanies, clearSearch } = useSearch()
    return { setSearch, setSortedCompanies, clearSearch }
  },
  computed: {
    ...mapState(['searchItem', 'query'])
  },
  mounted () {
    this.query.search && this.$store.commit('setSearchItem', this.query.search)
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/main";

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
    background: url("@/assets/icons/serch.svg") no-repeat 1% 50%;
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
