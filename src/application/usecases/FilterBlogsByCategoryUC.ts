import { IBlogDTO, TBlogCategory } from '~/domain/blog'
import { ALL_CATEGORIES_NAME, useBlogsStore } from '../store/useBlogsStore'
const blogsStore = useBlogsStore()

function useLoadMoreBlogsInfinityScroll(amountNewBlogs: number) {
  const loadMoreBlogsClosure = () => blogsStore.loadMoreBlogs(amountNewBlogs, blogsStore.getSelectedBlogCategory)
  return { loadMoreBlogsClosure }
}

export const filterBlogsByCategoryUC = (initBlogsAmount: number, amountNewBlogs: number) => {
  const { loadMoreBlogsClosure } = useLoadMoreBlogsInfinityScroll(amountNewBlogs)

  const changeBlogsDependsOnCategory = (category: TBlogCategory | typeof ALL_CATEGORIES_NAME) => {
    /**
     * Clean all current blogs
     */
    blogsStore.$state.currentBlogs = []
    return blogsStore.loadMoreBlogs(initBlogsAmount, category)
  }

  return {
    blogsStore,
    changeBlogsDependsOnCategory,
    loadMoreBlogsClosure,
  }
}
