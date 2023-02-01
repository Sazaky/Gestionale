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

    doctorScreen : {
        //flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: Colors.green_bright, 
        margin: 5,
        marginTop: 25,
        marginBottom: 15,
        borderRadius: 10,
        padding: 10
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
    },

    visitItem:
    {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.green_bright,
        margin: 5,
        position: 'relative',

    },

    visitDateLabel:{
        color: Colors.black,
        fontWeight: 'bold',
        margin: 5
    },

    visitDate:{
        color: Colors.black,
        margin: 5
    },

    visitOutcomeText:{
        color: Colors.white
        
    },

    visitOutcomeButtonOK: {
        margin: 5,
        borderRadius: 20,
        padding: 5,
        backgroundColor: Colors.green,
        width: '25%',
        alignItems: 'center'
    },

    visitOutcomeButtonKO: {
        margin: 5,
        borderRadius: 20,
        padding: 5,
        backgroundColor: Colors.red,
        width: '25%',
        alignItems: 'center'
    },

    visitOutcomeButtonNeutral: {
        margin: 5,
        borderRadius: 20,
        padding: 5,
        backgroundColor: Colors.purple,
        width: '25%',
        alignItems: 'center'
    }
});

