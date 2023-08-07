import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Redux
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// Reducers 
import bookReducers from './Reducers/Book';
import membersReducer from './Reducers/membersReducer'

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.js'
import ModalSlice from './Reducers/ModalAction'



const store = configureStore({
  reducer: {
    books: bookReducers,
    members: membersReducer,
    modal: ModalSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
