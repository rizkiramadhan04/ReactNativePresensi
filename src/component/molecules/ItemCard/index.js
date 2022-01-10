import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'


const ItemCard = ({name, onPress}) => {
    return (
       <TouchableOpacity activeOpacity={0.7} onPress={onPress}>

           <View style={styles.container}>

                <View style={styles.content}>
                    <Text style={styles.text}>{name}</Text>
                </View>
                
           </View>


       </TouchableOpacity>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        backgroundColor: '#FFC700',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 24,

    },

        text: {
            paddingTop: 40,
            padding: 10,
            fontSize: 16,
            fontFamily: 'Poppins-Regular',
            color: '#020202',
            textAlign: 'center',
            fontWeight: 'bold',
        }

    });
