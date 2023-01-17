import { defineStore } from 'pinia'
import { IBlogDTO, TBlogCategory } from '~/domain/blog'
import { ApiBlog } from '~/services/api'
import { IResponseError } from '~/services/api/config/api.types'

const useBlogsStore = defineStore('price-cards-payment', {
  state: () => ({
    blogs: [] as IBlogDTO[],
    isLoading: false,
    error: null as null | IResponseError,
    apiBlog: ApiBlog,
  }),
  getters: {
    getAllBlogs: (state) => state.blogs,
    getBlogsByCategory: (state) => (blogCategory: TBlogCategory) => {
      return state.blogs.filter((blog) => blog.category === blogCategory)
    },
  },
  actions: {
    async loadAllBlogs() {
      this.setLoading(true)
      const { data: dataBlogs, error: errorBlogs } = await ApiBlog.loadAllBlogs()
      this.setLoading(false)

      if (!errorBlogs.value && dataBlogs.value) {
        this.blogs = dataBlogs.value
        return this.getAllBlogs
      }

      this.setError(errorBlogs.value as IResponseError)
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
