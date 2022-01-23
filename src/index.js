import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppM} from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { MoralisProvider } from "react-moralis";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="ICYl8qsuwAaASQQVItLx6JlqmmQ4Fs0fMJLPtSuC" serverUrl="https://m3fw7oe4yfw6.usemoralis.com:2053/server">
      <App />
      <AppM />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
