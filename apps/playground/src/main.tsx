import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { ThemeProvider } from '@aciole/acyon'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='light'>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
