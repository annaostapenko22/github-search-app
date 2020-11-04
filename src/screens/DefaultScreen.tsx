import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {View} from 'react-native';
import Home from './HomeScreen';
import History from './HistoryScreen';

const DefaultScreen = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/history" component={History} />
      </Switch>
    </NativeRouter>
  );
};

export default DefaultScreen;
