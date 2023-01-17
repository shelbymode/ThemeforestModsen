<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { useI18n } from 'vue-i18n'
import { useBlogsStore } from '~/application/store/useBlogsStore'

const { locale } = useI18n()
const route = useRoute()
const blogsStore = useBlogsStore()

function loadBlogs() {
  blogsStore.loadAllBlogs()
}

loadBlogs()
</script>

<template>
  <TemplatePage>
    <main class="blog">
      <TemplateNavLinksCenter :title="($t(`common.route.${(route.name as string).toLowerCase()}`))">
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
          <template v-if="!blogsStore.getIsLoading">
            <MoleculeBlogCard
              v-for="(blog, idx) in blogsStore.getAllBlogs"
              :key="blog.id"
              class="blog__card"
              :title="toCapitalize($t(`blogs.${useChangeCase(blog.title, 'camelCase').value}`))"
              :date="
                $d(blog.date_created, {
                  dateStyle: 'long',
                })
              "
              :tags-info="blog.tags.reduce((acc, cur) => ({ ...acc, [cur]: true }), {})"
              :text="blog.text"
              :link-info="{ label: 'Read more', to: `/${locale}/blog/${idx}` }"
            />
          </template>
          <AtomVRippleLoader2 v-else class="mx-a" />
        </template>
      </TemplateBlogPageContent>

      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.blog {
  @apply flex flex-col items-center mt-20 bg-[#F5F5F5];
  // .blog__card
  &__card {
    box-shadow: 2px 2px 10px #ccc;
    @apply md:max-w-[47%];
    @apply 2xl:max-w-3/10;
  }
}
</style>
