import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const styles = StyleSheet.create({
    doctorHeader: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 4,
        padding: 10,
        backgroundColor: Colors.green,
        margin: 5,
        position: 'relative',
      },

    doctorItem: {
      flex: 1,
      justifyContent: 'center',
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

    doctorsHeaderText: {
        fontWeight: 'bold',
        color: Colors.white
    }
  
  });

