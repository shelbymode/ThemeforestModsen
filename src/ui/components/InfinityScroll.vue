<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'
import { useBlogsStore } from '~/application/store/useBlogsStore'

const blogsStore = useBlogsStore()
const data = ref()
const el = ref<HTMLElement>()

blogsStore.loadMoreBlogs(4).then((blogs) => {
  data.value = blogs
})

/* onMounted(() => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          await blogsStore.loadMoreBlogs(1).then((blogs) => {
            data.value = [...data.value, blogs]
          })

          observer.unobserve(entry.target)
          observer.observe(document.querySelector('.card-blog:last-child') as HTMLElement)
        }
      })
    },
    {
      threshold: 1,
      rootMargin: '300px',
    }
  )

  observer.observe(el.value as HTMLElement)
}) */

useInfiniteScroll(
  el,
  async () => {
    console.log('trigger')

    if (data.value.length < 9) {
      const newBlogs = await blogsStore.loadMoreBlogs(1)
      data.value = [...data.value, newBlogs]
    }
  },
  { distance: 100 }
)
</script>

<template>
  <div
    ref="el"
    class="border-4 border-black flex flex-col gap-y-3 max-h-600px w-300px m-auto overflow-y-scroll bg-gray-500 rounded"
  >
    <div v-for="item in data" :key="item.id" class="card-blog border bg-gray-500/5 rounded p-3">
      {{ item }}
    </div>
    <AtomVRippleLoader2 v-if="blogsStore.isLoading" />
  </div>
</template>

<style lang="scss" scoped></style>
