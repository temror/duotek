import { useStore } from '@nuxtjs/composition-api'

export const useShowFilter = () => {
  const store = useStore()
  const showSpecialization = () => {
    store.state.viewSpecialization
      ? store.commit('setViewSpecialization', false)
      : store.commit('setViewSpecialization', true)
    store.commit('setViewIndustry', false)
  }
  const showIndustry = () => {
    store.state.viewIndustry
      ? store.commit('setViewIndustry', false)
      : store.commit('setViewIndustry', true)
    store.commit('setViewSpecialization', false)
  }
  return {
    showIndustry,
    showSpecialization
  }
}
