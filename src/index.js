import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Bootstrap CSS
//bootstrap/dist/css/bootstrap.min.css
// import "bootstrap/dist/css/bootstrap.css";
//custom style
// import "./components/style.css";
// Bootstrap Bundle JS
//bootstrap/dist/js/bootstrap.bundle.min
// import "bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);