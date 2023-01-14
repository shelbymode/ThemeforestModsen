<script setup lang="ts">
import EmbedAnalyticsIcon from '/assets/images/svg-icons/benefits/icon-embed-analytics.svg?component'
import DataAnalyticsIcon from '/assets/images/svg-icons/benefits/icon-data-analytics.svg?component'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const embedAnalyticsCard = {
  title: computed(() => t('common.embedAnalytics')),
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo..',
}
const dataAnalyticsCard = {
  title: computed(() => t('common.dataAnalytics')),
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo..',
}
</script>

<template>
  <div class="benefits__low-wrapper">
    <MoleculeServiceCard class="benefits__card" :title="embedAnalyticsCard.title.value" :text="embedAnalyticsCard.text">
      <template #icon>
        <EmbedAnalyticsIcon />
      </template>
    </MoleculeServiceCard>

    <MoleculeServiceCard class="benefits__card" :title="dataAnalyticsCard.title.value" :text="dataAnalyticsCard.text">
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
    @apply flex gap-y-7 gap-x-5;
    @apply md:(flex-col translate-y-6);
  }
}
</style>
