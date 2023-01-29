/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback, useEffect } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { createDb, createTables } from './src/models/db';
import { getDoctors } from './src/models/doctor';

const App = () => {

  const loadDataCallback = useCallback(async () => {
    const db =  await createDb();
    await createTables(db);
    const doctors = await getDoctors(db);
    console.log(doctors);
  }, [])

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);


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
