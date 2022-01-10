import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SelectHari = ({label, value, onSelectChange}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker 
                    selectedValue={value}
                    onValueChange={(itemValue) => onSelectChange(itemValue)}
                >
                    <Picker.Item label="Full day" value="Fullday" />
                    <Picker.Item label="First day" value="Firstday" />
                    <Picker.Item label="Second day" value="Secondday" />

                </Picker>
            </View>
        </View>
    )
}

export default SelectHari;

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