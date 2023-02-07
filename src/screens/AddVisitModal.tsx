import React from "react";
import { useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createDb } from "../models/db";
import DateTimePicker from '@react-native-community/datetimepicker';

import { Visit } from "../models/visit";
import { AddVisitProps } from "../routes/types";
import { styles } from "../styles/styles";
import Dropdown from "../components/Dropdown";
import { OutcomeTypeArray } from "../models/outcome";

export const AddVisitModal = ({ route, navigation }: AddVisitProps) => {

    const [visit, updVisit] = useState<Visit>({} as Visit);
    const [curDate, updCurDate] = useState<Date>(new Date());
    const [note, updNote] = useState('');

    const [selected, setSelected] = useState({label:'One', value:1});


    const putMyVisit = async (v: Visit) => {
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <Text style={styles.textInputLabel}>DATA</Text>
                <View style={{ ...styles.textInput, alignItems: 'flex-start' }}>
                    <DateTimePicker testID="dateTimePicker" value={curDate} mode={'date'} is24Hour={true} onChange={(event, myDate) => { myDate && updCurDate(myDate) }} />
                </View>
            </View>
            <View>
                <Text style={styles.textInputLabel}>ESITO</Text>
                <Dropdown data={OutcomeTypeArray} onSelect={setSelected} label={"SELEZIONA >"}/>
            </View>
            <View>
                <Text style={styles.textInputLabel}>NOTE</Text>
                <TextInput style={{...styles.textInput, height: 100}} multiline={true} onChangeText={(myNote) => updNote(myNote)} placeholder="Lasciato campione Aspirina1000" value={note} />
            </View>
            <TouchableOpacity onPress={() => putMyVisit(visit)} style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}