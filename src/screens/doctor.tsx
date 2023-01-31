import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { createDb } from "../models/db";
import { Doctor } from "../models/doctor";
import { getDoctorById } from "../services/doctor";
import { DoctorProps } from "../routes/types";


export const DoctorScreen = ({route, navigation} : DoctorProps) => {

    const [doctor, setDoctor] = useState({} as Doctor);

    const loadDataCallback = useCallback(async () => {
        const db = await createDb();
        const myDoctor = await getDoctorById(db, route.params.doctorId);
        setDoctor(myDoctor);
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);


    return (
        <SafeAreaView>
            <Text>{route.params.doctorId}</Text>
            <Text>{doctor.address}</Text>
        </SafeAreaView>
    );
}