import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ItemListPresensi = ({date1, date2, text,status, onPress}) => {
    const renderContent = () => {
        return (
            <View style={styles.content}>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.text}>{date1}</Text>
                <Text style={styles.text}>{status}</Text>
            </View>
        );
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {renderContent()}
            </View>
        </TouchableOpacity>
    );
};

export default ItemListPresensi;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
    },

    content: {
        flex: 1,
    },

    text: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
});
