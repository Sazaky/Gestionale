import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { DoctorItem } from "../components/doctor";
import { DoctorsHeader } from "../components/doctorsHeader";
import { createDb } from "../models/db";
import { Doctor } from "../models/doctor";
import { getDoctors } from "../services/doctor";

export const Doctors = () => {

    const [doctors, setDoctors] = useState([] as Doctor[]);
    const isVisible = useIsFocused();

    const loadDataCallback = useCallback(async () => {
        const db = await createDb();
        const myDoctors = await getDoctors(db);
        setDoctors(myDoctors);
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback, isVisible]);


    return (
        <SafeAreaView>
            <FlatList data={doctors} renderItem={({ item }) => <DoctorItem doctor={item} />} ListHeaderComponent={() => <DoctorsHeader />} />
        </SafeAreaView>
    );
}