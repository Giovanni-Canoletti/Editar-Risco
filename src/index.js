import React from 'react'
import ReactDOM from 'react-dom'
import EditarRisco from './EditarRisco'
import { Provider } from 'react-redux'
import store from './components/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <EditarRisco />
  </Provider>,
document.getElementById('root')
);