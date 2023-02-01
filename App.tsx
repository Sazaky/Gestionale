/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDb, createTables } from './src/models/db';
import { Doctors } from './src/screens/doctors';
import { DoctorScreen } from './src/screens/doctor';
import { StackParamList } from './src/routes/types';


const Stack = createNativeStackNavigator<StackParamList>();


const App = () => {

  const createDbCb = useCallback(async () => {
    const db = await createDb();
    await createTables(db);
  }, []);

  useEffect(() => {
    createDbCb();
  }, [createDbCb]);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Medici" component={Doctors} />
        <Stack.Screen name="Medico" component={DoctorScreen} initialParams={{ doctorId: undefined }} />
      </Stack.Navigator>
    </NavigationContainer>
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
