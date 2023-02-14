import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, unstable_batchedUpdates, View } from "react-native";
import { createDb } from "../models/db";
import DateTimePicker from '@react-native-community/datetimepicker';

import { Visit } from "../models/visit";
import { AddVisitProps } from "../routes/types";
import { styles } from "../styles/styles";
import Dropdown from "../components/Dropdown";
import { OutcomeTypeArray } from "../models/outcome";
import { putVisit } from "../services/visit";

export const AddVisitModal = ({ route, navigation }: AddVisitProps) => {

    const [visit, updVisit] = useState<Visit>({} as Visit);

    const loadDataCallback = useCallback(async () => {
        updVisit({...visit, doctor_id : route.params.doctorId, agent_id : route.params.agentId});
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);

    const putMyVisit = async (v: Visit) => {
        console.log(v)
        const db = await createDb();
        await putVisit(db, v);
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <Text style={styles.textInputLabel}>DATA</Text>
                <View style={{ ...styles.textInput, alignItems: 'flex-start' }}>
                    <DateTimePicker testID="dateTimePicker" value={visit.date || new Date()} mode={'date'} is24Hour={true} onChange={(event, myDate) => { myDate && updVisit({...visit, date: myDate}) }} />
                </View>
            </View>
            <View>
                <Text style={styles.textInputLabel}>ESITO</Text>
                <Dropdown data={OutcomeTypeArray} onSelect={selected => updVisit({...visit, outcome: selected.value})} label={"SELEZIONA >"}/>
            </View>
            <View>
                <Text style={styles.textInputLabel}>NOTE</Text>
                <TextInput style={{...styles.textInput, height: 100}} multiline={true} onChangeText={(myNote) => updVisit({...visit, note: myNote})} placeholder="Lasciato campione Aspirina1000" value={visit.note} />
            </View>
            <TouchableOpacity onPress={() => putMyVisit(visit)} style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}