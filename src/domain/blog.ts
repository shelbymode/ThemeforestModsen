export type TBlogId = string

export type TBlogCategory =
  | `Software development`
  | 'Information Security'
  | 'Internet of things'
  | 'Digital Transformation'
  | 'Healthcate IT'

export type TBlogTag =
  | 'App'
  | 'Management'
  | 'CMR'
  | 'Big data'
  | 'Media'
  | 'Future'
  | 'CIO'
  | 'Startup'
  | 'Team'
  | 'Data'
  | 'Data analytics'
  | 'Information security'
  | 'Proxy'

export interface IBlogDTO {
  id: TBlogId
  authorId: TAuthorId
  title: string
  text: string
  views: TViewsCount
  category: TBlogCategory
  date_created: TTimestamp
  tags: TBlogTag[]
  imgPreview: TImageLink
}
