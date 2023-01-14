<script setup lang="ts"></script>

<template>
  <div class="benefits__content">
    <AtomMiddleTitle class="benefits__title">{{ $t('common.benefitsTitle', { company: 'Ensome' }) }}</AtomMiddleTitle>
    <AtomText class="benefits__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </AtomText>
  </div>
</template>

<style lang="scss" scoped>
.benefits {
  // .benefits__content

  &__content {
    @apply flex flex-col gap-y-7 max-w-120 py-8;
    @apply lg:(w-3/5);
  }

  // .benefits__title

  &__title {
  }

  // .benefits__text

  &__text {
  }
}
</style>
