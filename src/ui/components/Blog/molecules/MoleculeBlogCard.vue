<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    date: string
    text: string
    linkInfo: {
      to: string
      label: string
    }
    tagsInfo?: Record<string, boolean>
    imgSrc?: string
  }>(),
  {
    tagsInfo: undefined,
    imgSrc: 'https://api.lorem.space/image/game?w=685&h=235&hash=pjy9rusa',
  }
)

const isLinkExists = props.linkInfo && Object.keys(props.linkInfo).length > 0
const isTagsExists = props.tagsInfo && Object.keys(props.tagsInfo).length > 0
</script>

<template>
  <div class="card">
    <img class="card__image" :src="props.imgSrc" alt="image" />
    <span class="card__date">{{ props.date }}</span>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__text">{{ text }}</p>

    <AtomLink v-if="isLinkExists" :link="linkInfo!.to">{{ linkInfo!.label }}</AtomLink>

    <div v-if="isTagsExists" class="tag-wrapper">
      <AtomTag v-for="(isTagDisabled, tag) in props.tagsInfo" :key="tag" :is-disabled="isTagDisabled">
        {{ tag }}
      </AtomTag>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply min-w-full flex flex-col gap-y-5 p-6 rounded items-start;
  @apply md:(min-w-[350px]);
}
.card__image {
  @apply rounded-lg;
}
.card__date {
  @apply text-base text-gray text-left;
}
.card__icon {
  @apply text-5xl text-primary;
}
.card__title {
  @apply font-bold text-black text-2xl text-left;
}
.card__text {
  @apply text-cGrey text-base text-left;
}
.tag-wrapper {
  @apply flex w-full flex-wrap gap-3;
}
</style>
