import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Route,  Routes , BrowserRouter as Router  } from 'react-router-dom'
import { extendedapi } from './features/appslice.jsx'
import {store} from './app/store.jsx'
import { Provider } from 'react-redux'
store.dispatch(extendedapi.endpoints.getpost.initiate())
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Router>
  <Routes>
    <Route path='/*' element={<App />}/>
    </Routes>
    </Router>
    </Provider>
  </StrictMode>,
)
