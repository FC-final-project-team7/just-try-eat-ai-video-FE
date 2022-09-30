import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pagesPath } from '~/pages/pages'

import MainPage from '~/pages/Main'
import LoginPage from '~/pages/Login'
import ProjectListPage from '~/pages/ProjectListPage'

import ComponentsDisplayRoute from '~/pages/ComponentsDisplay'
import ProjectTextPage from '~/pages/ProjectText'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pagesPath.main} element={<MainPage />} />
        <Route path={pagesPath.login} element={<LoginPage />} />
        <Route path={pagesPath.projects} element={<ProjectListPage />} />
        <Route path={pagesPath.text} element={<ProjectTextPage />} />

        <Route path="/__test__">{ComponentsDisplayRoute}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
