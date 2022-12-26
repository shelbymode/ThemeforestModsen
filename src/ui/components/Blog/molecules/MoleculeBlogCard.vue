<script setup lang="ts">
const isSmScreen = useMediaQuery(`(min-width: 640px)`)

const props = withDefaults(
  defineProps<{
    title: string
    date: string
    text: string
    linkInfo: {
      hide?: boolean
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
const router = useRouter()
const jumpToBlog = () => {
  router.push(props.linkInfo.to)
}
const isLinkExists = computed(() => !!props.linkInfo.hide)
const isTagsExists = computed(() => props.tagsInfo && Object.keys(props.tagsInfo).length > 0)
</script>

<template>
  <div class="card">
    <img class="card__image" :src="props.imgSrc" alt="image" @keypress="jumpToBlog" @click="jumpToBlog" />
    <span class="card__date">{{ props.date }}</span>
    <h3 class="card__title">{{ title }}</h3>
    <p v-if="isSmScreen" class="card__text">{{ text }}</p>

    <AtomLink v-if="isLinkExists" :link="linkInfo!.to">{{ linkInfo!.label }}</AtomLink>

    <div v-if="isTagsExists" class="tag-wrapper">
      <AtomTag v-for="(isTagEnabled, tag) in props.tagsInfo" :key="tag" :is-disabled="!isTagEnabled">
        {{ tag }}
      </AtomTag>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply min-w-full flex flex-col gap-y-5 p-6 rounded items-start;
  @apply md:(min-w-[300px]);
}
.card__image {
  @apply object-cover w-full rounded-lg;
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
