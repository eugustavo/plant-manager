import React, { useCallback } from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  View,
  Image, 
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons';

import wateringImg from '../../assets/watering.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Welcome() {
  const { navigate } = useNavigation();

  const handleStart = useCallback(() => {
    navigate('UserIdentification')
  }, [navigate]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image 
          source={wateringImg} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 36,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 66,
  },
  buttonIcon: {
    fontSize: 26,
    color: colors.white
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  }
});
