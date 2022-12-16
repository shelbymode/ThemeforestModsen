<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="blog">
      <OrganismBlogPost />
      <TemplateBlogPageContent>
        <template #current-post>
          <OrganismBlogCurrentPost />
        </template>

        <template #related-post>
          <OrganismBlogRelatedPosts />
        </template>

        <template #search>
          <OrganismBlogSearch />
        </template>

        <template #popular>
          <OrganismBlogPopularPosts />
        </template>

        <template #categories>
          <OrganismBlogCategories />
        </template>

        <template #tags></template>
      </TemplateBlogPageContent>
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.blog {
  @apply flex flex-col items-center bg-white;
}
</style>
