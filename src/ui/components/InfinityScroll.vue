<script setup lang="ts">
import { useBlogsStore } from '~/application/store/useBlogsStore'

const blogsStore = useBlogsStore()

async function getUsers(amountPosts: number, idk: number) {
  await blogsStore.loadMoreAmountBlogs(amountPosts)

  usersList.value = blogsStore.getCurrentBlogs
}
const listEl = ref<HTMLElement>()

const usersToShow = 3

const usersList = ref()

await getUsers(usersToShow, 0)
</script>

<template>
  <div>
    <button class="bg-red px-5 py-3 text-3xl my-10" @click="getUsers(usersToShow, 0)">Add new blogs</button>
    <ul ref="listEl">
      <li v-for="user in usersList" :key="user.id">{{ user }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  @apply max-h-[600px] overflow-scroll py-3 px-5 bg-[#41b480];
}

li {
  @apply py-3 text-white text-xl;
}
</style>
