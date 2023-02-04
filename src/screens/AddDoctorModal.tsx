import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { AddDoctorProps } from "../routes/types";
import { Colors } from "../styles/colors";
import { styles } from "../styles/styles";

export const AddDoctorModal = ({ route, navigation }: AddDoctorProps) => {

    const [text, onChangeText] = useState('Useless Text');

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>NOME</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>COGNOME</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>INDIRIZZO</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>CAP</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>SPECIALIZZAZIONE</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>E-MAIL</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>TELEFONO</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <View>
                <Text style={{ margin: 10, marginBottom: 0, fontWeight: 'bold', color: Colors.green }}>CELLULARE</Text>
                <TextInput style={styles.textInput} onChangeText={() => { }} value={text} />
            </View>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}