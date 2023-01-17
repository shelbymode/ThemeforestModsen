<script setup lang="ts">
import BrainIcon from '/assets/images/svg-icons/benefits/icon-brain.svg?component'
import AccessControlIcon from '/assets/images/svg-icons/benefits/icon-access-key.svg?component'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const machineLearningCard = {
  title: computed(() =>
    t('common.benefitsTitle', {
      company: 'Ensome',
    })
  ),
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
}
const accessControlCard = {
  title: computed(() => t('common.accessControl')),
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
}
</script>

<template>
  <div class="benefits__high-wrapper">
    <MoleculeServiceCard
      class="benefits__card"
      :title="machineLearningCard.title.value"
      :text="machineLearningCard.text"
    >
      <template #icon>
        <BrainIcon />
      </template>
    </MoleculeServiceCard>

    <MoleculeServiceCard class="benefits__card" :title="accessControlCard.title.value" :text="accessControlCard.text">
      <template #icon>
        <AccessControlIcon />
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

  // .benefits__high-wrapper

  &__high-wrapper {
    @apply flex gap-y-7 gap-x-5;
    @apply md:(flex-col translate-y--6);
  }
}
</style>
