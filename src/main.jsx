import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import './index.scss'
import Sidebarprovider from './Context/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
    <Sidebarprovider>
        <App />
    </Sidebarprovider>
)
