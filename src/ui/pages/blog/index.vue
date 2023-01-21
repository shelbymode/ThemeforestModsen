<script setup lang="ts">
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { useI18n } from 'vue-i18n'
import { ALL_CATEGORIES_NAME } from '~/application/store/useBlogsStore'
import { filterBlogsByCategoryUC } from '~/application/usecases/FilterBlogsByCategoryUC'
import { TBlogCategory } from '~/domain/blog'

const { locale } = useI18n()
const route = useRoute()
const LOAD_MORE_BLOGS_AMOUNT = 4
const INIT_BLOGS_AMOUNT = 4
const isHideOverscroll = ref(true)

const { blogsStore, changeBlogsDependsOnCategory, loadMoreBlogsClosure } = filterBlogsByCategoryUC(
  INIT_BLOGS_AMOUNT,
  LOAD_MORE_BLOGS_AMOUNT
)

async function initLoadingBlogs() {
  await blogsStore.loadBlogCategories()
  await blogsStore.loadMoreBlogs(INIT_BLOGS_AMOUNT, blogsStore.getSelectedBlogCategory)
  isHideOverscroll.value = false

  watch(
    () => blogsStore.getSelectedBlogCategory,
    async (newSelectedBlogCategory) => {
      blogsStore.allowTheScrolling()

      isHideOverscroll.value = true

      await changeBlogsDependsOnCategory(newSelectedBlogCategory as TBlogCategory)

      isHideOverscroll.value = false
    }
  )
}

initLoadingBlogs()
</script>

<template>
  <TemplatePage>
    <main class="blog">
      <TemplateNavLinksCenter :title="($t(`common.route.${(route.name as string).toLowerCase()}`))">
        <MoleculeNavLinks />
      </TemplateNavLinksCenter>

      <TemplateBlogPageContent :load-more-blogs="loadMoreBlogsClosure" :is-hide-overscroll="isHideOverscroll">
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
          <TransitionGroup name="blogs" mode="out-in" appear>
            <template v-if="blogsStore.getCurrentAmountBlogs > 0">
              <div v-for="(blog, idx) in blogsStore.getCurrentBlogs" :key="blog.id" class="blog__card">
                <MoleculeBlogCard
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
              </div>
            </template>
          </TransitionGroup>
          <AtomVRippleLoader2 v-if="blogsStore.getIsLoading" class="mx-a" />
        </template>
      </TemplateBlogPageContent>

      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.blogs-enter-active,
.blogs-leave-active {
  transition: all 0.4s ease-out;
}

.blogs-enter-from,
.blogs-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.blogs-leave-active {
  display: none;
  // position: absolute;
}

.blog {
  @apply flex flex-col h-full items-center mt-20 bg-[#F5F5F5];
  // .blog__card
  &__card {
    @apply md:w-[47%];
    @apply 2xl:w-3/10;
  }
}
</style>
