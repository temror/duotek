<template>
  <div
    v-if="showPagination"
    class="company-pagination"
  >
    <div
      v-for="number in pages"
      :key="number"
      class="pag"
      :style="number===pageComputed&&{
        backgroundColor: '#F7F7F7',
        color: '#808080'
      }"
      @click="()=>{changePage(number)}"
    >
      {{ number }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      isActive: {
        backgroundColor: '#F7F7F7',
        color: '#808080'
      }
    }
  },
  computed: {
    ...mapGetters(['pagination']),
    ...mapState(['companies', 'totalCount', 'per_page', 'query', 'page']),
    pageComputed () { return Number(this.page) },
    pages () {
      const arr = []
      for (let i = 0; i < this.pagination; i++) {
        arr[i] = i + 1
      }
      return arr
    },
    showPagination () { return this.totalCount > this.per_page }
  },
  mounted () {
    this.query.page && this.setPage(this.query.page)
  },
  methods: {
    ...mapMutations(['setSearchItem', 'setPage']),
    changePage (page) {
      this.setSearchItem('')
      this.setPage(page)
      this.$store.commit('setQuery', { page: `${page}` })
      this.$store.dispatch('getCompanies', { page: `${page}` })
      this.$router.push({ name: 'companies', query: { page: `${page}` } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../duotek-nuxt/assets/css/main";

.company-pagination {
  flex: 0 0 100px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pag {
    padding: 13px;
    margin: 4px;
    font-size: 16px;
    cursor: pointer;
    color: $main-color;
    border-radius: 4px;
    &:hover{
      color: $custom-red;
    }
  }
}
</style>
