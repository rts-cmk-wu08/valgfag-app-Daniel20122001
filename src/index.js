import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Vejr from './Pages/Vejr';
import Radar from './Pages/Radar';
import ErrorBoundary from './Error';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Vejr />} />
      <Route path='/radar' element={<Radar />}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ErrorBoundary>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();