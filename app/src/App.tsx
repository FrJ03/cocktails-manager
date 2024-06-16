import { Route, Routes, Navigate, HashRouter } from 'react-router-dom'
import Auth from './auth/page'
import Cocktails from './cocktails/page'
import AddCocktail from './add-cocktail/page'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Navigate to="/auth" replace/>}/>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/cocktails" element={<Cocktails/>} />
          <Route path="/add-cocktail" element={<AddCocktail/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
