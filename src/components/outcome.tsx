import { Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { Outcome } from '../models/outcome';
import { Colors } from '../styles/colors';
import { SvgUri } from 'react-native-svg';
import React from 'react';

const productInfoType = (info: number) => {
    switch (info) {
        case 1:
            return (
                <View style={styles.visitOutcomeButtonOK}>
                    <Text style={styles.visitOutcomeText}>CAMPIONE</Text>
                </View>
            );
        case 0:
            return (
                <View style={{...styles.visitOutcomeButtonNeutral, backgroundColor: Colors.purple}}>
                    <Text style={styles.visitOutcomeText}>BROCHURE</Text>
                </View>
            );
    }

}



export const OutcomeItem = (props: { outcome: Outcome }) => {


    return (
        <View style={styles.outcomeItem} >
            <View>
                <Text style={{ fontWeight: 'bold' }}>{props.outcome.product_name}</Text>
                <Text style={{ fontStyle: 'italic' }}>{props.outcome.product_description}</Text>
            </View>
            {productInfoType(props.outcome.product_info_type)}
        </View>
    );
}

const outcomeStatusIconUri = (outcome: Outcome) => {
    switch (outcome.product_info_type) {
        case 0 :
            return 'https://www.svgrepo.com/download/325975/medicines.svg';
        case 1 :
            return 'https://www.svgrepo.com/download/325942/i-documents-accepted.svg';
        default:
            return 'https://www.svgrepo.com/download/325942/i-documents-accepted.svg';

    }
}

const outcomeStatusColor = (outcome: Outcome) => {
    switch (outcome.product_info_type) {
        case 0 :
            return Colors.purple;
        case 1 :
            return Colors.green;
        default:
            return Colors.green;
    }
}

export const OutcomeMiniItem = (props: { outcome: Outcome }) => {

    return (
        <View style={{...styles.outcomeMiniItem, backgroundColor: outcomeStatusColor(props.outcome)}}>
            <View style={{marginRight: 3}}>
            <SvgUri color={Colors.white} width={20} height={20} uri={outcomeStatusIconUri(props.outcome)} />
            </View>
            <Text style={{color: Colors.white}}>{props.outcome.product_name}</Text>
        </View>
    )
}
