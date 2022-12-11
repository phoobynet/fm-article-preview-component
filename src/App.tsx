import ArticlePreview from './routes/ArticlePreview'
import Demo from '@/routes/Demo'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<ArticlePreview />}
      />
      <Route
        path="/demo"
        element={<Demo />}
      ></Route>
    </Routes>
  )
}
