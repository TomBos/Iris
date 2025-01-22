import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, StyleSheet, useColorScheme } from 'react-native';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const dynamicStyles = colorScheme === 'dark' ? darkModeStyles : lightModeStyles;

  return (
    <SafeAreaView style={[styles.safeArea, dynamicStyles.safeArea]}>
      <ScrollView style={[styles.scrollView, dynamicStyles.scrollView]}>
        <View style={[styles.nav, dynamicStyles.nav]}>
            <Text style={[styles.text, dynamicStyles.text]}>Navigation Panel</Text>
        </View>
        <View>
          <Image
            style={styles.banner}
            source={require('./src/assets/Banner.gif')}
          />
          <Text style={[styles.text, dynamicStyles.text]}>Change Cover</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const lightModeStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFF',
  },
  nav: {
      backgroundColor: '#FFF',
      padding: 10,
  },
  scrollView: {
    backgroundColor: '#FFF',
  },
  text: {
    color: '#000',
  },
});

const darkModeStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000',
  },
  nav: {
      backgroundColor: '#000',
      padding: 10,
  },
  scrollView: {
    backgroundColor: '#000',
  },
  text: {
    color: '#FFF',
  },
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 250,
  },
  nav: {
    height: 55,
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
