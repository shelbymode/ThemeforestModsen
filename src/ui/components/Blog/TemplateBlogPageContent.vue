<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
const blogContent = ref<HTMLElement>()

const props = defineProps<{
  isHideOverscroll: boolean
  loadMoreBlogs: () => Promise<unknown>
}>()

useInfiniteScroll(
  blogContent,
  async () => {
    console.log('trigger')
    props.loadMoreBlogs()
  },
  { distance: 10 }
)
</script>

<template>
  <TemplatePageRestrictor class="template-blog">
    <section class="template-blog__categories">
      <slot name="menu-categories"></slot>
    </section>

    <section ref="blogContent" :class="{ 'overflow-y-scroll': !props.isHideOverscroll }" class="template-blog__content">
      <slot name="current-posts"></slot>
    </section>
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.template-blog {
  @apply flex flex-col justify-between items-start pt-5 pb-10;
  // .template-blog__categories

  &__categories {
    @apply w-full mt-5 mb-10;
  }

  // .template-blog__content

  &__content {
    @apply w-full flex min-h-[40vh] max-h-600px py-5 px-6 flex-col items-stretch gap-y-6;
    @apply sm:(px-12 max-h-800px py-10);
    @apply md:(flex-row flex-wrap py-15 max-h-800px justify-start gap-x-[6%] gap-y-9);
    @apply 2xl:(flex-row flex-wrap py-20 justify-start gap-x-[5%] px-20 gap-y-12);
  }
}
</style>
