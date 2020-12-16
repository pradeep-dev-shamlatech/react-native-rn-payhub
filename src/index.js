/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

import { NativeModules } from 'react-native';

const { RnPayhub } = NativeModules;

class example extends Component {

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'thepay_test_1DP5mmOlF5G5ag',
          amount: '5000',
          external: {
            wallets: ['paypal']
          },
          name: 'foo',
          prefill: {
            email: 'pradeep89jai@gmail.com',
            contact: '8955806560',
            name: 'Pradeep Tripathi'
          },
          theme: {color: '#F37254'}
        }
        RnPayhub.open(options).then((data) => {
          // handle success
          alert(`Success: ${data}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
        RnPayhub.onExternalWalletSelection(data => {
          alert(`External Wallet Selected: ${data.external_wallet} `);
        });
      }}>
      <Text style = {styles.text}>PAY</Text>
      </TouchableHighlight>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('example', () => example);
