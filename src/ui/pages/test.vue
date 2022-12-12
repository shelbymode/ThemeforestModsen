<script setup lang="ts">
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
import { useSchemaValidation } from '~/shared/libs/useSchemaValidation'
import { IInputClasses } from '../components/inputs/AtomInput.vue'

const rulesEmail = computed(() => ({
  email: {
    required: helpers.withMessage('Input an email, please', required),
    email: helpers.withMessage("It doesn't look as email", email),
  },
}))

const form = reactive({ email: '' })

const { isFormValid, touch, getMessage, getIsDirty, getIsError, isDirtyAndError, getStatusValidation } =
  useSchemaValidation(rulesEmail, form)

const customClasses: IInputClasses = {
  inactiveClasses: 'bg-tertiary',
  errorClasses: 'bg-[#F6E2E2] text-cRed',
  successClasses: 'bg-emerald-100/30 text-emerald-900',
  errorLabelClasses: 'text-cRed',
}
</script>

<template>
  <main class="w-full min-h-screen h-full mx-auto bg-neutral-300 flex flex-col items-center justify-center">
    <button bg-red-500 text-dark-500 px-5 py-2 rounded-xl @click="toggleDark()">
      Toggle theme - right know [{{ isDark === true ? 'dark' : 'light' }}]
    </button>

    <div flex items-center flex-wrap bg-light-800 p-10 gap-10 class="w-full">
      <p>{{ isFormValid }}</p>
      <p>{{ getMessage('email') }}</p>
      <p>{{ isDirtyAndError('email') }}</p>
      <p>{{ getStatusValidation('email') }}</p>

      <p text-white>isError {{ getIsError('email') }}</p>
      <p text-white>isDirty {{ getIsDirty('email') }}</p>
      <p text-red>{{ getIsError('email') && !getIsDirty('email') }}</p>

      {{ form }}
      <AtomInputTranslucent
        id="email_id"
        v-model="form.email"
        v-bind="customClasses"
        label="Email"
        placeholder="Email"
        type="text"
        :status-validation="getStatusValidation('email')"
        @input="touch('email')"
      />

      <AtomDropdown
        title="What are data analytics?"
        content="Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
        imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
        orci. Sed quis lobortis eros."
        title-inactive-classes="text-black"
        title-active-classes="text-primary"
      />

      <TheOrganismHeader></TheOrganismHeader>
      <TheOrganismFooter></TheOrganismFooter>
      <MoleculeSection></MoleculeSection>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
