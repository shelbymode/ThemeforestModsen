<script setup lang="ts">
const labelStats = [
  { indicator: '1830+', text: 'Project executed' },
  { indicator: '834+', text: 'Satisfied customers' },
  { indicator: '390', text: 'Data management' },
  { indicator: '834', text: 'Satisfied customers' },
]
</script>

<template>
  <section class="about-stats">
    <TemplatePageContainer class="about-stats-container">
      <AtomBigTitle class="about-stats__title">Ensome in numbers</AtomBigTitle>
      <div class="about-stats__stats">
        <template v-for="labelStat in labelStats" :key="labelStat.text">
          <AtomLabelStats class="about-stats__stat" :indicator="labelStat.indicator" :text="labelStat.text" />
          <div class="about-stats__stat-divider"></div>
        </template>
      </div>
    </TemplatePageContainer>
  </section>
</template>

<style lang="scss" scoped>
.about-stats {
  @apply grid w-full place-items-center py-25 bg-cBackground;
  // .about-stats__title

  &__title {
  }

  // .about-stats__stats

  &__stats {
    @apply flex justify-between items-center;
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
  @apply flex flex-col items-center gap-y-15;
}
</style>
