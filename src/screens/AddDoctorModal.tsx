import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Doctor } from "../models/doctor";
import { AddDoctorProps } from "../routes/types";
import { Colors } from "../styles/colors";
import { styles } from "../styles/styles";

export const AddDoctorModal = ({ route, navigation }: AddDoctorProps) => {

    const [doctor, updDoctor] = useState<Doctor>({} as Doctor);

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <Text style={styles.textInputLabel}>NOME</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="Mario" value={doctor.name} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>COGNOME</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="Rossi" value={doctor.last_name} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>INDIRIZZO</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="Via Roma 1, Napoli" value={doctor.address} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>CAP</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="00100" value={doctor.postal_code} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>SPECIALIZZAZIONE</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="Neuropsichiatra" value={doctor.specialization} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>E-MAIL</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="mario.rossi@host.it" value={doctor.email} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>TELEFONO</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="060000000" value={doctor.phone} />
            </View>
            <View>
                <Text style={styles.textInputLabel}>CELLULARE</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} placeholder="33300000000" value={doctor.mobile} />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}  style={styles.formButton}>
                <Text style={styles.formButtonLabel}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
    );
}