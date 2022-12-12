<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'keen' | 'circle' | 'rounded'
    imgSrc?: string
    size?: { width: number; height: number }
  }>(),
  {
    shape: 'circle',
    imgSrc: 'https://api.lorem.space/image/face?w=80&h=80&hash=2ik0d8pa',
    size: () => ({ width: 80, height: 80 }),
  }
)

const width = `${props.size.width}px`
const height = `${props.size.height}px`

const borderRadius = props.shape === 'circle' ? 'rounded-full' : props.shape === 'rounded' ? 'rounded-lg' : ''
</script>

<template>
  <img :src="props.imgSrc" class="image" :class="[borderRadius]" alt="face" />
</template>

<style lang="scss" scoped>
.image {
  width: v-bind(width);
  height: v-bind(height);
  object-fit: contain;
}
</style>
