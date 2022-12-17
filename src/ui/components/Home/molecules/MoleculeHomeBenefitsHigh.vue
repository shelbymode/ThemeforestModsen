<script setup lang="ts">
import BrainIcon from '/assets/images/svg-icons/benefits/icon-brain.svg?component'
import AccessControlIcon from '/assets/images/svg-icons/benefits/icon-access-key.svg?component'

const machineLearningCard = {
  title: 'The benefits of Ensome',
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
}
const accessControlCard = {
  title: 'Access control',
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
}
</script>

<template>
  <div class="benefits__high-wrapper">
    <MoleculeServiceCard class="benefits__card" :title="machineLearningCard.title" :text="machineLearningCard.text">
      <template #icon>
        <BrainIcon />
      </template>
    </MoleculeServiceCard>

    <MoleculeServiceCard class="benefits__card" :title="accessControlCard.title" :text="accessControlCard.text">
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
    @apply flex flex-col gap-y-7 translate-y--6;
  }
}
</style>
