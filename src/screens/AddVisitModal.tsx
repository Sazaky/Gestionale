import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createDb } from "../models/db";
import DateTimePicker from '@react-native-community/datetimepicker';

import { Visit } from "../models/visit";
import { AddVisitProps } from "../routes/types";
import { styles } from "../styles/styles";
import { Outcome, OutcomeTypeArray } from "../models/outcome";
import { putVisit } from "../services/visit";
import { Colors } from "../styles/colors";
import OutcomeSelect from "../components/OutcomeSelect";
import ProductOutcomeSelect from "../components/ProductOutcomeSelect";

export const AddVisitModal = ({ route, navigation }: AddVisitProps) => {

    const [visit, updVisit] = useState<Visit>({} as Visit);
    const [outcomes, updOutcomes] = useState([] as Outcome[]);
    const [modal, setVisible] = useState(false);

    const initializeVisit = useCallback(async () => {
        updVisit({ ...visit, doctor_id: route.params.doctorId, agent_id: route.params.agentId });
    }, []);
 

    useEffect(() => {
        initializeVisit();
    }, [initializeVisit]);

    const putMyVisit = async (v: Visit) => {
        console.log(v)
        const db = await createDb();
        await putVisit(db, v);
        navigation.goBack();
    }

    return (
        <View style={{ margin: 10 }}>
            <View style={{...styles.textInput, flexDirection: 'row', alignContent: 'flex-start'}}>
            <DateTimePicker testID="dateTimePicker" value={visit.date || new Date()} mode={'date'} is24Hour={true} onChange={(event, myDate) => { myDate && updVisit({ ...visit, date: myDate }) }} />

            </View>
            <OutcomeSelect />
            <ProductOutcomeSelect />
            <View>
                <Text style={styles.textInputLabel}>NOTE</Text>
                <TextInput style={{ ...styles.textInput, height: 100 }} multiline={true} onChangeText={(myNote) => updVisit({ ...visit, note: myNote })} placeholder="Lasciato campione Aspirina1000" value={visit.note} />
            </View>
            <TouchableOpacity onPress={() => putMyVisit(visit)} style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}