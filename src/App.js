/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
// import 'react-native-gesture-handler';

import {StyleSheet, useColorScheme, View} from 'react-native';

import Navigator from './Navigator';
// import Navigator from './Navigator';

// import {NavigationContainer} from '@react-navigation/native';
// import {Navigation} from 'react-native-navigation';

// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <Navigator />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
