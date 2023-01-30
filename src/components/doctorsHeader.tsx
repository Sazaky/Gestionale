import {Text, View} from 'react-native';
import { Doctor } from "../models/doctor";
import { styles } from '../styles/styles';

export const DoctorsHeader= () => {
    return (
        <View style={styles.doctorHeader}>
            <Text style={styles.doctorsHeaderText}>MEDICI IN ARCHIVIO</Text>
        </View>
    );
}