import { useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { DrugItem } from "../components/DrugItem";
import { DrugsHeader } from "../components/DrugsHeader";
import { createDb } from "../models/db";
import { Drug } from "../models/drug";
import { getDrugs } from "../services/drug";

export const Drugs = () => {
    const [drugs, setDrugs] = useState([] as Drug[]);
    const isVisible = useIsFocused();

    const loadDataCallback = useCallback(async () => {
        const db = await createDb();
        const myDrugs = await getDrugs(db);
        setDrugs(myDrugs);
    }, []);


    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback, isVisible]);


    return (
        <SafeAreaView>
            <FlatList data={drugs} renderItem={({ item }) => <DrugItem drug={item} />} ListHeaderComponent={() => <DrugsHeader />} />
        </SafeAreaView>
    );
}