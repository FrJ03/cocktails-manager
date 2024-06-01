import { Route, Routes, Navigate, HashRouter } from 'react-router-dom'
import Auth from './auth/page'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Navigate to="/auth" replace/>}/>
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
