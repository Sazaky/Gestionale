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
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import { DoctorItem } from './src/components/doctor';
import { DoctorsHeader } from './src/components/doctorsHeader';
import { createDb, createTables } from './src/models/db';
import { Doctor } from './src/models/doctor';
import { getDoctors } from './src/services/doctor';

const App = () => {

  const startDoctors : Doctor[] = [];
  const [doctors, setDoctors] = useState(startDoctors);


  const loadDataCallback = useCallback(async () => {
    const db =  await createDb();
    await createTables(db);
    const myDoctors = await getDoctors(db);
    setDoctors(myDoctors);
    console.log(doctors);
  }, []);


  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);


  return (
    <SafeAreaView>
    <FlatList data={doctors} renderItem={({item}) => <DoctorItem doctor={item}/>} ListHeaderComponent={() => <DoctorsHeader/>}/>
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
