import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashScreen = ({navigation}) => {
    
        useEffect(() => {
            setTimeout(() => {
                navigation.replace('SignIn');
            }, 2000);
        }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Pesensi</Text>
            <Text style={styles.text}>PT.Nadyne Global Niaga</Text>
        </View>
    );
};

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      text1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#020202',
        fontFamily: 'Poppins-Medium',
      },

      text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#020202',
        fontFamily: 'Poppins-Medium',
      },
});
