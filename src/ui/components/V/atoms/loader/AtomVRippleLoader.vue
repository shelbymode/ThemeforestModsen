<script setup lang="ts"></script>

<template>
  <div class="ripple-container relative">
    <slot />
    <div class="ripple ripple-1"></div>
    <div class="ripple ripple-2"></div>
    <div class="ripple ripple-3"></div>
  </div>
</template>

<style lang="scss" scoped>
.ripple-container {
  position: relative;
  width: 100px; /*Adjust width and height as per your requirement*/
  height: 100px;
  margin: 0;
}

.ripple {
  @apply bg-emerald-400;
  position: absolute;
  top: 50%; /*Adjust the position of the ripple center*/
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 50%;
  opacity: 0.2;
  animation: ripple 2s linear infinite;
}

.ripple-1 {
  animation-delay: 0s;
}

.ripple-2 {
  animation-delay: 0.5s;
}

.ripple-3 {
  animation-delay: 1s;
}

@keyframes ripple {
  0% {
    width: 50px; /* adjust the width and height of the ripple*/
    height: 50px;
    opacity: 1;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}
</style>
