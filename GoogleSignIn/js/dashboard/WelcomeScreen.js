/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

type Props = {};
class App extends Component<Props> {
  static navigationOptions = {
        title: 'Dashbord',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {this.props.userName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state)=>{
  return {userName:state.user.username}
}

export default connect(mapStateToProps)(App);
