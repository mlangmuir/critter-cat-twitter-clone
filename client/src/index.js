import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurrentUserProvider from './CurrentUserContext';
import TweetProvider from './TweetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TweetProvider>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </TweetProvider>
);

reportWebVitals();
