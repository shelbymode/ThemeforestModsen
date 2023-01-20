import { defineStore } from 'pinia'
import { IBlogDTO, TBlogCategory } from '~/domain/blog'
import { ApiBlog } from '~/services/api'
import { IResponseError, TNetworkRequest } from '~/services/api/config/api.types'

export const ALL_CATEGORIES_NAME = 'All categories' as const

const useBlogsStore = defineStore('blogs', {
  state: () => ({
    isAllowTheScrolling: true,
    allBlogs: [] as IBlogDTO[],
    currentBlogs: [] as IBlogDTO[],
    isLoading: false,
    error: null as null | IResponseError,
    apiBlog: ApiBlog,
    blogCategories: [ALL_CATEGORIES_NAME] as string[],
    selectedBlogCategory: ALL_CATEGORIES_NAME as string,
  }),
  getters: {
    getIsAllowTheScrolling: (state) => state.isAllowTheScrolling,
    getCurrentAmountBlogs: (state) => state.currentBlogs.length,
    getCurrentBlogs: (state) => state.currentBlogs,
    getIsLoading: (state) => state.isLoading,
    getAllBlogs: (state) => state.allBlogs,
    getBlogsCategories: (state) => state.blogCategories,
    getSelectedBlogCategory: (state) => state.selectedBlogCategory,
  },
  actions: {
    async loadMoreBlogs(amountBlogs: number, category: string) {
      if (this.getIsAllowTheScrolling) {
        let cutNeedBlogs: IBlogDTO[]
        if (category === ALL_CATEGORIES_NAME) {
          cutNeedBlogs = await this.loadMoreAllBlogs(amountBlogs)
        } else {
          cutNeedBlogs = await this.loadMoreBlogsByCategory(amountBlogs, category)
        }

        this.checkIfEndOfTheScrolling(cutNeedBlogs)

        return cutNeedBlogs
      }
    },
    async loadMoreBlogsByCategory(amountBlogs: number, category: string) {
      this.setLoading(true)

      const allBlogsByCategory = await this.loadAllBlogsByCategory(category)

      const cutNeedBlogsByCategory = allBlogsByCategory.slice(
        this.getCurrentAmountBlogs,
        this.getCurrentAmountBlogs + amountBlogs
      )

      this.currentBlogs = [...this.currentBlogs, ...cutNeedBlogsByCategory]
      this.setLoading(false)

      return cutNeedBlogsByCategory
    },
    async loadMoreAllBlogs(amountBlogs: number) {
      this.setLoading(true)
      const allBlogs = await this.loadAllBlogs()

      const cutNeedAllBlogs = allBlogs.slice(this.getCurrentAmountBlogs, this.getCurrentAmountBlogs + amountBlogs)
      this.currentBlogs = [...this.currentBlogs, ...cutNeedAllBlogs]

      this.setLoading(false)
      return cutNeedAllBlogs
    },
    async loadAllBlogsByCategory(category: string) {
      this.setLoading(true)

      const { data: dataBlogs, error: errorBlogs } = await ApiBlog.loadAllBlogs()

      if (!errorBlogs.value && dataBlogs.value) {
        const allBlogsByCategory = dataBlogs.value.filter((blog) => blog.category === category)

        this.setLoading(false)

        return allBlogsByCategory
      }

      this.setLoading(false)
      this.setError(errorBlogs.value as IResponseError)
      return []
    },
    async loadAllBlogs() {
      this.setLoading(true)

      const { data: dataBlogs, error: errorBlogs } = await ApiBlog.loadAllBlogs()

      if (!errorBlogs.value && dataBlogs.value) {
        /**
         * In the first loading - current blogs are the all blogs
         */

        this.setLoading(false)
        return dataBlogs.value
      }

      this.setLoading(false)
      this.setError(errorBlogs.value as IResponseError)
      return []
    },
    async loadBlogCategories() {
      if (this.getAllBlogs.length <= 1) {
        this.$state.blogCategories = [
          ...this.getBlogsCategories,
          ...[
            'Software development',
            'Information Security',
            'Internet of things',
            'Healthcare IT',
            'Digital Transformation',
          ],
        ]
      }
    },
    checkIfEndOfTheScrolling(array: IBlogDTO[]) {
      if (array.length === 0) {
        this.forbidTheScrolling()
      }
    },
    allowTheScrolling() {
      this.isAllowTheScrolling = true
    },
    forbidTheScrolling() {
      this.isAllowTheScrolling = false
    },
    setNewSelectedBlogCategory(newSelectedBlogCategory: string) {
      this.$state.selectedBlogCategory = newSelectedBlogCategory
    },
    setNewCurrentBlogs(blogs: IBlogDTO[]) {
      this.$state.currentBlogs = blogs
    },
    setLoading(status: boolean) {
      this.$state.isLoading = status
    },
    setError(error: IResponseError) {
      this.$state.error = error
    },
  },
})

export { useBlogsStore }
