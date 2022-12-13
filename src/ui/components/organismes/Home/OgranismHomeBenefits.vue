<script setup lang="ts">
import BrainIcon from '/assets/images/svg-icons/benefits/icon-brain.svg?component'
import AccessControlIcon from '/assets/images/svg-icons/benefits/icon-access-key.svg?component'
import EmbedAnalyticsIcon from '/assets/images/svg-icons/benefits/icon-embed-analytics.svg?component'
import DataAnalyticsIcon from '/assets/images/svg-icons/benefits/icon-data-analytics.svg?component'

const machineLearningCard = {
  title: 'The benefits of Ensome',
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
}
const accessControlCard = {
  title: 'Access control',
  text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
}
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
  <section class="section-benefits">
    <div class="section-benefits__content">
      <h3 class="section-benefits__title">The benefits of Ensome</h3>
      <p class="section-benefits__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </div>

    <div class="section-benefits__cards">
      <div class="section-benefits__high-wrapper">
        <MoleculeServiceCard :title="machineLearningCard.title" :text="machineLearningCard.text">
          <template #icon>
            <BrainIcon />
          </template>
        </MoleculeServiceCard>

        <MoleculeServiceCard :title="accessControlCard.title" :text="accessControlCard.text">
          <template #icon>
            <AccessControlIcon />
          </template>
        </MoleculeServiceCard>
      </div>

      <div class="section-benefits__low-wrapper">
        <MoleculeServiceCard :title="embedAnalyticsCard.title" :text="embedAnalyticsCard.text">
          <template #icon>
            <EmbedAnalyticsIcon />
          </template>
        </MoleculeServiceCard>

        <MoleculeServiceCard :title="dataAnalyticsCard.title" :text="dataAnalyticsCard.text">
          <template #icon>
            <DataAnalyticsIcon />
          </template>
        </MoleculeServiceCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismHomeBenefits.scss';
</style>
