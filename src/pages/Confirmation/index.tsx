import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Confirmation() {
  const { navigate } = useNavigation();

  const handleGoToDashboard = useCallback(() => {
    navigate('PlantSelect')
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>

        <Text style={styles.title}>
          Prontinho!
        </Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar" onPress={handleGoToDashboard} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,
    paddingVertical: 10,
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 40,
    width: '100%',
  }
});
