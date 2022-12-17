<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
[v-cloak] {
  display: none !important;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(66%);

  // transform: /* translateX(50%) */ scaleX(0.05);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-66%);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
