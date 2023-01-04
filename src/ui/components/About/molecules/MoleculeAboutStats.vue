<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const isLgScreen = useMediaQuery(`(min-width: 1024px)`)
const { t } = useI18n()
const labelStatsBig = [
  { indicator: '1830+', text: toCapitalize(t(`common.projectExecuted`)) },
  { indicator: '834+', text: toCapitalize(t(`common.satisfiedCustomers`)) },
  { indicator: '390', text: toCapitalize(t(`common.dataManagement`)) },
  { indicator: '834', text: toCapitalize(t(`common.satisfiedCustomers`)) },
]

const labelStatsSmall = [
  { indicator: '1830+', text: toCapitalize(t(`common.projectExecuted`)) },
  { indicator: '834+', text: toCapitalize(t(`common.satisfiedCustomers`)) },
  { indicator: '390', text: toCapitalize(t(`common.dataManagement`)) },
]

const currentLabelStats = computed(() => (isLgScreen.value ? labelStatsBig : labelStatsSmall))
</script>

<template>
  <section class="about-stats">
    <TemplatePageRestrictor class="about-stats-container">
      <AtomBigTitle class="about-stats__title">
        {{
          toCapitalize(
            $t(`about.companyInNumbers`, {
              company: 'Ensome',
            })
          )
        }}
      </AtomBigTitle>
      <div class="about-stats__stats">
        <template v-for="labelStat in currentLabelStats" :key="labelStat.text">
          <AtomLabelStats class="about-stats__stat" :indicator="labelStat.indicator" :text="labelStat.text" />
          <div v-if="isLgScreen" class="about-stats__stat-divider"></div>
        </template>
      </div>
    </TemplatePageRestrictor>
  </section>
</template>

<style lang="scss" scoped>
.about-stats {
  @apply grid w-full place-items-center py-10 px-6 bg-cBackground;
  // .about-stats__title

  &__title {
  }

  // .about-stats__stats

  &__stats {
    @apply flex justify-around gap-x-6 items-start;
  }

  // .about-stats__stat

  &__stat {
  }

  &__stat-divider {
    width: 92px;
    height: 0px;
    border: 1px solid #c9dcec;
    transform: rotate(90deg);
    &:last-of-type {
      display: none;
    }
  }
}

.about-stats-container {
  @apply flex flex-col items-center gap-y-9 md:gap-y-15;
}
</style>
