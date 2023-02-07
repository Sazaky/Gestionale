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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDb, createTables } from './src/models/db';
import { Doctors } from './src/screens/Doctors';
import { DoctorScreen } from './src/screens/Doctor';
import { StackParamList } from './src/routes/types';
import { VisitScreen } from './src/screens/Visit';
import { Home } from './src/screens/Home';
import { AddDoctorModal } from './src/screens/AddDoctorModal';
import { Drugs } from './src/screens/Drugs';
import { AddDrugModal } from './src/screens/AddDrugModal';


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
        <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Medici" component={Doctors} />
        <Stack.Screen name="Farmaci" component={Drugs} />
        <Stack.Screen name="Medico" component={DoctorScreen} initialParams={{ doctorId: undefined }} />
        <Stack.Screen name="Visita" component={VisitScreen} initialParams={{ visitId: undefined }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="AggiungiMedico" component={AddDoctorModal} />
        <Stack.Screen name="AggiungiFarmaco" component={AddDrugModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
