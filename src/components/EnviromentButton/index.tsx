import React from 'react';
import { 
  StyleSheet,
  View,
  Text
 } from 'react-native';
 import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

 import colors from '../../styles/colors';
 import fonts from '../../styles/fonts';

 interface EnviromentButtonProps extends RectButtonProps {
   title: string;
   active?: boolean;
 }

export function EnviromentButton({ 
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) {
  return (
    <RectButton
      style={[
        styles.button,
        active && styles.buttonActive,
      ]}
      {...rest}
    >
      <Text 
        style={[
          styles.buttonText,
          active && styles.buttonTextActive,
        ]}
      >
        {title}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.shape,
    width: 86,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  buttonActive: {
    backgroundColor: colors.green_light,
  },
  buttonText: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  buttonTextActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading
  },
});
