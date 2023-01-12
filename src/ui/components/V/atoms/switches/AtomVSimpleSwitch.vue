<script setup lang="ts">
defineProps({ modelValue: Boolean }) // defines what events our component emitsdefineEmits(['update:modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input
      id="switch"
      :value="modelValue"
      type="checkbox"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <label for="switch">Toggle</label>
  </div>
</template>

<style lang="scss" scoped>
input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 200px;
  height: 100px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130px;
}

// centering
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
