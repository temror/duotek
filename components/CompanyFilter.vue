<template>
  <div class="company-filter">
    <div class="company-filter__block">
      <p>Отрасль</p>
      <div class="sortArea">
        <div
          class="sortItem sortItem_main"
          :style="!industry && {color: 'grey'}"
          @click="showIndustry"
        >
          {{ industry ? industry.title : 'Вся индустрия' }}
          <div class="sortItem__icons">
            <span
              v-if="industry"
              class="sortItem__clear"
              @click.stop="clearIndustry"
            >+</span>
            <img
              :style="viewIndustry&&{transform: 'rotate(180deg)'}"
              style="transition-duration: 300ms"
              src="@/assets/icons/sort-icon.svg"
              alt=""
            >
          </div>
        </div>
        <transition name="sortGroup">
          <div
            v-if="viewIndustry"
            class="sortGroup"
            style="z-index: 1000"
          >
            <div
              v-for="industry in definitions.Industry"
              :key="industry.id"
              class="sortItem"
              @click="getIndustry(industry)"
            >
              {{ industry.title }}
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="company-filter__block">
      <p>Специализация</p>
      <div class="sortArea">
        <div
          class="sortItem sortItem_main"
          :style="!specialization && {color: 'grey'}"
          @click="showSpecialization"
        >
          {{ specialization ? specialization.title : 'Вся  специализация' }}
          <div class="sortItem__icons">
            <span
              v-if="specialization"
              class="sortItem__clear"
              @click.stop="clearSpecialization"
            >+</span>
            <img
              :style="viewSpecialization&&{transform: 'rotate(180deg)'}"
              style="transition-duration: 300ms"
              src="@/assets/icons/sort-icon.svg"
              alt=""
            >
          </div>
        </div>
        <transition name="sortGroup">
          <div
            v-if="viewSpecialization"
            class="sortGroup"
          >
            <div
              v-for="specialization in definitions.CompanySpecialization"
              :key="specialization.id"
              class="sortItem"
              @click="getSpecialization(specialization)"
            >
              {{ specialization.title }}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { useShowFilter } from '../composables/useShowFilter'
import { useGetFilter } from '../composables/useGetFilter'

export default {
  setup (props) {
    const { showIndustry, showSpecialization } = useShowFilter()
    const { getIndustry, getSpecialization, clearSpecialization, clearIndustry } = useGetFilter()
    return { showIndustry, showSpecialization, getIndustry, getSpecialization, clearSpecialization, clearIndustry }
  },
  async fetch () {
    await this.getDefinitions(this.query)
  },
  computed: {
    ...mapState(['definitions', 'industry', 'query', 'specialization', 'viewSpecialization', 'viewIndustry'])
  },
  methods: {
    ...mapActions(['getDefinitions'])
  }
}
</script>

<style lang="scss" scoped>
.company-filter {
  margin: 10px 10px 0 30px;
  padding: 20px 18px;
  background: #F7F7F7;
  border-radius: 4px;

  &__block {
    p {
      padding: 16px 0;
    }

    select {
      padding: 10px;
      width: 100%;
    }
  }
}

.sortItem {
  background-color: white;
  color: #1C1C1E;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &__clear {
    transform: rotate(45deg);
    padding: 0 10px;
    font-size: 30px;
    line-height: 16px;
    color: grey;
    z-index: 3;

    &:hover {
      color: #EF3E4A;
    }
  }

  &__icons {
    display: flex;
    justify-content: center;
  }

  &:hover {
    background: #d3d3d3;
    transition-duration: 100ms;
  }

  &_main {
    padding: 16px;
    border: 1px solid grey;
    z-index: -1;
    display: flex;
    align-items: center;

    &:hover {
      background: white;
    }
  }
}

.sortArea {
  position: relative;
}

.sortGroup {
  z-index: 1;
  position: absolute;
  border-radius: 4px;
  top: 48px;
  border: 1px solid grey;
  width: 100%;
}

.sortGroup-enter-active, .sortGroup-leave-active {
  transition: opacity 50ms;
}

.sortGroup-enter, .sortGroup-leave-to {
  opacity: 0;
}

@media (max-width: 870px) {
  .company-filter {
    margin: 20px;
  }
}
</style>
