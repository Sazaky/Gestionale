import {Text, View} from 'react-native';
import { styles } from '../styles/styles';

export const DoctorsHeader= () => {
    return (
        <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>MEDICI IN ARCHIVIO</Text>
        </View>
    );
}