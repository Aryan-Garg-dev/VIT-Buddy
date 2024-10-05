import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { RecoilRoot } from "recoil"
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" storageKey="vit-buddy-theme">
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </HelmetProvider>
)
