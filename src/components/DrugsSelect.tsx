import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { createDb } from '../models/db';
import { DrugLight } from '../models/drug';
import { Outcome } from '../models/outcome';
import { getDrugsLight } from '../services/drug';
import { Colors } from '../styles/colors';

const DrugsSelect = (props: {updOutcomes: React.Dispatch<React.SetStateAction<Outcome[]>>, outcomes: Outcome[]}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const ref = useRef(null);

  const [drugs, setDrugs] = useState([] as DrugLight[]);

  const loadDataCallback = useCallback(async () => {
    const db = await createDb();
    const myDrugs = await getDrugsLight(db);
    console.log(myDrugs);
    setDrugs(myDrugs);
  }, []);


  useEffect(() => {
      loadDataCallback();
  }, [loadDataCallback]);

  const onSelectAll = (isSelectAll = true) => {
    const selectItem: string[] = [];
    if (isSelectAll) {
      drugs.map((item) => {
        selectItem.push(item.name);
      });
    }
    setSelected(selectItem);
  };

  const renderSelectAllIcon = () => {
    const isSelectAll = selected.length === drugs.length;
    return (
      <TouchableOpacity
        style={styles.wrapSelectAll}
        onPress={() => onSelectAll(!isSelectAll)}
      >
        <Text style={styles.txtSelectAll}>
          {isSelectAll ? `UnSelect All` : 'Select All'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        inside
        statusBarIsTranslucent={true}
        ref={ref}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={drugs}
        labelField="name"
        valueField="id"
        placeholder="Seleziona Materiale"
        searchPlaceholder="Cerca..."
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        selectedStyle={styles.selectedStyle}
        flatListProps={{ ListHeaderComponent: renderSelectAllIcon }}
      />
    </View>
  );
};

export default DrugsSelect;

const styles = StyleSheet.create({
  container: { 
    // marginTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.green
  },
  dropdown: {
    backgroundColor: 'transparent',
    borderColor: Colors.green,
    borderWidth: 0,
    padding: 10
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
  wrapSelectAll: {
    alignItems: 'flex-end',
    marginHorizontal: 16,
    marginVertical: 8
  },
  txtSelectAll: {
    color: Colors.green_bright,
  },
});