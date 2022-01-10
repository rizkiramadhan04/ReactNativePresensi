import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Gap, Button} from '../../component'
import {IlSuccess} from '../../assets'

const SuccessPage = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccess/>
            <Gap height={30} />
            <Text style={styles.title}>Yeeaayy! Success</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Request berhasil ditambahkan</Text>
            <Gap height={30}/>

            <View style={styles.buttonContainer}>
                <Button 
                    text="Kembali Ke Home"
                    onPress={() => navigation.replace('Home')}
                />
            </View>

        </View>
    );
};

export default SuccessPage

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },

    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
    },

    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80,
    }
});
