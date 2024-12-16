import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
// page component
import MainPage from '@pages/index/index'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<MainPage />}></Route>
          <Route index path='/:id' element={<MainPage />}></Route>

        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
