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
    @apply w-full flex max-h-[75vh] min-h-[60vh] pt-10 pb-20 pl-6 pr-6 flex-col items-stretch gap-y-9;
    @apply sm:(pr-12 pl-12 pb-40 gap-y-12);
    @apply md:(flex-row flex-wrap justify-start gap-x-[6%] pb-60 pr-16);
    @apply 2xl:(gap-x-[5%] pl-3 pr-20 gap-y-15);
  }
}
</style>
