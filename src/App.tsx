import { BrowserRouter, Routes, Route } from 'react-router-dom'
// page component
import MainPage from '@pages/index/index'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route index path='/' element={<MainPage/>}></Route>
     
    </Routes>
  </BrowserRouter>

}

export default App