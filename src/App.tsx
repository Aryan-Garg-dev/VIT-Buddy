import './App.css'
import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom"
import { renderRoutes, routes } from './Routes'
import { Toaster } from "sonner"
import { Suspense, useEffect } from 'react'
import { Loading } from './Pages/Loading'
import { useTheme } from './components/theme-provider'
import { BaseLayout } from './Layout/BaseLayout'
import { SEOContent } from './constants/SEOContent'
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { theme } = useTheme();
  ////////////////
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath) {
      navigate(redirectPath); 
    } else {
      navigate('/');
    }
  }, [navigate]);
  /////////////////
  
  return (
    <Router>
      <Suspense fallback={<BaseLayout meta={SEOContent.loading}><Loading /></BaseLayout>}>
        <Toaster position='bottom-center' theme={theme == "dark" ? "light" : "dark" } />
        <Analytics />
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  )
}

export default App
