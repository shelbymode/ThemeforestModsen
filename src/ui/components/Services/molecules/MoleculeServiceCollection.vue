<script setup lang="ts">
import IconBrain3d from '/assets/images/svg-icons/3d/icon_brain_isometric_3d.svg?component'
import EmbedAnalytics3d from '/assets/images/svg-icons/3d/icon_trending_lines_isometric_3d.svg?component'
import AccessControl3d from '/assets/images/svg-icons/3d/icon_key_isometric_3d.svg?component'
import DataAnalytics3d from '/assets/images/svg-icons/3d/icon_data_area_isometric_3d.svg?component'
import BigData3d from '/assets/images/svg-icons/3d/icon_data_pie _isometric_3d.svg?component'
import AI3d from '/assets/images/svg-icons/3d/icon_bot _isometric_3d.svg?component'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const text =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.'

const servicesCardsCollection = [
  {
    title: computed(() => toCapitalizeEach(t(`common.machineLearning`))),
    icon: IconBrain3d,
    text,
    linkInfo: {
      label: computed(() => toCapitalize(t(`common.button.readMore`))),
      to: '/',
    },
  },
  {
    title: computed(() => toCapitalizeEach(t(`common.embedAnalytics`))),
    icon: EmbedAnalytics3d,
    text,
    linkInfo: {
      label: computed(() => toCapitalize(t(`common.button.readMore`))),
      to: '/',
    },
  },
  {
    title: computed(() => toCapitalizeEach(t(`common.accessControl`))),
    icon: AccessControl3d,
    text,
    linkInfo: {
      label: computed(() => toCapitalize(t(`common.button.readMore`))),
      to: '/',
    },
  },
  {
    title: computed(() => toCapitalizeEach(t(`common.dataAnalytics`))),
    icon: DataAnalytics3d,
    text,
    linkInfo: {
      label: computed(() => toCapitalize(t(`common.button.readMore`))),
      to: '/',
    },
  },
  {
    title: computed(() => toCapitalizeEach(t(`services.bigDataConsulting`))),
    icon: BigData3d,
    text,
    linkInfo: {
      label: computed(() => toCapitalize(t(`common.button.readMore`))),
      to: '/',
    },
  },
  {
    title: computed(() => toCapitalizeEach(t(`services.artificialIntelligence`))),
    icon: AI3d,
    text,
    linkInfo: {
      label: computed(() => toCapitalize(t(`common.button.readMore`))),
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
        :key="serviceCard.title.value"
        class="service-collection__card"
        :title="serviceCard.title.value"
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
