import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pagesPath } from './pages'

import GNB from '~/components/GNB'

import ErrorBoundary from '~/components/ErrorBoundary'

import MainPage from './Main'
import LoginPage from './Login'
import ProjectListPage from './ProjectListPage'
import ProjectTextPage from './ProjectText'
import ProjectSentencePage from './ProjectSentence'
import SelectAvatarPage from './SelectAvatarPage'

import ComponentsDisplayRoute from './ComponentsDisplay'

const Pages = () => {
  return (
    <BrowserRouter>
      <GNB />
      <ErrorBoundary>
        <Routes>
          <Route path={pagesPath.main} element={<MainPage />} />
          <Route path={pagesPath.login} element={<LoginPage />} />
          <Route path={pagesPath.projects} element={<ProjectListPage />} />
          <Route path={pagesPath.text} element={<ProjectTextPage />} />
          <Route path={pagesPath.sentence} element={<ProjectSentencePage />} />
          <Route path={pagesPath.avatar} element={<SelectAvatarPage />} />

          <Route path="/__test__">{ComponentsDisplayRoute}</Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default Pages
