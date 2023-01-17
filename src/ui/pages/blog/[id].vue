<script setup lang="ts">
const tags = [
  'App',
  'Management',
  'CMR',
  'Big data',
  'Media',
  'Future',
  'CIO',
  'Startup',
  'Team',
  'Data',
  'Data analytics',
  'Information security',
  'Proxy',
]

// 2022 software development trends
</script>

<template>
  <TemplatePage>
    <main class="blog-current">
      <TemplateNavLinksCenter title="2022 software development trends explained with benefits">
        <MoleculeNavLinks />
      </TemplateNavLinksCenter>

      <TemplateBlogIdPageContent>
        <template #current-post>
          <OrganismBlogIdPost />
        </template>

        <template #related-post>
          <OrganismBlogIdRelatedPosts />
        </template>

        <template #search>
          <OrganismBlogIdSearch />
        </template>

        <template #popular>
          <OrganismBlogIdPopularPosts />
        </template>

        <template #categories>
          <OrganismBlogIdCategories />
        </template>

        <template #tags>
          <OrganismBlogIdTags :tags="tags" />
        </template>

        <template #subscribe>
          <MoleculeSubscribeSection />
        </template>
      </TemplateBlogIdPageContent>

      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.blog-current {
  @apply flex flex-col items-center mt-20 bg-white;
}
</style>
