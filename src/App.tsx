import Layout from './Components/Layout/Layout'
import Latest from './Pages/Latest'
import ThemeProvider from './providers/ThemeProvider'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import './app.scss'
import Post from './Components/Post/Post'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Latest />} />
            <Route path='post/:postId' element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
