import React, { useCallback, useEffect, useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Doctor } from "../models/doctor";
import { styles } from '../styles/styles';
import { DoctorPropsNavigation } from '../routes/types';

export const DoctorItem = (props: { doctor: Doctor }) => {

    const navigation = useNavigation<DoctorPropsNavigation>();

    const delay = Math.floor(((new Date()).getTime() - props.doctor.last_visit.getTime())/(3600 * 1000 * 24));

    return (
        <TouchableOpacity style={styles.doctorItem} onPress={() => navigation.navigate('Medico', { doctorId: props.doctor.id })}>
            <View >
                <Text style={styles.doctorLastName}>{props.doctor.name} {props.doctor.last_name}</Text>
                <Text style={styles.doctorSpecialization}>{props.doctor.specialization}</Text>
            </View>
            <View >
                {delay > 0
                    ? <View style={styles.doctorDelay}><Text style={styles.statusText}>{delay}</Text></View>
                    : <View style={styles.doctorNoDelay}><Text style={styles.statusText}>{delay}</Text></View>
                }
            </View>

        </TouchableOpacity>
    );
}