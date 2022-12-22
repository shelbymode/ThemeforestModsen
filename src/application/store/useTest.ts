import { defineStore } from 'pinia'

const useTestArray = defineStore('day', {
  state: () => ({
    testArray: [] as string[],
  }),
  getters: {
    getArray: (state) => state.testArray,
  },
  actions: {
    initArray(newArray: string[]) {
      this.testArray = newArray
    },
    addArrayEl(el: string) {
      this.testArray.push(el)
    },
    reinitArray(newArray: string[]) {
      this.testArray.splice(0)
      this.testArray.push(...newArray)
    },
  },
})

export { useTestArray }
