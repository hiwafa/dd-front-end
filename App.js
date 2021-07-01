import 'react-native-gesture-handler';
import React from 'react';

import Navigator from './src/Navigator';
import store from "./src/store";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render(){
      return (
        <Provider store={store}>
          <Navigator/>
        </Provider>
      );
  }
}