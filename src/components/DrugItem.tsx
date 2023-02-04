import { Text, View } from 'react-native';

import { styles } from '../styles/styles';
import { Drug } from '../models/drug';

export const DrugItem = (props: { drug: Drug }) => {

    return (
        <View style={styles.doctorItem}>
            <View >
                <Text style={styles.doctorLastName}>{props.drug.name}</Text>
                <Text style={styles.doctorSpecialization}>{props.drug.description}</Text>
            </View>
        </View>
    );
}