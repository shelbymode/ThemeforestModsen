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
  <section class="service-links">
    <div class="service-link-container">
      <AtomDivideLink
        :links="[
          { name: 'Home', link: '/home' },
          { name: 'Services', link: '/services' },
        ]"
      />
    </div>
  </section>

  <section class="service-header">
    <div class="service-header__small-title">Services</div>
    <AtomBigTitle class="service-header__title">Data Analytics Services</AtomBigTitle>
    <AtomText class="service-header__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quaeab illo inventore.
    </AtomText>
  </section>

  <section class="service-collection">
    <div class="service-collection-wrapper">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.service-links {
  @apply flex items-center justify-center w-full py-5 dark:bg-secondary/95;
}

.service-link-container {
  @apply flex w-full items-start max-w-[57.8125%];
}

.service-header {
  @apply max-w-[730px] w-full flex flex-col items-center gap-y-4 mt-25;
  // .service-header__small-title

  &__small-title {
    @apply text-primary font-bold text-base;
  }

  // .service-header__title

  &__title {
  }

  // .service-header__text

  &__text {
  }
}
.service-collection {
  @apply grid place-items-center w-full py-35;
  &__card {
    @apply min-w-[470px] p-0;
  }
}
.service-collection-wrapper {
  @apply flex w-full justify-center max-w-[57.8125%] flex-wrap gap-x-26 gap-y-22;
}
</style>
