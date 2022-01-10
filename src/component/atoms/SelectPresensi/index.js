import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SelectPresensi = ({label, value, onSelectChange}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker 
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}
                >
                    <Picker.Item label="Masuk" value="Masuk" />
                    <Picker.Item label="Pulang" value="Pulang" />

                </Picker>
            </View>
        </View>
    )
}

export default SelectPresensi;

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