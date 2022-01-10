import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SelectIzin = ({label, value, onSelectChange}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker 
                    selectedValue={value}
                    onValueChange={(itemValue) => onSelectChange(itemValue)}
                >
                    <Picker.Item label="Sakit" value="Sakit" />
                    <Picker.Item label="Cuti" value="Cuti" />
                    <Picker.Item label="Lain-lain" value="Lain-lain" />

                </Picker>
            </View>
        </View>
    )
}

export default SelectIzin;

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