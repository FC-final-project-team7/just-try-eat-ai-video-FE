import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pagesPath } from '~/pages/pages'

import MainPage from '~/pages/Main'
import LoginPage from '~/pages/Login'

import ComponentsDisplayRoute from '~/pages/ComponentsDisplay'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pagesPath.main} element={<MainPage />} />
        <Route path={pagesPath.login} element={<LoginPage />} />

        <Route path="/__test__">{ComponentsDisplayRoute}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
