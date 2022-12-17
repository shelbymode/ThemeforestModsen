<script setup lang="ts">
const labelStats = [
  { indicator: '1830+', text: 'Project executed' },
  { indicator: '834+', text: 'Satisfied customers' },
  { indicator: '390', text: 'Data management' },
]
</script>

<template>
  <TemplatePageContainer class="stats">
    <AtomMiddleTitle class="stats__title">We provide services that guarantee your success</AtomMiddleTitle>

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
  </TemplatePageContainer>
</template>

<style lang="scss" scoped>
.stats {
  @apply flex flex-col items-start pt-30 pb-20;

  // .stats__title

  &__title {
    @apply w-full text-center;
  }

  // .stats__content

  &__content {
    @apply flex w-full justify-between items-start py-16;
  }

  // .stats__stats

  &__stats {
    @apply flex items-start gap-x-6;
  }

  // .stats__text

  &__text {
    @apply max-w-135;
  }
}
</style>
