import React from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createDb } from "../models/db";
import { Drug } from "../models/drug";
import { AddDrugProps } from "../routes/types";
import { putDrug } from "../services/drug";
import { styles } from "../styles/styles";

export const AddDrugModal = ({ route, navigation }: AddDrugProps) => {

    const [drug, updDrug] = useState<Drug>({} as Drug);
    const putMyDrug = async (d: Drug) => {
        console.log(d)
        const db = await createDb();
        await putDrug(db, d);
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <Text style={styles.textInputLabel}>NOME</Text>
                <TextInput style={styles.textInput} onChangeText={(myName) => {updDrug({...drug, name: myName}) }} placeholder="Aspirina1000" value={drug.name} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>DESCRIZIONE</Text>
                <TextInput style={styles.textInput} onChangeText={(myDecsription) => {updDrug({...drug, description: myDecsription}) }} placeholder="Anti-infiammatorio" value={drug.description} />
            </View>
                       <TouchableOpacity onPress={() => putMyDrug(drug)}  style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}