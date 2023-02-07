import React from 'react';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/styles';
import { Visit } from '../models/visit';
import { useCallback, useEffect, useState } from 'react';
import { VisitPropsNavigation } from '../routes/types';
import { createDb } from '../models/db';
import { getOutcomesByVisitId } from '../services/outcome';
import { Outcome } from '../models/outcome';
import { OutcomeMiniItem } from './outcome';

export const VisitItem = (props: { visit: Visit }) => {

    const navigation = useNavigation<VisitPropsNavigation>();
    const navigateToVisita = () => navigation.navigate('Visita', { visitId: props.visit.id })

    const [outcomes, setOutcomes] = useState([] as Outcome[]);

    const renderVisitItem = (outcome: number) => {
        switch (outcome) {
            case 1:
                return (
                    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {outcomes.map((item) => {
                            return (
                                <OutcomeMiniItem outcome={item} key={item.id} />
                            );
                        })}
                    </ScrollView>
                );
            case 0:
                return (
                    <View style={styles.visitOutcomeButtonNeutral}>
                        <Text style={styles.visitOutcomeText}>RITORNARE</Text>
                    </View>
                );
            case -1:
                return (
                    <View style={styles.visitOutcomeButtonKO}>
                        <Text style={styles.visitOutcomeText}>NEGATIVO</Text>
                    </View>
                );
        }

    }

    const loadDataCallback = useCallback(async () => {
        const db = await createDb();
        const myOutcomes = await getOutcomesByVisitId(db, props.visit.id);
        setOutcomes(myOutcomes);
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);

    return (
        <TouchableOpacity style={styles.visitItem} onPress={navigateToVisita}>
            <Text style={styles.visitDate}>{(new Date(Date.parse(props.visit.date))).toLocaleDateString()}</Text>
            {renderVisitItem(props.visit.outcome)}
        </TouchableOpacity>
    );
}