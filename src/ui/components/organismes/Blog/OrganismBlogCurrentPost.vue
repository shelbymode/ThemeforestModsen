<script setup lang="ts"></script>

<template>
  <section class="current-post">
    <figure>
      <img class="current-post__image" src="https://api.lorem.space/image/fashion?w=635&h=330&hash=tugy9511" alt="" />
      <AtomBlogImageCaption class="current-post__caption" date="22 June 2020" author="William Pond" />
    </figure>
    <AtomMiddleTitle class="current-post__title">
      2022 software development trends explained with benefits
    </AtomMiddleTitle>
    <AtomText class="current-post__text">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
      corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis “Vivamus lectus enim, convallis nec
      dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.
    </AtomText>

    <AtomText class="current-post__text">
      Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim pretium, elit
      magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi, sed
      <span class="current-post__mega-special-text">blandit.</span>
    </AtomText>

    <AtomText class="current-post__text">
      Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus.
      Integer enim elit, tincidunt aliq uam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo
      libero. Praesent mollis velit ac accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.
    </AtomText>

    <blockquote class="current-post__quote">
      “Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula
      id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”
    </blockquote>

    <AtomText class="current-post__text">
      Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.
      <span class="current-post__special-text">
        Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis
        tortor placerat eget.
      </span>
    </AtomText>

    <AtomText class="current-post__text">
      Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed placerat, ligula vel tempor
      pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.
    </AtomText>

    <MoleculeBlogPostFooter :views="481" :tags="['Data', 'Future']" class="current-post__footer" />
  </section>
</template>

<style lang="scss" scoped>
@import './OrganismBlogCurrentPost.scss';
</style>
