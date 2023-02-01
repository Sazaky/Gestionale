import { Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { Outcome } from '../models/outcome';

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
                <View style={styles.visitOutcomeButtonNeutral}>
                    <Text style={styles.visitOutcomeText}>BROCHURE</Text>
                </View>
            );
    }

}



export const OutcomeItem = (props: { outcome: Outcome }) => {


    return (
        <View style={styles.outcomeItem} >
            <View>
                <Text style={{fontWeight: 'bold'}}>{props.outcome.product_name}</Text>
                <Text style={{fontStyle: 'italic'}}>{props.outcome.product_description}</Text>
            </View>                
            {productInfoType(props.outcome.product_info_type)}
        </View>
    );
}