import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Button, Gap, Header, ItemListPresensi, ItemValue} from '../../component'

const OrderDetail = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <Header
                title="Detail Izin"
                subTitle="Detail Pengajuan Izin"
                onBack={() => navigation.goBack()}
            />

            <View style={styles.content}>
                <Text style={styles.label}>Data Izin</Text>
                <ItemValue label="Jenis Izin" value="Sakit" />
                <ItemValue label="Tanggal Awal" value="25 Nov 2021" />
                <ItemValue label="Tanggal Akhir" value="25 Nov 2021" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Data Pegawai :</Text>
                <ItemValue label="Name" value="Rizki Ramadhan" />
                <ItemValue label="Phone No" value="081522901292" />
                <ItemValue label="Jabatan" value="Admin" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Status Pengajuan :</Text>
                <ItemValue label="Status" value="Disetujui" valueColor="#1ABC9C" />
            </View>

            <View style={styles.button}>
                <Button 
                text="Oke Lanjut" 
                onPress={() => navigation.replace('Home')}
                />
            </View>

            <Gap height={40}/>

        </ScrollView>
    );
};

export default OrderDetail;

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24,
    },

    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 8,
    },

    button: {
        paddingHorizontal: 24,
        marginTop: 24,
    }
});
