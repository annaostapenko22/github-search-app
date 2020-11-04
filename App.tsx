/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reposOrganzationReducer} from './redux/reducers';
import Thunk from 'redux-thunk';

import DefaultScreen from './src/screens/DefaultScreen';

const rootReducer = combineReducers({
  reposOrganzation: reposOrganzationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk)),
);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <DefaultScreen />
    </Provider>
  );
};

export default App;
