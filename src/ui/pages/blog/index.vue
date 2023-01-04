<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()

</script>

<template>
  <TemplatePage>
    <main class="blog">
      <TemplateNavLinksCenter :title="toCapitalize($t(`common.route.${(route.name as string).toLowerCase()}`))">
        <MoleculeNavLinks />
      </TemplateNavLinksCenter>

      <TemplateBlogPageContent>
        <template #menu-categories>
          <MoleculeBlogCategory />
        </template>
        <template #blog-title>Discover new things with Ensome blog</template>
        <template #blog-text
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo.</template
        >
        <template #current-posts>
          <MoleculeBlogCard
            v-for="(card, idx) in 5"
            :key="card"
            class="blog__card shadow-card-3"
            :title="toCapitalizeEach($t(`common.machineLearning`))"
            date="22 June 2022"
            :tags-info="{ App: true, CIO: true, Future: true }"
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
            :link-info="{ label: 'Read more', to: `/${locale}/blog/${idx}` }"
          />
        </template>
      </TemplateBlogPageContent>

      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.blog {
  @apply flex flex-col items-center mt-20 bg-white;
  // .blog__card
  &__card {
    @apply md:max-w-[47%];
    @apply 2xl:max-w-3/10;
  }
}
</style>
