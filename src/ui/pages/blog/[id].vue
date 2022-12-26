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

      <TemplateBlogCurrentPageContent>
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

        <template #tags>
          <OrganismBlogTags :tags="tags" />
        </template>

        <template #subscribe>
          <MoleculeSubscribeSection />
        </template>
      </TemplateBlogCurrentPageContent>

      <MoleculeSubscribeSection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.blog-current {
  @apply flex flex-col items-center mt-20 bg-white;
}
</style>
