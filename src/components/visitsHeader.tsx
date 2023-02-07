import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { AddVisitPropsNavigation } from '../routes/types';
import { Colors } from '../styles/colors';
import { styles } from '../styles/styles';

export const VisitsHeader= () => {

    const navigation = useNavigation<AddVisitPropsNavigation>();

    return (
        <View style={{...styles.listHeader, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.listHeaderText}>APPUNTAMENTI</Text>
            <TouchableOpacity style={{borderRadius: 20, borderWidth: 2, borderColor: Colors.white}} onPress={()=>navigation.navigate('AggiungiVisita')}>
                <Text style={{color: Colors.white, fontWeight: 'bold', padding: 5}}> + </Text>
            </TouchableOpacity>
        </View>
    );
}