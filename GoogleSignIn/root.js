import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore  from './js/store/index'
import AppNavigator from './js/navigator';

const store = configureStore()

export default class Root extends React.PureComponent{
  render() {
    return (
      <Provider store = { store }>
        <AppNavigator/>
      </Provider>
    );
  }
}
