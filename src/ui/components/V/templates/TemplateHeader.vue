<script setup lang="ts">
const [isHamburger, toggleClose] = useToggle(true)
const isMdScreen = useMediaQuery('(min-width: 768px)')

const revealedCloseClass = computed(() => {
  if (!isMdScreen.value) return isHamburger.value === true ? 'header__close-btn--revealed' : 'header__close-btn--closed'
})

const revealedHeaderLinksClass = computed(() => {
  if (!isMdScreen.value) return isHamburger.value === true ? 'header__links--revealed' : 'header__links--closed'
})

const isHeaderLinksOpened = computed(() => !isHamburger.value || isMdScreen.value)

const beforeEnter = (el: HTMLElement) => (el.style.height = '0')
const enter = (el: HTMLElement) => (el.style.height = el.scrollHeight * 1.2 + 'px')
const beforeLeave = (el: HTMLElement) => (el.style.height = el.scrollHeight * 1.2 + 'px')
const leave = (el: HTMLElement) => (el.style.height = '0')
</script>

<template>
  <header class="header-container">
    <TemplatePageContainer class="header">
      <div class="header__logo">
        <slot name="logo"></slot>
      </div>

      <AtomToggleDarkMode class="header__dark-toggler" />

      <button
        class="header__close-btn"
        :class="[revealedCloseClass]"
        aria-label="close"
        @click="toggleClose()"
        @keypress="toggleClose()"
      ></button>

      <transition
        name="links"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="isHeaderLinksOpened" class="header__links" :class="[revealedHeaderLinksClass]">
          <slot name="links"></slot>
        </div>
      </transition>

      <div class="header__demo">
        <slot name="demo"></slot>
      </div>
    </TemplatePageContainer>
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  @apply fixed left-1/2 translate-x-[-50%] z-1 flex items-center justify-center max-w-[1920px] w-full bg-cBackground;
  @apply dark:(bg-secondary);
}
.header {
  @apply flex justify-between items-center flex-wrap p-3;
  @apply md:justify-around;
  @apply lg:justify-between;

  // .header__logo

  &__logo {
    @apply max-w-1/3;
  }

  // .header__dark-toggler

  &__dark-toggler {
    @apply max-w-1/3;
  }

  // .header__close-btn

  &__close-btn {
    @apply text-5xl text-white max-w-1/3 duration-300;
    @apply sm:text-6xl;

    @media (min-width: 768px) {
      display: none !important;
    }
    &--revealed {
      @apply i-ic-baseline-menu;
    }
    &--closed {
      @apply i-carbon-close;
    }
  }

  // .header__links

  &__links {
    @apply flex items-center gap-x-9 transition-all duration-500;
    @apply md:gap-x-3;

    &--revealed {
    }
    &--closed {
      @apply flex-col gap-x-0 gap-y-7 w-full translate-y-[10%];
    }
  }

  // .header__demo

  &__demo {
    @apply hidden;
    @apply lg:flex;
  }
}

.links-leave-to,
.links-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.links-enter-active,
.links-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
