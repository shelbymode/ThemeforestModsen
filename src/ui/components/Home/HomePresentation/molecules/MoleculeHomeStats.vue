<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const labelStats = [
  { indicator: '1830+', text: computed(() => t(`common.projectExecuted`)) },
  { indicator: '834+', text: computed(() => t(`common.satisfiedCustomers`)) },
  { indicator: '390', text: computed(() => t(`common.dataManagement`)) },
]
</script>

<template>
  <TemplatePageRestrictor class="stats">
    <AtomMiddleTitle class="stats__title">{{ $t(`common.statsTitle`) }}</AtomMiddleTitle>

    <div class="stats__content">
      <div class="stats__stats">
        <AtomLabelStats
          v-for="labelStat in labelStats"
          :key="labelStat.text"
          :indicator="labelStat.indicator"
          :text="labelStat.text"
        />
      </div>

      <AtomText class="stats__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </AtomText>
    </div>

    <AtomStatsClient />
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.stats {
  @apply flex flex-col items-start px-6 gap-y-6;
  @apply md:(gap-y-12);
  @apply xl:(gap-y-20);

  // .stats__title

  &__title {
    @apply w-full text-center;
  }

  // .stats__content

  &__content {
    @apply flex flex-col w-full gap-y-5 gap-x-8 justify-between items-start;
    @apply md:flex-row;
  }

  // .stats__stats

  &__stats {
    @apply flex w-full items-start justify-around gap-x-6;
  }

  // .stats__text

  &__text {
    @apply md:max-w-135;
  }
}
</style>
