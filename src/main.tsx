import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppLoader from './ui/AppLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<AppLoader/>}>
       <App />
    </Suspense>
  </StrictMode>,
)
