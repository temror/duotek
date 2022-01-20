<template>
  <div class="companies-list">
    <LazyFetchingTemplate
      v-if="$fetchState.pending"
    />
    <LazyClearPage v-if="companies.length===0" />
    <transition-group v-else name="list">
      <CompanyCard
        v-for="company in companies"
        :key="company.id"
        :company="company"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch () {
    await this.$store.commit('setQuery', this.query)
    await this.$store.dispatch('getCompanies')
  },
  computed: {
    ...mapState(['companies']),
    query () { return this.$route.query }
  }
}
</script>

<style scoped>
</style>
