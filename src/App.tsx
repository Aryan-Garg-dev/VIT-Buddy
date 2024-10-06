import './App.css'
import { BrowserRouter as Router, Routes } from "react-router-dom"
import { renderRoutes, routes } from './Routes'
import { Toaster } from "sonner"
import { Suspense } from 'react'
import { Loading } from './Pages/Loading'
import { useTheme } from './components/theme-provider'
import { BaseLayout } from './Layout/BaseLayout'
import { SEOContent } from './constants/SEOContent'

function App() {
  const { theme } = useTheme();
  return (
    <Router>
      <Suspense fallback={<BaseLayout meta={SEOContent.loading}><Loading /></BaseLayout>}>
        <Toaster position='bottom-center' theme={theme == "dark" ? "light" : "dark" } />
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  )
}

export default App
