import React from "react";
import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { DoctorItem } from "../components/doctor";
import { DoctorsHeader } from "../components/doctorsHeader";
import { OutcomeItem } from "../components/outcome";
import { OutcomeHeader } from "../components/outcomeHeader";
import { createDb } from "../models/db";
import { Outcome } from "../models/outcome";
import { VisitProps } from "../routes/types";
import { getOutcomesByVisitId } from "../services/outcome";

export const VisitScreen = ({ route, navigation }: VisitProps) => {

    const [outcomes, setOutcomes] = useState([] as Outcome[]);


    const loadDataCallback = useCallback(async () => {
        const db = await createDb();
        const myOutcomes = await getOutcomesByVisitId(db, route.params.visitId);
        setOutcomes(myOutcomes);
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback]);


    return (
        <SafeAreaView>
            <FlatList data={outcomes} renderItem={({ item }) => <OutcomeItem outcome={item} />} ListHeaderComponent={() => <OutcomeHeader />} />
        </SafeAreaView>
    );
}