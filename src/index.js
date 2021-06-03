import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import reducers from './Reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
    </Provider>
,
  document.getElementById('root')
);
 
reportWebVitals();
