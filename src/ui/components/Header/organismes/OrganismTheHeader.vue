<script setup lang="ts">
const { beforeEnter, enter, beforeLeave, leave } = useSmoothHeight(1.2)

const { closeButtonClass, headerLinksClass, isHeaderLinksOpened, toggleClose } = useHamburger()
</script>

<template>
  <TemplateHeader>
    <template #logo>
      <RouterLink to="/home" class="icon" />
    </template>

    <template #close-button>
      <AtomHeaderCloseButton
        class="md:order-3"
        :class="[closeButtonClass]"
        @click="toggleClose()"
        @keypress="toggleClose()"
      />
    </template>

    <template #links>
      <transition
        name="links"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="isHeaderLinksOpened" class="header__links" :class="[headerLinksClass]">
          <MoleculeHeaderLinks />
        </div>
      </transition>
    </template>

    <template #demo>
      <MoleculeHeaderDemoButton />
    </template>

    <template #theme-switcher>
      <AtomToggleDarkMode class="header__dark-toggler" />
    </template>
  </TemplateHeader>
</template>

<style lang="scss" scoped>
/**
  * Literally there is no another way in the universe how to change this svg color
*/
.icon {
  @apply inline-block bg-primary w-[150px] h-[49px] scale-80 translate-x-[-10%] order-1;
  @apply dark:(bg-white);
  @apply sm:(scale-100 translate-x-0);
  mask-image: url('/assets/images/svg-icons/logo_blue.svg');
  -webkit-mask-image: url('/assets/images/svg-icons/logo_blue.svg');
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

// .header__dark-toggler

.header__dark-toggler {
  @apply max-w-1/3 order-2 fixed left-1/2 top-0 translate-y-[50%];
  @apply md:(static translate-y-0);
}

// .header__links

.header__links {
  @apply flex items-center gap-x-9 transition-all duration-500;
  @apply md:gap-x-3;

  &--revealed {
  }
  &--closed {
    @apply flex-col gap-x-0 gap-y-7 w-full translate-y-[10%];
  }
}

.links-leave-to,
.links-enter-from {
  opacity: 0;
}

.links-enter-active,
.links-leave-active {
  transition: opacity 0.4s ease-in-out, height 0.5s ease-in-out;
}
</style>
