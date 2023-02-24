import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createDb } from "../models/db";

import { Status, Visit } from "../models/visit";
import { AddVisitProps } from "../routes/types";
import { styles } from "../styles/styles";
import { Outcome, OutcomeInfoType } from "../models/outcome";
import { putVisit } from "../services/visit";
import OutcomeSelect from "../components/OutcomeSelect";
import DrugsSelect from "../components/DrugsSelect";
import { putOutcomesByVisitId } from "../services/outcome";
import { VisitDatePicker } from "../components/VisitDatePicker";
import { updLastVisit } from "../services/doctor";

export const AddVisitModal = ({ route, navigation }: AddVisitProps) => {

    const [visit, updVisit] = useState<Visit>({} as Visit);
    const [samples, updSamples] = useState([] as string[]);
    const [depliants, updDepliants] = useState([] as string[]);
    const [isFuture, setFuture] = useState(true);

    const initializeVisit = useCallback(async () => {
        updVisit({ ...visit, doctor_id: route.params.doctorId, agent_id: route.params.agentId });
    }, []);

    const updVisitDate = (myDate: Date) => {
        if ( myDate < new Date() ) {
            setFuture(false);
            updVisit({ ...visit, date: myDate });
        } else {
            setFuture(true);
            updVisit({ ...visit, date: myDate, status: Status.PROGRAMMATA });
        }

    }

    useEffect(() => {
        initializeVisit();
    }, [initializeVisit]);

    const putMyVisit = async (v: Visit) => {
        const db = await createDb();
        const visitId = await putVisit(db, v);
        if (!isFuture) {
            const myDepliants = depliants.map(item => { return ({ product_id: parseInt(item), product_info_type: OutcomeInfoType.DEPLIANT }) })
            const mySamples = samples.map(item => { return ({ product_id: parseInt(item), product_info_type: OutcomeInfoType.CAMPIONE }) })
            await putOutcomesByVisitId(db, myDepliants.concat(mySamples) as Outcome[], visitId);
            await updLastVisit(db, v);

        }
        navigation.goBack();
    }

    const askOutcome = () => {
        return (
            <View>
                <OutcomeSelect updVisit={updVisit} visit={visit} />
                <View>
                    <Text style={styles.textInputLabel}>CAMPIONI</Text>
                    <DrugsSelect updOutcomes={updSamples} />
                </View>
                <View>
                    <Text style={styles.textInputLabel}>DEPLIANT</Text>
                    <DrugsSelect updOutcomes={updDepliants} />
                </View>
            </View>
        )
    }

    return (
        <View style={{ margin: 10, justifyContent: 'space-between', flex: 1 }}>
            <View>
                <VisitDatePicker updDate={updVisitDate} />
                <View>
                    <Text style={styles.textInputLabel}>NOTE</Text>
                    <TextInput style={{ ...styles.textInput, height: 100 }} multiline={true} onChangeText={(myNote) => updVisit({ ...visit, note: myNote })} placeholder="Lasciato campione Aspirina1000" value={visit.note} />
                </View>
                {
                    !isFuture
                        ? askOutcome()
                        : undefined
                }
            </View>

            <TouchableOpacity onPress={() => putMyVisit(visit)} style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}