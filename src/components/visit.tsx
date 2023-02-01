import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/styles';
import { Visit } from '../models/visit';
import { useEffect, useState } from 'react';
import { VisitPropsNavigation } from '../routes/types';

export const VisitItem = (props: { visit: Visit }) => {

    const navigation = useNavigation<VisitPropsNavigation>();
    const navigateToVisita = ()=>navigation.navigate('Visita', {visitId: props.visit.id})
    const [date, setDate] = useState(0);

    useEffect(() => {
        setDate(Date.parse(props.visit.date))
    }, []);

    const visitOutcome = (outcome: number) => {
        switch (outcome) {
            case 1:
                return (
                    <TouchableOpacity style={styles.visitOutcomeButtonOK} onPress={navigateToVisita}>
                        <Text style={styles.visitOutcomeText}>MATERIALE</Text>
                    </TouchableOpacity>
                );
            case 0:
                return (
                    <TouchableOpacity style={styles.visitOutcomeButtonNeutral} onPress={navigateToVisita}>
                        <Text style={styles.visitOutcomeText}>RITORNARE</Text>
                    </TouchableOpacity>
                );
            case -1:
                return (
                    <TouchableOpacity style={styles.visitOutcomeButtonKO} onPress={navigateToVisita}>
                        <Text style={styles.visitOutcomeText}>NEGATIVO</Text>
                    </TouchableOpacity>
                );
        }

    }

    return (
        <View style={styles.visitItem} >
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.visitDateLabel}>DATA</Text>
                <Text style={styles.visitDate}>{(new Date(date)).toLocaleDateString()}</Text>
            </View>
            {visitOutcome(props.visit.outcome)}
        </View>
    );
}