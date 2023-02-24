import React from "react";
import { useCallback, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { createDb } from "../models/db";
import { Doctor } from "../models/doctor";
import { getDoctorById } from "../services/doctor";
import { DoctorProps } from "../routes/types";
import { Visit } from "../models/visit";
import { getVisitsByDoctorId } from "../services/visit";
import { VisitItem } from "../components/VisitItem";
import { VisitsHeader } from "../components/visitsHeader";
import { styles } from "../styles/styles";
import { Colors } from "../styles/colors";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const DoctorScreen = ({ route, navigation }: DoctorProps) => {

    const [doctor, setDoctor] = useState({} as Doctor);
    const [visits, setVisits] = useState([] as Visit[]);
    const isVisible = useIsFocused();



    const loadDataCallback = useCallback(async () => {
        const db = await createDb();
        const myDoctor = await getDoctorById(db, route.params.doctorId);
        setDoctor(myDoctor);
        const myVisits = await getVisitsByDoctorId(db, route.params.doctorId);
        setVisits(myVisits);
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback, isVisible]);


    return (
        <View style={{flex: 1}}>
            <View style={styles.doctorScreen}>
                <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{doctor.name} {doctor.last_name}</Text>
                <Text style={{ fontStyle: 'italic', marginTop: 5 }}>{doctor.address}</Text>
                <Text style={{ marginTop: 5 }}>{doctor.email}</Text>
                <Text style={{ marginTop: 5 }}>{doctor.phone}</Text>
                <Text style={{ marginTop: 5 }}>{doctor.mobile}</Text>
                <View style={{ borderRadius: 20, backgroundColor: Colors.green, width: '25%', marginTop: 5, padding: 5, alignItems: 'center' }}>
                    <Text style={{ color: Colors.white }}>
                        CAP {doctor.postal_code}
                    </Text>
                </View>

            </View>
            <SafeAreaView style={{flex: 1}}>
                <FlatList data={visits} renderItem={({ item }) => <VisitItem visit={item} />} ListHeaderComponent={() => <VisitsHeader doctor={doctor.id} agent={visits[0] && visits[0].agent_id} />} />
            </SafeAreaView>
        </View>
    );
}