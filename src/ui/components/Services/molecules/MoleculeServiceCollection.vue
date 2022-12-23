<script setup lang="ts">
import IconBrain3d from '/assets/images/svg-icons/3d/icon_brain_isometric_3d.svg?component'
import EmbedAnalytics3d from '/assets/images/svg-icons/3d/icon_trending_lines_isometric_3d.svg?component'
import AccessControl3d from '/assets/images/svg-icons/3d/icon_key_isometric_3d.svg?component'
import DataAnalytics3d from '/assets/images/svg-icons/3d/icon_data_area_isometric_3d.svg?component'
import BigData3d from '/assets/images/svg-icons/3d/icon_data_pie _isometric_3d.svg?component'
import AI3d from '/assets/images/svg-icons/3d/icon_bot _isometric_3d.svg?component'

const text =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.'

const servicesCardsCollection = [
  {
    title: 'Machine Learning',
    icon: IconBrain3d,
    text,
    linkInfo: {
      label: 'Read more',
      to: '/',
    },
  },
  {
    title: 'Embed analytics',
    icon: EmbedAnalytics3d,
    text,
    linkInfo: {
      label: 'Read more',
      to: '/',
    },
  },
  {
    title: 'Access control',
    icon: AccessControl3d,
    text,
    linkInfo: {
      label: 'Read more',
      to: '/',
    },
  },
  {
    title: 'Data analytics',
    icon: DataAnalytics3d,
    text,
    linkInfo: {
      label: 'Read more',
      to: '/',
    },
  },
  {
    title: 'Big data consulting',
    icon: BigData3d,
    text,
    linkInfo: {
      label: 'Read more',
      to: '/',
    },
  },
  {
    title: 'Artificial intelligence',
    icon: AI3d,
    text,
    linkInfo: {
      label: 'Read more',
      to: '/',
    },
  },
]
</script>

<template>
  <section class="service-collection">
    <TemplatePageRestrictor class="service-collection-container">
      <MoleculeServiceCard
        v-for="serviceCard in servicesCardsCollection"
        :key="serviceCard.title"
        class="service-collection__card"
        :title="serviceCard.title"
        :text="serviceCard.text"
        :link-info="serviceCard.linkInfo"
      >
        <template #icon>
          <component :is="serviceCard.icon"></component>
        </template>
      </MoleculeServiceCard>
    </TemplatePageRestrictor>
  </section>
</template>

<style lang="scss" scoped>
.service-collection {
  @apply grid place-items-center w-full py;
  &__card {
    @apply min-w-[470px] p-0;
  }
}
.service-collection-container {
  @apply flex justify-center flex-wrap gap-x-26 gap-y-22 px-5;
}
</style>
