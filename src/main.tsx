import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ViewportSizeProvider } from './presentation/contexts/ViewportSizeContex.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewportSizeProvider>
      <App />
    </ViewportSizeProvider>
  </StrictMode>,
)