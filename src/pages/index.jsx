import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pagesPath } from './pages'

import StyleLayout from '~/components/StyleLayout'
import RequireAuth from './RequireAuth'

import MainPage from './Main'
import LoginPage from './Login'
import SignUpPage from './SignUp'
import Info from './SignUp/Info'
import Completed from './SignUp/Completed'
import ProjectListPage from './ProjectListPage'
import ProjectTextPage from './ProjectText'
import ProjectSentencePage from './ProjectSentence'
import SelectAvatarPage from './SelectAvatarPage'
import NotFound from './NotFound'

import ComponentsDisplayRoute from './ComponentsDisplay'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StyleLayout />}>
          <Route path={pagesPath.main} element={<MainPage />} />
          <Route path={pagesPath.login} element={<LoginPage />} />
          <Route path={pagesPath.signUp} element={<SignUpPage />} />
          <Route path={pagesPath.info} element={<Info />} />
          <Route path={pagesPath.completed} element={<Completed />} />

          <Route element={<RequireAuth />}>
            <Route path={pagesPath.projects} element={<ProjectListPage />} />
            <Route path={pagesPath.text} element={<ProjectTextPage />} />
            <Route
              path={pagesPath.sentence}
              element={<ProjectSentencePage />}
            />
            <Route path={pagesPath.avatar} element={<SelectAvatarPage />} />
          </Route>

          <Route path="/__test__">{ComponentsDisplayRoute}</Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
