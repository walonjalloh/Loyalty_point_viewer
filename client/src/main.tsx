import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { RewardProvider } from './contexts/rewardContext.tsx'
import { AuthProvider } from './contexts/authContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RewardProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<App/>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </RewardProvider>
  </StrictMode>,
)
