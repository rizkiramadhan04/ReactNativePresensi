import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SelectJabatan = ({label, value, onSelectChange}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker 
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}
                >
                    <Picker.Item label="Admin" value="Admin" />
                    <Picker.Item label="Inventory" value="Inventory" />
                    <Picker.Item label="Marketing" value="Marketing" />

                </Picker>
            </View>
        </View>
    )
}

export default SelectJabatan;

const styles = StyleSheet.create({
    label: {    fontSize: 16, 
                fontFamily: 'Poppins-Regular',
                color: '#020202',
            },
    
    input: {
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,
        paddingHorizontal: 2,
        paddingVertical: 0,
    },

});