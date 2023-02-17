/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { OutcomeTypeArray } from '../models/outcome';
import { Visit } from '../models/visit';
import { Colors } from '../styles/colors';

const OutcomeSelect = (props : {updVisit: React.Dispatch<React.SetStateAction<Visit>>, visit: Visit}) => {

  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>   
      <Dropdown
        statusBarIsTranslucent={false}
        style={[styles.dropdown, isFocus && { borderColor: Colors.green_bright }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={OutcomeTypeArray}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Esito' : '...'}
        searchPlaceholder="Cerca..."
        value={OutcomeTypeArray[props.visit.outcome]}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          props.updVisit({ ...props.visit, outcome: item.value });
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default OutcomeSelect;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'white',
    marginTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: Colors.white,
    left: 22,
    top: -6,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});