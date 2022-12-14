<script setup lang="ts"></script>

<template>
  <section class="blog">
    <header class="blog__header">
      <AtomMiddleTitle class="blog__title">Our blog</AtomMiddleTitle>
      <div class="blog__arrows">
        <AtomButton class="blog__arrow"> <span class="blog__arrow-left i-ic-outline-arrow-right-alt" /></AtomButton>
        <AtomButton class="blog__arrow"> <span class="blog__right i-ic-outline-arrow-right-alt" /></AtomButton>
      </div>
    </header>

    <main class="blog__content">
      <MoleculeBlogCard
        v-for="card in 3"
        :key="card"
        title="Machine Learning"
        date="22 June 2022"
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
        :link-info="{ label: 'Read more', to: '/' }"
      >
      </MoleculeBlogCard>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismHomeOurBlog.scss';
</style>
