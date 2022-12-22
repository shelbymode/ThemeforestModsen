<script setup lang="ts">
export interface IInputClasses {
  inactiveClasses?: string
  activeClasses?: string
  activeLabelClasses?: string
  commonClasses?: string
  errorClasses?: string
  commonLabelClasses?: string
  errorLabelClasses?: string
  successClasses?: string
}
export interface IInputOptions {
  id: string
  modelValue: string
  statusValidation: 'inactive' | 'initial-error' | 'dirty-error' | 'correct'
  placeholder?: string
  label?: string
  type?: 'text' | 'password'
  skipInitValue?: boolean
}
interface IInputProps extends IInputClasses, IInputOptions {}

const props = withDefaults(defineProps<IInputProps>(), {
  placeholder: 'Placeholder',
  skipInitValue: true,
  type: 'text',
  statusValidation: 'inactive',
  label: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const configClasses: Required<IInputClasses> = {
  commonClasses: `px-6 py-4 font-bold placeholder:(text-black) hover:scale-95
    transition-300 rounded-lg focus:(outline-black-900 outline-none) outline-none`,
  commonLabelClasses: 'font-semibold text-sm',
  activeClasses: 'border-b-2 border-blue-500',
  activeLabelClasses: 'text-primary',
  inactiveClasses: 'bg-tertiary',
  errorClasses: 'bg-red-100/50 text-cRed',
  errorLabelClasses: 'text-cRed',
  successClasses: 'bg-emerald-100/50 text-emerald-900',
}

/**
 * Traverses configClasses and if props with this classes category is empty or undefined -> do nothing,
 * else - overrides it
 */
function initConfigClasses() {
  ;(Object.keys(configClasses) as (keyof IInputClasses)[]).forEach((classesCategory) => {
    if (!(props[classesCategory] === '' || typeof props[classesCategory] === 'undefined')) {
      configClasses[classesCategory] = props[classesCategory] as string
    }
  })
}

initConfigClasses()

const waitCondition = props.skipInitValue === true ? ['inactive', 'initial-error'] : ['inactive']
const [isFocus, toggleFocus] = useToggle(false)
const isEmpty = computed(() => props.modelValue === '')

const isErrorSignal = computed(
  () =>
    (props.statusValidation === 'dirty-error' && isEmpty.value && !isFocus.value) ||
    (props.statusValidation === 'dirty-error' && !isEmpty.value)
)

const isInactiveSignal = computed(() => waitCondition.includes(props.statusValidation))
</script>

<template>
  <div class="input-wrapper">
    <label
      v-if="props.label"
      :class="{
        [configClasses.commonLabelClasses]: true,
        [configClasses.errorLabelClasses]: isErrorSignal && !isFocus,
        [configClasses.activeLabelClasses]: isFocus,
      }"
      :for="id"
      >{{ props.label }}</label
    >
    <input
      :id="id"
      :name="id"
      :type="type"
      :placeholder="placeholder"
      :class="{
        [configClasses.commonClasses]: true,
        [configClasses.inactiveClasses]: isInactiveSignal && !isFocus,
        [configClasses.errorClasses]: isErrorSignal,
        [configClasses.successClasses]: props.statusValidation === 'correct',
        [configClasses.activeClasses]: isFocus,
      }"
      @focus="toggleFocus()"
      @blur="toggleFocus()"
      @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  @apply flex flex-col items-left gap-y-2;
}
</style>
