import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeProfile = ({name, jabatan, onPress}) => {

   

    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.appName}>{name}</Text>
                <Text style={styles.desc}>{jabatan}</Text>
            </View>

            <TouchableOpacity onPress={onPress}>
            <Text style={styles.Logout}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeProfile;

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white',
    },

    appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },

    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    },

    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },

    Logout: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: '#8D92A3'
    },
});
