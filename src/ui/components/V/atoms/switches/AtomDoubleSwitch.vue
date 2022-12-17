<script setup lang="ts">
interface IDoubleSwitch {
  name: string
  left: {
    id: string
    value: string
  }
  right: {
    id: string
    value: string
  }
}
const props = defineProps<IDoubleSwitch>()
</script>

<template>
  <div class="switch">
    <input :id="props.left.id" class="left" type="radio" checked :name="props.name" :value="props.left.value" />
    <label :for="props.left.id" class="switch__label"
      ><span z-1>
        {{ props.left.value }}
      </span>
    </label>

    <input :id="props.right.id" class="right" type="radio" :name="props.name" :value="props.right" />
    <label :for="props.right.id" class="switch__label">
      <span z-1>{{ props.right.value }}</span>
    </label>
  </div>
</template>

<styles lang="scss" scoped>
.switch {
  @apply h-14 flex justify-center items-center bg-tertiary rounded-3xl;
}
.switch__label {
  @apply h-full flex justify-center items-center relative text-black px-5 rounded-3xl cursor-pointer overflow-hidden select-none;
}
.switch {
  input[type='radio'] {
    appearance: none;
  }

  input:checked + label {
    color: white;
  }

  label::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgb(var(--primary));
    transition: 0.6s;
  }

  .left + label::after {
    width: 100%;
    left: 0%;
    transform: translateX(100%);
    opacity: 0;
  }

  .left:checked + label::after {
    width: 100%;
    left: 0;
    transform: translateX(0);
    opacity: 100%;
  }

  .right + label::after {
    width: 100%;
    right: 0;
    opacity: 0;
    transform: translateX(-100%);
  }

  .right:checked + label::after {
    width: 100%;
    right: 0;
    transform: translateX(-0%);
    opacity: 100%;
  }
}
</styles>
