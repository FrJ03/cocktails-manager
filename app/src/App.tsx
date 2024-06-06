import { Route, Routes, Navigate, HashRouter } from 'react-router-dom'
import Auth from './auth/page'
import Cocktails from './cocktails/page'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Navigate to="/auth" replace/>}/>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/cocktails" element={<Cocktails/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
