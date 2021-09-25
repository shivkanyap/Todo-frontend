import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { setUser } from "./actions/a-user";
// import { setContact } from "./action/a-reservation";

import configureStore from "./store/store";

const store = configureStore();


store.subscribe(() => {
  console.log("redux store state", store.getState());
});



ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  
 ,
  document.getElementById('root')
);