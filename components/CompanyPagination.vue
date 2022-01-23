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
import { mapMutations, mapState } from 'vuex'
import { usePagination } from '../composables/usePagination'

export default {
  setup () {
    const { pages, pageComputed, showPagination, changePage } = usePagination()
    return { pages, pageComputed, showPagination, changePage }
  },
  data () {
    return {
      isActive: {
        backgroundColor: '#F7F7F7',
        color: '#808080'
      }
    }
  },
  computed: { ...mapState(['query']) },
  mounted () { this.query.page && this.setPage(this.query.page) },
  methods: {
    ...mapMutations(['setPage'])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/main";

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

    &:hover {
      color: $custom-red;
    }
  }
}
</style>
