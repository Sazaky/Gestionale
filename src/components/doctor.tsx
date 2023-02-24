import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Doctor } from "../models/doctor";
import { styles } from '../styles/styles';
import { DoctorPropsNavigation } from '../routes/types';

export const DoctorItem = (props: { doctor: Doctor }) => {

    const navigation = useNavigation<DoctorPropsNavigation>();

    return (
        <TouchableOpacity style={styles.doctorItem} onPress={() => navigation.navigate('Medico', { doctorId: props.doctor.id })}>
            <View >
                <Text style={styles.doctorLastName}>{props.doctor.name} {props.doctor.last_name}</Text>
                <Text style={styles.doctorSpecialization}>{props.doctor.specialization}</Text>
            </View>
            <View >
                {props.doctor.last_visit_delay > 0
                    ? <View style={styles.doctorDelay}><Text style={styles.statusText}>{props.doctor.last_visit_delay}</Text></View>
                    : <View style={styles.doctorNoDelay}><Text style={styles.statusText}>{props.doctor.last_visit_delay}</Text></View>
                }
            </View>

        </TouchableOpacity>
    );
}