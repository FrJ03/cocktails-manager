import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Auth from './auth/page'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Navigate to="/auth" replace/>}/>
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
