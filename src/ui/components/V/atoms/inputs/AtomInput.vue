<script setup lang="ts">
import { MaybeRef } from '@vueuse/core'

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
  placeholder?: MaybeRef<string>
  label?: MaybeRef<string>
  type?: 'text' | 'password'
  skipInitValue?: boolean
  tag?: 'input' | 'textarea'
}
interface IInputProps extends IInputClasses, IInputOptions {}

const props = withDefaults(defineProps<IInputProps>(), {
  placeholder: 'Placeholder',
  skipInitValue: true,
  type: 'text',
  statusValidation: 'inactive',
  label: undefined,
  tag: 'input',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const configClasses: Required<IInputClasses> = {
  commonClasses: `px-6 py-4 font-bold placeholder:(text-cGrey) hover:scale-98
    transition-300 rounded-lg focus:(outline-black-900 outline-none) outline-none`,
  commonLabelClasses: 'font-semibold text-sm text-black ',
  activeClasses: 'border-b-2 mb-[-2px] border-blue-500',
  activeLabelClasses: 'text-primary',
  inactiveClasses: 'bg-tertiary',
  errorClasses: 'bg-red-100 text-cRed',
  errorLabelClasses: 'text-cRed',
  successClasses: 'bg-emerald-100 text-emerald-900',
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
      v-if="props.label && unref(props.label)"
      :class="{
        [configClasses.commonLabelClasses]: true,
        [configClasses.errorLabelClasses]: isErrorSignal && !isFocus,
        [configClasses.activeLabelClasses]: isFocus,
      }"
      :for="id"
      >{{ unref(props.label) }}</label
    >
    <component
      :is="tag"
      :id="id"
      :name="id"
      :type="type"
      :placeholder="unref(placeholder)"
      :class="{
        [configClasses.commonClasses]: true,
        [configClasses.inactiveClasses]: isInactiveSignal && !isFocus,
        [configClasses.errorClasses]: isErrorSignal,
        [configClasses.successClasses]: props.statusValidation === 'correct',
        [configClasses.activeClasses]: isFocus,
      }"
      @focus="toggleFocus()"
      @blur="toggleFocus()"
      @input="(e:Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
input,
textarea {
  caret-color: black;
}
textarea {
  resize: none;
  height: 130px;
}
.input-wrapper {
  @apply flex flex-col items-left gap-y-2;
}
</style>
