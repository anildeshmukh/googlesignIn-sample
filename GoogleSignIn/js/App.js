/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import config from './config'

class App extends Component<Props> {

  async componentDidMount() {
    this._configureGoogleSignIn();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: config.webClientId,
      offlineAccess: true,
      forceConsentPrompt: true,
    }).then(res=> console.log('GOOGLE_', res)).catch((error)=> console.log('GOOGLE_', error));
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('GOOGLE_', JSON.stringify(userInfo))
      this.setState({ userInfo });
      this.props.dispatch({type:'SET_USER_NAME',payload:userInfo.user.givenName})
      this.props.navigation.navigate('WelcomeScreen')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('GOOGLE_','SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('GOOGLE_','IN_PROGRESS');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('GOOGLE_','PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        console.log('GOOGLE_', error);
        // some other error happened
      }
    }
  };
  render() {
    console.log('GOOGLE_',this.props.userName)
    let message = this.props.userName?'Please Logout':'Please Signin'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{message}</Text>
        { this.props.userName
            ?<Button title='Logout' onPress={()=>{//todo please implement logout}} />
            :<GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}
              disabled={false} />
          }
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
