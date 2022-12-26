<script setup lang="ts">
type TCategory = {
  name: string
  link: string
}

interface ICategoryItem {
  category: TCategory
  subCategories?: ICategoryItem[]
}

const is4XlScreen = useMediaQuery(`(min-width: 2240px)`)

const categories: ICategoryItem[] = [
  {
    category: {
      name: 'Software development',
      link: '/d-software',
    },
    subCategories: [
      {
        category: { name: 'Server security', link: '/s-server' },
      },
      {
        category: { name: 'Embed security', link: '/s-embed' },
      },
    ],
  },
  {
    category: {
      name: 'Information security',
      link: '/s-info',
    },
    subCategories: [
      {
        category: { name: 'Server security', link: '/s-server' },
      },
      {
        category: { name: 'Embed security', link: '/s-embed' },
        subCategories: [
          {
            category: { name: 'Cheaps', link: '/s-chips' },
          },
          {
            category: { name: 'Navigation', link: '/s-navigation' },
          },
        ],
      },
    ],
  },
  {
    category: {
      name: 'Internet of things',
      link: '/d-software',
    },
  },
  {
    category: {
      name: 'Digital transformation',
      link: '/d-software',
    },
  },
  {
    category: {
      name: 'Healthcare IT',
      link: '/d-software',
    },
  },
]

const getCategories = computed(() => {
  if (!is4XlScreen.value) {
    categories.forEach((cat) => (cat.subCategories = undefined))
  }
  return categories
})
</script>

<template>
  <div class="blog-categories">
    <AtomSmallTitle class="blog-categories__title">Categories</AtomSmallTitle>
    <div relative>
      <AtomCategorySlider v-for="(category, idx) in getCategories" :key="idx" :root-category="category" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-categories {
  @apply flex flex-col gap-y-10;
}
</style>
