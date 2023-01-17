import { defineStore } from 'pinia'
import { IBlogDTO, TBlogCategory } from '~/domain/blog'
import { ApiBlog } from '~/services/api'
import { IResponseError } from '~/services/api/config/api.types'

export const ALL_CATEGORIES_NAME = 'All categories' as const

const useBlogsStore = defineStore('blogs', {
  state: () => ({
    blogs: [] as IBlogDTO[],
    currentBlogs: [] as IBlogDTO[],
    isLoading: false,
    error: null as null | IResponseError,
    apiBlog: ApiBlog,
    blogCategories: [ALL_CATEGORIES_NAME] as string[],
    selectedBlogCategory: '',
  }),
  getters: {
    getCurrentBlogs: (state) => state.currentBlogs,
    getIsLoading: (state) => state.isLoading,
    getAllBlogs: (state) => state.blogs,
    getBlogsCategories: (state) => state.blogCategories,
    getSelectedBlogCategory: (state) => state.selectedBlogCategory,
    getBlogsByCategory: (state) => (blogCategory: TBlogCategory) =>
      state.blogs.filter((blog) => blog.category === blogCategory),
  },
  actions: {
    extractBlogsCategories() {
      this.getAllBlogs.forEach((blog) => {
        this.blogCategories.includes(blog.category) ? null : this.blogCategories.push(blog.category)
      })
    },
    async loadAllBlogs() {
      this.setLoading(true)

      const { data: dataBlogs, error: errorBlogs } = await ApiBlog.loadAllBlogs()

      if (!errorBlogs.value && dataBlogs.value) {
        this.blogs = dataBlogs.value

        /**
         * In the first loading - current blogs are the all blogs
         */
        this.currentBlogs = dataBlogs.value

        /**
         * Get unique categories from all blogs
         */
        this.extractBlogsCategories()

        /**
         * Set default selected category as the first one
         */
        this.selectedBlogCategory = this.$state.blogCategories[0]

        this.setLoading(false)
        return this.getAllBlogs
      }

      this.setError(errorBlogs.value as IResponseError)
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
