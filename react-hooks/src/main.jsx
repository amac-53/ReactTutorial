import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const amacInfo = {
  name: "amac",
  age: 23,
};

const AmacContext = createContext(amacInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AmacContext.Provider value={amacInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AmacContext.Provider>
);

export default AmacContext
