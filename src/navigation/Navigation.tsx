import React from 'react';
import { View, Text } from 'react-native';

export const Navigation = ({ styles, dynamicStyles }: any): React.JSX.Element => {
  return (
    <View style={[styles.nav, dynamicStyles.nav]}>
      <Text style={[styles.text, dynamicStyles.text]}>Navigation Panel</Text>
    </View>
  );
};
