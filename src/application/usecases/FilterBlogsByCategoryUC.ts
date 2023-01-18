import { IBlogDTO, TBlogCategory } from '~/domain/blog'
import { ALL_CATEGORIES_NAME, useBlogsStore } from '../store/useBlogsStore'

export const filterBlogsByCategoryUC = () => {
  const blogsStore = useBlogsStore()

  async function loadBlogs() {
    return blogsStore.loadAllBlogs()
  }

  async function changeBlogsDependsOnCategory(category: TBlogCategory | typeof ALL_CATEGORIES_NAME) {
    let blogsCategory: IBlogDTO[]

    blogsStore.setLoading(true)

    /**
     * Need to load all blogs
     */
    if (category === ALL_CATEGORIES_NAME) {
      blogsCategory = blogsStore.getAllBlogs
    } else {
      blogsCategory = blogsStore.getBlogsByCategory(category)
    }

    blogsStore.setNewCurrentBlogs(blogsCategory)

    /**
     * Sleep request to display spinner
     */
    await new Promise((resolve) => setTimeout(resolve, 2000))

    blogsStore.setLoading(false)
  }

  return { blogsStore, changeBlogsDependsOnCategory, loadBlogs }
}
