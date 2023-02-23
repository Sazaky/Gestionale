import React from 'react';

import { ScrollView, Text, View } from 'react-native';

import { styles } from '../styles/styles';
import { Visit } from '../models/visit';
import { useCallback, useEffect, useState } from 'react';
import { createDb } from '../models/db';
import { getOutcomesByVisitId } from '../services/outcome';
import { Outcome } from '../models/outcome';
import { OutcomeMiniItem } from './outcome';
import { Colors } from '../styles/colors';

export const VisitItem = (props: { visit: Visit }) => {

    const [outcomes, setOutcomes] = useState([] as Outcome[]);

    const renderVisitItem = (outcome: number) => {
        switch (outcome) {
            case 1:
                return (
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {outcomes.map((item) => {
                            return (
                                <OutcomeMiniItem outcome={item} key={item.id} />
                            );
                        })}
                    </View>
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
        <View style={styles.visitItem}>
            <Text style={styles.visitDate}>{(props.visit.date).toLocaleDateString()}</Text>
            <Text style={{margin: 5, fontStyle: 'italic', color: Colors.black}}>{props.visit.note}</Text>
            {renderVisitItem(props.visit.status)}
        </View>
    );
}