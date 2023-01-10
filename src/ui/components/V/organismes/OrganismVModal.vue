<script setup lang="ts">
const props = defineProps<{
  openModal: () => void
  closeModal: () => void
  isOpen: boolean
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal" mode="out-in" appear>
      <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <div class="modal__header">
            <slot name="header"></slot>
            <div class="modal__close" @click="closeModal">
              <slot name="close">
                <span class="i-carbon-close text-4xl"></span>
              </slot>
            </div>
          </div>

          <div class="modal__content">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
}
.modal {
  @apply flex flex-col fixed left-1/2 top-1/2 rounded-2xl;
  @apply w-9/10 max-h-4/5;

  @apply md:(max-w-[1200px] w-4/5 h-a pb-10);
  transform: translate(-50%, -45%);
  background: #0a1a29;
}
.modal__header {
  @apply flex relative justify-center items-center h-20 py-5;
}
.modal__content {
  @apply flex flex-col justify-center items-center w-full overflow-y-auto py-5;
}
.modal__close {
  @apply text-black absolute right-3;
}
</style>
