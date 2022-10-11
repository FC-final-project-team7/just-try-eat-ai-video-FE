import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pagesPath } from './pages'

import GNB from '~/components/GNB'

import MainPage from '~/pages/Main'
import LoginPage from '~/pages/Login'
import ProjectListPage from '~/pages/ProjectListPage'
import ProjectTextPage from '~/pages/ProjectText'
import SelectAvatarPage from './SelectAvatarPage'

import ComponentsDisplayRoute from '~/pages/ComponentsDisplay'

const Pages = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path={pagesPath.main} element={<MainPage />} />
        <Route path={pagesPath.login} element={<LoginPage />} />
        <Route path={pagesPath.projects} element={<ProjectListPage />} />
        <Route path={pagesPath.text} element={<ProjectTextPage />} />
        <Route path={pagesPath.avatar} element={<SelectAvatarPage />} />

        <Route path="/__test__">{ComponentsDisplayRoute}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
