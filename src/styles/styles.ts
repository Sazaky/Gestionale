import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const styles = StyleSheet.create({
    doctorHeader: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        backgroundColor: Colors.green,
        margin: 5,
        marginBottom: 10,
        position: 'relative',
    },

    doctorItem: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.green_bright,
        margin: 5,
        position: 'relative',
    },

    doctorLastName: {
        fontWeight: 'bold',
        color: Colors.black
    },

    doctorSpecialization: {
        fontStyle: 'italic',
        color: Colors.green,
        marginTop: 3,
        marginBottom: 3
    },

    doctorPhone: {
        color: Colors.black,
        margin: 3
    },

    doctorsHeaderText: {
        fontWeight: 'bold',
        color: Colors.white
    }

});

