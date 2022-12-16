<script setup lang="ts">
import EmbedAnalyticsIcon from '/assets/images/svg-icons/benefits/icon-embed-analytics.svg?component'
import DataAnalyticsIcon from '/assets/images/svg-icons/benefits/icon-data-analytics.svg?component'

const embedAnalyticsCard = {
  title: 'Embed analytics',
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo..',
}
const dataAnalyticsCard = {
  title: 'Data analytics',
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo..',
}
</script>

<template>
  <div class="benefits__low-wrapper">
    <MoleculeServiceCard class="benefits__card" :title="embedAnalyticsCard.title" :text="embedAnalyticsCard.text">
      <template #icon>
        <EmbedAnalyticsIcon />
      </template>
    </MoleculeServiceCard>

    <MoleculeServiceCard class="benefits__card" :title="dataAnalyticsCard.title" :text="dataAnalyticsCard.text">
      <template #icon>
        <DataAnalyticsIcon />
      </template>
    </MoleculeServiceCard>
  </div>
</template>

<style lang="scss" scoped>
.benefits {
  // .benefits__card

  &__card {
    @apply bg-white shadow-card-3;
  }

  // .benefits__low-wrapper

  &__low-wrapper {
    @apply flex flex-col gap-y-7 translate-y-6;
  }
}
</style>
