import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image
 } from 'react-native';
 import { getStatusBarHeight } from 'react-native-iphone-x-helper';

 import avatar from '../../assets/perfil.jpeg';

 import colors from '../../styles/colors';
 import fonts from '../../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.user}>Gustavo</Text>
      </View>

      <Image source={avatar} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading
  },
  user: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  }
});