<template>
  <div>
    <LazyCardTemplate v-if="$fetchState.pending" />
    <div v-else class="company-info">
      <div class="container">
        <div class="company-info__row">
          <CompanyInfo :company="selectedCompany" />
          <Aside><CompanyLinks :company="selectedCompany" /></Aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch () {
    await this.$store.dispatch('getCompany', this.$route.params.id)
  },
  computed: {
    ...mapState(['selectedCompany', 'fetching'])
  },
  deactivated () {
    this.$store.commit('setDarkTheme', false)
  }
}
</script>

<style lang="scss" scoped>
.company-info{
  &__row{
    display: flex;
    margin: 0 auto;
  }
}
@media (max-width: 870px) {
  .company-info{
    &__row{
      flex-direction: column;
    }
  }
}
</style>
