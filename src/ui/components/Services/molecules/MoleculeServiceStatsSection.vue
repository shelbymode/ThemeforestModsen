<script setup lang="ts">
const labelStats = [
  { indicator: '1830+', text: 'Project executed' },
  { indicator: '834+', text: 'Satisfied customers' },
  { indicator: '390', text: 'Data management' },
]
</script>

<template>
  <section class="service-stats">
    <TemplatePageContainer class="service-stats-container">
      <AtomMiddleTitle class="service-stats__title">We provide services that guarantee your success</AtomMiddleTitle>

      <div class="service-stats__content">
        <div class="service-stats__stats">
          <AtomLabelStats
            v-for="labelStat in labelStats"
            :key="labelStat.text"
            class="service-stats__stat"
            :indicator="labelStat.indicator"
            :text="labelStat.text"
          />
        </div>

        <AtomText class="service-stats__text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
        </AtomText>
      </div>

      <AtomStatsClient />
    </TemplatePageContainer>
  </section>
</template>

<style lang="scss" scoped>
.service-stats {
  @apply grid place-items-center w-full;
  // .service-stats__title

  &__title {
  }

  // .service-stats__content

  &__content {
    @apply w-full flex items-center justify-between;
  }

  // .service-stats__stats

  &__stats {
    @apply flex items-center gap-x-5;
  }

  // .service-stats__text

  &__text {
    @apply max-w-135;
  }
}
.service-stats-container {
  @apply flex flex-col items-center gap-y-12;
}
</style>
