import ArticleAuthor from '@/components/ArticleAuthor'
import ArticleShare from '@/components/ArticleShare'

export default function ArticleFooter() {
  return (
    <footer>
      <div>
        <ArticleAuthor />
      </div>
      <div>
        <ArticleShare />
      </div>
    </footer>
  )
}
