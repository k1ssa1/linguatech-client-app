import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'

import AppContainer from "./containers/AppContainer";
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
)
