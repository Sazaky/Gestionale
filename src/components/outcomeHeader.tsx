import {Text, View} from 'react-native';
import { styles } from '../styles/styles';

export const OutcomeHeader= () => {
    return (
        <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>ESITO VISITA</Text>
        </View>
    );
}