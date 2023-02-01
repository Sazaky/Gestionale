import {Text, View} from 'react-native';
import { styles } from '../styles/styles';

export const VisitsHeader= () => {
    return (
        <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>APPUNTAMENTI</Text>
        </View>
    );
}