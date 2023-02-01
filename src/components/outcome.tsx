import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Doctor } from "../models/doctor";
import { styles } from '../styles/styles';
import { DoctorPropsNavigation } from '../routes/types';
import { Outcome } from '../models/outcome';

export const OutcomeItem = (props: { outcome: Outcome }) => {


    return (
        <View style={styles.doctorItem} >
         <Text>PRODOTTI</Text>    
        </View>
    );
}