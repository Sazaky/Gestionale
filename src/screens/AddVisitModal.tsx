import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createDb } from "../models/db";
import DateTimePicker from '@react-native-community/datetimepicker';

import { Visit } from "../models/visit";
import { AddVisitProps } from "../routes/types";
import { styles } from "../styles/styles";
import { Outcome, OutcomeInfoType } from "../models/outcome";
import { putVisit } from "../services/visit";
import OutcomeSelect from "../components/OutcomeSelect";
import DrugsSelect from "../components/DrugsSelect";
import { putOutcomesByVisitId } from "../services/outcome";
import { VisitDatePicker } from "../components/VisitDatePicker";

export const AddVisitModal = ({ route, navigation }: AddVisitProps) => {

    const [visit, updVisit] = useState<Visit>({} as Visit);
    const [samples, updSamples] = useState([] as string[]);
    const [depliants, updDepliants] = useState([] as string[]);

    

    const initializeVisit = useCallback(async () => {
        updVisit({ ...visit, doctor_id: route.params.doctorId, agent_id: route.params.agentId });
    }, []);

    const updVisitDate = (myDate: Date) => {
        updVisit({...visit, date: myDate})
    }


    useEffect(() => {
        initializeVisit();
    }, [initializeVisit]);

    const putMyVisit = async (v: Visit) => {
        console.log(v)
        const myDepliants = depliants.map(item => {return({product_id: parseInt(item), product_info_type: OutcomeInfoType.DEPLIANT })})
        const mySamples = samples.map(item => {return({product_id: parseInt(item), product_info_type: OutcomeInfoType.CAMPIONE })})
        console.log();
        const db = await createDb();
        const visitId = await putVisit(db, v);
        await putOutcomesByVisitId(db, myDepliants.concat(mySamples) as Outcome[], visitId);
        navigation.goBack();
    }

    return (
        <View style={{ margin: 10 }}>

            <VisitDatePicker updDate={updVisitDate}/>
            <OutcomeSelect updVisit={updVisit} visit={visit}/>
            <View>
                <Text style={styles.textInputLabel}>CAMPIONI</Text>
                <DrugsSelect updOutcomes={updSamples} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>DEPLIANT</Text>
                <DrugsSelect updOutcomes={updDepliants} />
            </View>
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