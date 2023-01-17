<script setup lang="ts">
const inputValue = ref('')

const isEmpty = computed(() => inputValue.value === '')
</script>

<template>
  <div class="blog-search">
    <input
      v-model="inputValue"
      aria-label="Search"
      placeholder="Search..."
      class="blog-search__input-email"
      type="text"
    />
    <AtomButton :is-disabled="isEmpty" class="blog-search__button">Search</AtomButton>
  </div>
</template>

<style lang="scss" scoped>
.blog-search {
  @apply flex w-full items-center gap-x-3;
  // .blog-search__input-email

  &__input-email {
    @apply w-full py-4 pl-6 border font-semibold text-black border-cGrey rounded-md;
  }

  // .blog-search__button

  &__button {
    @apply bg-cBlack text-white py-4 text-base font-bold;
  }
}
</style>
