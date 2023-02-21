import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from '../styles/styles';


export const VisitDatePicker = (props: { updDate: (d: Date) => void }) => {

    const [date, setDate] = useState(new Date());
    const onChange = (_event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (selectedDate) {
            const currentDate = selectedDate;
            setDate(currentDate);
            props.updDate(currentDate);
        }
    };

    const showMode = (currentMode: string) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    if (Platform.OS == 'android') {
        return (
            <TouchableOpacity onPress={showDatepicker}>
                <View style={{ ...styles.textInput, marginVertical: 15, flexDirection: 'row', alignContent: 'flex-start' }}>
                    <Text style={{ fontSize: 16, paddingVertical: 5 }}>{date.toLocaleString('it-it', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <View style={{ ...styles.textInput, flexDirection: 'row', alignContent: 'flex-start' }}>
                <DateTimePicker testID="dateTimePicker" value={date || new Date()} mode={'date'} is24Hour={true} onChange={onChange} />
            </View>
        );

    }


}