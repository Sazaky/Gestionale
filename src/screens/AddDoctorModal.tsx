import React from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createDb } from "../models/db";
import { Doctor } from "../models/doctor";
import { AddDoctorProps } from "../routes/types";
import { putDoctor } from "../services/doctor";
import { styles } from "../styles/styles";

export const AddDoctorModal = ({ route, navigation }: AddDoctorProps) => {

    const [doctor, updDoctor] = useState<Doctor>({} as Doctor);
    const putMyDoctor = async (d: Doctor) => {
        console.log(d)
        const db = await createDb();
        await putDoctor(db, d);
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <Text style={styles.textInputLabel}>NOME</Text>
                <TextInput style={styles.textInput} onChangeText={(myName) => {updDoctor({...doctor, name: myName}) }} placeholder="Mario" value={doctor.name} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>COGNOME</Text>
                <TextInput style={styles.textInput} onChangeText={(myLastName) => {updDoctor({...doctor, last_name: myLastName}) }} placeholder="Rossi" value={doctor.last_name} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>INDIRIZZO</Text>
                <TextInput style={styles.textInput} onChangeText={(myAddress) => {updDoctor({...doctor, address: myAddress}) }} placeholder="Via Roma 1, Napoli" value={doctor.address} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>CAP</Text>
                <TextInput style={styles.textInput} onChangeText={(myPostalCode) => { updDoctor({...doctor, postal_code: myPostalCode}) }} placeholder="00100" value={doctor.postal_code} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>SPECIALIZZAZIONE</Text>
                <TextInput style={styles.textInput} onChangeText={(mySpecialization) => {updDoctor({...doctor, specialization: mySpecialization})  }} placeholder="Neuropsichiatra" value={doctor.specialization} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>E-MAIL</Text>
                <TextInput style={styles.textInput} onChangeText={(myEmail) => { updDoctor({...doctor, email: myEmail}) }} placeholder="mario.rossi@host.it" value={doctor.email} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>TELEFONO</Text>
                <TextInput style={styles.textInput} onChangeText={(myPhone) => {updDoctor({...doctor, phone: myPhone}) }} placeholder="060000000" value={doctor.phone} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>CELLULARE</Text>
                <TextInput style={styles.textInput} onChangeText={(myMobile) => {updDoctor({...doctor, mobile: myMobile})}} placeholder="33300000000" value={doctor.mobile} />
            </View>
            <TouchableOpacity onPress={() => putMyDoctor(doctor)}  style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}