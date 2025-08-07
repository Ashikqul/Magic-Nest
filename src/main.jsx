import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider,} from "react-router";
import { router } from './router/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#0E0B2E] min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
