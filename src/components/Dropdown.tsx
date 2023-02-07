import React, {useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import { Colors } from '../styles/colors';

interface Item {
    label: string; 
    value: number 
}

interface Props {
  label: string;
  data: Array<Item>;
  onSelect: (item: Item) => void;
}

const Dropdown = ({ label, data, onSelect } : Props) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({} as Item);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item : Item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = (props : { item : Item}) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(props.item)}>
      <Text style={{color: Colors.white}}>{props.item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    // position: 'absolute',
    // backgroundColor: Colors.green_ligth,
    padding: 10,
    borderRadius: 10,
    // width: '100%',
    // margin: 10,
    // shadowColor: Colors.green_bright,
    // shadowRadius: 4,
    // shadowOffset: { height: 10, width: 0 },
    // shadowOpacity: 0.7,
  },
  overlay: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  item: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: Colors.green_ligth,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 10,
  },
});

export default Dropdown;