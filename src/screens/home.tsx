import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../styles/colors";
import { SvgUri } from 'react-native-svg';
import { useNavigation } from "@react-navigation/native";
import { DoctorPropsNavigation, DrugsPropsNavigation, VisitPropsNavigation } from "../routes/types";

// https://www.svgrepo.com/collection/health-icons-outlined/2

export const Home = () => {

    const navDoctor = useNavigation<DoctorPropsNavigation>();
    const navDrugs = useNavigation<DrugsPropsNavigation>();

    return (
        <View style={{ backgroundColor: Colors.white }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: '33.33%', alignItems: 'center' }} onPress={() => navDoctor.navigate('Medici')}>
                    <SvgUri width="50%" height="50%" uri='https://www.svgrepo.com/download/325813/doctor-female.svg' />
                    <Text>MEDICI</Text>
                </TouchableOpacity>
                <View style={{ width: '33.33%', alignItems: 'center' }}>
                    <SvgUri width="50%" height="50%" uri='https://www.svgrepo.com/download/325869/city-worker.svg' />
                    <Text>PROFILO</Text>
                </View>
                <TouchableOpacity style={{ width: '33.33%', alignItems: 'center' }} onPress={() => navDrugs.navigate('Farmaci')}>
                    <SvgUri width="50%" height="50%" uri='https://www.svgrepo.com/download/325975/medicines.svg' />
                    <Text>FARMACI</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}