import React from 'react';
import { 
  StyleSheet,
  View,
 } from 'react-native';
 import LottieView from 'lottie-react-native';

import LoadAnimation from '../../assets/load.json';

export function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={LoadAnimation}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  }
});