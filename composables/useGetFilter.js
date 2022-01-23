import { useRouter, useStore } from '@nuxtjs/composition-api'

export const useGetFilter = () => {
  const store = useStore()
  const router = useRouter()

  const setResults = (query, result, filter) => {
    store.commit('setQuery', query)
    switch (filter) {
      case 'industry':
        store.commit('setIndustry', result)
        store.commit('setViewIndustry', false)
        break
      case 'specialization':
        store.commit('setSpecialization', result)
        store.commit('setViewSpecialization', false)
    }
    store.dispatch('getCompanies')
    router.push({
      name: 'companies',
      query
    })
  }

  const getIndustry = (industry) => {
    const query = { ...store.state.query }
    query.industry = industry.id
    if (query.page) {
      delete query.page
      store.commit('setPage', 1)
    }
    setResults(query, industry, 'industry')
  }
  const clearIndustry = () => {
    const query = { ...store.state.query }
    delete query.industry
    setResults(query, null, 'industry')
  }
  const getSpecialization = (specialization) => {
    const query = { ...store.state.query }
    query.specialization = specialization.id
    if (query.page) {
      delete query.page
      store.commit('setPage', 1)
    }
    setResults(query, specialization, 'specialization')
  }
  const clearSpecialization = () => {
    const query = { ...store.state.query }
    delete query.specialization
    setResults(query, null, 'specialization')
  }
  return {
    getIndustry,
    getSpecialization,
    clearSpecialization,
    clearIndustry
  }
}
