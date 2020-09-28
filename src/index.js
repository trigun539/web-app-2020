import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'containers/app/app'
import configureStore from './store'

const store = configureStore({})

// To easily access store from chrome dev tools
window.store = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
