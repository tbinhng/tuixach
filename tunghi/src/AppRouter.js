import React, { Component } from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './components/Main/Main';
import Authetication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import OrderHistory from './components/OrderHistory/OrderHistory';

export const AppRouter = StackNavigator({
  MH_MAIN: {
    screen: Main,
  },
  MH_AUTHENTICATION: {
    screen: Authetication
  },
  MH_CHANGE_INFO: {
    screen: ChangeInfo
  },
  MH_ORDER_HISTORY: {
    screen: OrderHistory
  }
});
