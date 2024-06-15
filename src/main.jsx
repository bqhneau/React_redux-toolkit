import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 在程序入口文件 使用 Provider 将 store 数据 提供给全局
  <Provider store={store}>
    <App />
  </Provider>
)
