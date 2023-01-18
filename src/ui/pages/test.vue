<script setup></script>

<template>
  <div class="blog-category bg-red-100">
    <Suspense>
      <InfinityScroll />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
.blog-category {
  @apply flex flex-col items-start min-h-screen w-full;
}
</style>
