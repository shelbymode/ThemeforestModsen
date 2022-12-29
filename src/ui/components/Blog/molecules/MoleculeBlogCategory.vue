<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kesser', unavailable: false },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const selectedPerson = ref(people[0])
</script>

<template>
  <div class="blog-category">
    <AtomMiddleTitle class="blog-category__title">Choose category blog</AtomMiddleTitle>

    <Listbox v-model="selectedPerson">
      <div class="blog-category-listbox w-full">
        <ListboxButton class="blog-category-listbox__button">
          {{ selectedPerson.name }}
          <span class="i-ic-baseline-unfold-more text-3xl ml-10"> </span>
        </ListboxButton>

        <transition
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="blog-category-listbox__options">
            <ListboxOption
              v-for="person in people"
              v-slot="{ active, selected }"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li :class="[active ? 'bg-amber-100 text-amber-900' : 'text-gray-900', 'blog-category-listbox__option ']">
                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">{{ person.name }}</span>
                <span v-if="selected" class="blog-category-listbox__icon-wrapper">
                  <span class="i-carbon-checkmark text-4xl h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style lang="scss" scoped>
.blog-category {
  @apply flex flex-col items-start gap-y-9 w-full px-6;
  @apply sm:px-12;
  @apply md:(w-fit);
  @apply 2xl:(px-0);

  // .blog-category__title

  &__title {
    @apply text-center w-full;
    @apply md:(text-left);
  }
}

.blog-category-listbox {
  @apply relative mt-1 w-full;
  // .blog-category-listbox__button

  &__button {
    @apply flex w-full text-black justify-between items-center relative rounded-lg pr-2 text-xl bg-white py-5 px-10 text-left shadow-md;
    @apply focus:outline-none focus-visible:(border-indigo-500 ring-2 ring-white ring-opacity-75 ring-offset-2 ring-offset-orange-300 sm:text-sm);
  }

  // .blog-category-listbox__options

  &__options {
    @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
  }

  // .blog-category-listbox__option

  &__option {
    @apply relative cursor-default select-none py-4 pl-10 pr-4 text-base;
  }

  // .blog-category-listbox__icon-wrapper

  &__icon-wrapper {
    @apply absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600;
  }
}
</style>
