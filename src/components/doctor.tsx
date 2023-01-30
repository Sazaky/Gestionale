import {Text, View} from 'react-native';
import { Doctor } from "../models/doctor";
import { styles } from '../styles/styles';

export const DoctorItem = (props: {doctor: Doctor}) => {
    return (
        <View style={styles.doctorItem}>
            <Text style={styles.doctorLastName}>{props.doctor.last_name}</Text>
            <Text>{props.doctor.name}</Text>
        </View>
    );
}