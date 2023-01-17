<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { useI18n } from 'vue-i18n'
import { ALL_CATEGORIES_NAME, useBlogsStore } from '~/application/store/useBlogsStore'
import { TBlogCategory } from '~/domain/blog'

const { locale } = useI18n()
const route = useRoute()
const blogsStore = useBlogsStore()

async function loadBlogs() {
  return blogsStore.loadAllBlogs()
}

async function changeBlogsDependsOnCategory(category: TBlogCategory | typeof ALL_CATEGORIES_NAME) {
  let blogsCategory

  blogsStore.setLoading(true)

  /**
   * Need to load all blogs
   */
  if (category === ALL_CATEGORIES_NAME) {
    blogsCategory = blogsStore.getAllBlogs
  } else {
    blogsCategory = blogsStore.getBlogsByCategory(category)
  }

  blogsStore.setNewCurrentBlogs(blogsCategory)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  blogsStore.setLoading(false)
}
/**
 * Set watch after first loading cause during
 * first render by default load all categories
 */
loadBlogs().then(() => {
  watch(
    () => blogsStore.getSelectedBlogCategory,
    (newSelectedBlogCategory) => {
      changeBlogsDependsOnCategory(newSelectedBlogCategory as TBlogCategory)
    }
  )
})
</script>

<template>
  <TemplatePage>
    <main class="blog">
      <TemplateNavLinksCenter :title="($t(`common.route.${(route.name as string).toLowerCase()}`))">
        <MoleculeNavLinks />
      </TemplateNavLinksCenter>

      <TemplateBlogPageContent>
        <template #menu-categories>
          <MoleculeBlogCategory
            v-if="Object.keys(blogsStore.getBlogsCategories).length > 0 && blogsStore.getSelectedBlogCategory"
            :selected-blog-category="blogsStore.getSelectedBlogCategory"
            :update-category="blogsStore.setNewSelectedBlogCategory"
            :blogs-categories="blogsStore.getBlogsCategories"
            :all-categories-name="ALL_CATEGORIES_NAME"
          />
        </template>

        <template #blog-title>Discover new things with Ensome blog</template>

        <template #blog-text
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo.</template
        >

        <template #current-posts>
          <template v-if="!blogsStore.getIsLoading">
            <MoleculeBlogCard
              v-for="(blog, idx) in blogsStore.getCurrentBlogs"
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
