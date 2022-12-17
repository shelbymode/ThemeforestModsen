<script setup lang="ts">
type TCategory = {
  name: string
  link: string
}

interface ICategoryItem {
  category: TCategory
  subCategories?: ICategoryItem[]
}

const props = defineProps<{
  rootCategory: ICategoryItem
}>()

const isRevealed = ref(false)
</script>

<template>
  <RouterLink
    :to="props.rootCategory.category.link"
    class="category-slider"
    @mouseenter="isRevealed = true"
    @mouseleave="isRevealed = false"
  >
    <button class="category-slider__button">
      {{ props.rootCategory.category.name }}
    </button>

    <span v-if="props.rootCategory.subCategories" class="category-slider__icon" />

    <Transition name="side-slader" mode="out-in">
      <template v-if="props.rootCategory.subCategories && isRevealed">
        <ul class="category-slider__parent">
          <AtomCategorySlider
            v-for="rootCategory in props.rootCategory.subCategories"
            :key="rootCategory.category.name"
            class="category-slider__child"
            :root-category="rootCategory"
          />
        </ul>
      </template>
    </Transition>
  </RouterLink>
</template>

<style lang="scss" scoped>
.category-slider {
  @apply flex w-full relative border-b text-xl text-black px-7 py-5 gap-x-3 border-b-cGrey justify-between transition-300;
  @apply hover:(text-white bg-black);

  // .category-slider__button

  &__button {
    @apply w-max;
    @apply hover:cursor-pointer;
  }

  // .category-slider__icon

  &__icon {
    @apply i-fluent-chevron-right-24-filled text-3xl text-black duration-300;
  }

  // .category-slider__parent

  &__parent {
    @apply absolute top-[0%] left-[100%];
  }

  // .category-slider__child

  &__child {
  }
}

.category-slider:hover > .category-slider__icon {
  @apply bg-white;
}

.side-slader-enter-active,
.side-slader-leave-active {
  transition: all 0.3s ease;
}

.side-slader-enter-from,
.side-slader-leave-to {
  @apply translate-x-[100%] opacity-0;
}
</style>
