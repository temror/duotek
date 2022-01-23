import { computed, useRouter, useStore } from '@nuxtjs/composition-api'

export const usePagination = () => {
  const store = useStore()
  const router = useRouter()
  const pageComputed = computed(() => Number(store.state.page))
  const pages = computed(() => {
    const arr = []
    for (let i = 0; i < store.getters.pagination; i++) {
      arr[i] = i + 1
    }
    return arr
  })
  const showPagination = computed(() => store.state.totalCount > store.state.per_page)
  const changePage = (page) => {
    store.commit('setSearchItem', '')
    store.commit('setPage', page)
    store.commit('setQuery', { page: `${page}` })
    store.dispatch('getCompanies', { page: `${page}` })
    router.push({ name: 'companies', query: { page: `${page}` } })
  }
  return { pages, pageComputed, showPagination, changePage }
}
