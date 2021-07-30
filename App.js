import 'react-native-gesture-handler';
import React from 'react';


import Navigator from './src/Navigator';
import { Provider } from "react-redux";
import store from "./src/store";

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);