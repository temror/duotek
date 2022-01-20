export const state = () => ({
  darkTheme: false,
  searchItem: '',
  companies: [],
  definitions: [],
  selectedCompany: {},
  query: {},
  industry: '',
  specialization: '',
  page: 1,
  per_page: 10,
  totalCount: null
})
export const mutations = {
  setSearchItem (state, searchItem) {
    state.searchItem = searchItem
  },
  setDarkTheme (state, theme) {
    state.darkTheme = theme
  },
  setTotalCount (state, totalCount) {
    state.totalCount = totalCount
  },
  setCompanies (state, companies) {
    state.companies = companies
  },
  setCompany (state, company) {
    state.selectedCompany = company
  },
  setPage (state, page) {
    state.page = page
  },
  setIndustry (state, industry) {
    state.industry = industry
  },
  setSpecialization (state, specialization) {
    state.specialization = specialization
  },
  setDefinitions (state, definitions) {
    state.definitions = definitions
  },
  setQuery (state, query) {
    state.query = query
  }
}
export const getters = {
  pagination (state) {
    return Math.ceil(state.totalCount / state.per_page)
  }
}
export const actions = {
  async getCompanies ({ state, commit }, page) {
    try {
      let req = `http://api-test.duotek.ru/companies?per_page=${state.per_page}`
      state.query.page && page ? req += `&page=${state.query.page}` : req += '&page=1'
      if (state.query.search) {
        req += `&search=${state.query.search}`
      }
      if (state.query.industry) {
        req += `&industry=${state.query.industry}`
      }
      if (state.query.specialization) {
        req += `&specialization=${state.query.specialization}`
      }
      const response = await this.$http.$get(req)
      commit('setCompanies', response.data)
      commit('setTotalCount', response.meta.total)
    } catch (e) {}
  },
  async getCompany ({ state, commit }, id) {
    try {
      const response = await this.$http.$get(`http://api-test.duotek.ru/companies/info?id=${id}`)
      commit('setCompany', response.data)
    } catch (e) {}
  },
  async getDefinitions ({ state, commit }, query) {
    try {
      const response = await this.$http.$get('http://api-test.duotek.ru/definitions')
      commit('setDefinitions', response)
      query.industry && commit('setIndustry', response.Industry.filter(i => i.id === Number(query.industry))[0])
      query.specialization && commit('setSpecialization', response.CompanySpecialization.filter(i => i.id === Number(query.specialization))[0])
    } catch (e) {}
  }
}
