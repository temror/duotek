import { useRouter, useStore } from '@nuxtjs/composition-api'

export const useSearch = () => {
  const store = useStore()
  const router = useRouter()
  const setSearch = (event) => {
    store.commit('setSearchItem', event.target.value)
  }
  const setSortedCompanies = () => {
    const query = { ...store.state.query }
    if (store.state.searchItem.length === 0) {
      clearSearch()
    } else if (store.state.searchItem.length !== 1) {
      query.search = store.state.searchItem
      if (query.page) {
        delete query.page
        store.commit('setPage', 1)
      }
      store.commit('setQuery', query)
      store.dispatch('getCompanies')
      router.push({
        name: 'companies',
        query
      })
    }
  }
  const clearSearch = () => {
    const query = { ...store.state.query }
    if (store.state.query.search) {
      delete query.search
      store.commit('setQuery', query)
      store.commit('setSearchItem', '')
      store.dispatch('getCompanies')
      router.push({
        name: 'companies',
        query
      })
    } else {
      store.commit('setSearchItem', '')
    }
  }
  return {
    setSearch,
    setSortedCompanies,
    clearSearch
  }
}
