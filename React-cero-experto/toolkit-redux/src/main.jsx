import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonApp from './PokemonApp';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <TodoApp/>
  </Provider>
  </React.StrictMode>
)
