import {Text, View} from 'react-native';
import { Doctor } from "../models/doctor";
import { styles } from '../styles/styles';

export const VisitsHeader= () => {
    return (
        <View style={styles.doctorHeader}>
            <Text style={styles.doctorsHeaderText}>APPUNTAMENTI</Text>
        </View>
    );
}