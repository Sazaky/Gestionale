/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.highlight}>Ciao Dario!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    verticalAlign: 'center',
  },
});

export default App;
