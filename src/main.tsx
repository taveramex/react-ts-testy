import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShopChop } from './components/ShopChop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopChop />
  </StrictMode>,
)
