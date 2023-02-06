import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import { AddDoctorPropsNavigation } from '../routes/types';
import { Colors } from '../styles/colors';
import { styles } from '../styles/styles';

export const DrugsHeader= () => {

    const navigation = useNavigation<AddDoctorPropsNavigation>();

    return (
        <View style={{...styles.listHeader, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.listHeaderText}>FARMACI IN ARCHIVIO</Text>
            <TouchableOpacity style={{borderRadius: 20, borderWidth: 2, borderColor: Colors.white}} onPress={()=>navigation.navigate('AggiungiFarmaco')}>
                <Text style={{color: Colors.white, fontWeight: 'bold', padding: 5}}> + </Text>
            </TouchableOpacity>
        </View>
    );
}