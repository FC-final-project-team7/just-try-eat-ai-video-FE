import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComponentsDisplayRoute from '~/pages/ComponentsDisplay'

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/__test__">{ComponentsDisplayRoute}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages
