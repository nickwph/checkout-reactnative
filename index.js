import Expo from 'expo';
import App from './src/App';
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);