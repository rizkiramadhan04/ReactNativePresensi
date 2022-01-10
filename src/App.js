/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from './router';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import FlashMessage from "react-native-flash-message";


const App = () => {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Router />
          <FlashMessage position="top" />
        </Provider>
      </NavigationContainer>
    )
};


export default App;
