import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {Button, Gap, Header, SelectHari, SelectIzin, TextInput} from '../../component'
import { getData, showMessage, useForm } from '../../utils'

const Izin = ({navigation}) => {
    const [form, setForm] = useForm({
        jenis_izin: '',
        tanggal_awal: '',
        tanggal_akhir: '',
        jenis_hari: '',
        status: 'in_progress',
     });
 
     const [profile, setProfile] = useState({});
     
     useEffect(() => {
         getData('profile').then((res) => {
             console.log('Data Profile :', res);
             setProfile(res);
         })
     }, []);
 
     const onSubmit = () => {
         
         const dataSubmit = {
             user_id: profile.id,
             jenis_izin: form.jenis_izin,
             tanggal_awal: form.tanggal_awal,
             tanggal_akhir: form.tanggal_akhir,
             jenis_hari: form.jenis_hari,
             status: form.status
         }
 
         getData('token').then((resToken) => {
            console.log(resToken);

             axios.post('http://10.0.2.2:8000/api/create', dataSubmit, {
                 headers: {
                     Authorization: resToken.value,
                 },
             }).then((response) => {
                 console.log(response);
                 navigation.reset({index: 0, routes: [{name: 'SuccessPage'}]});
             }).catch((err) => {
                 showMessage(
                     `${err.response} on Checkout API` || 'Terjadi kesalahan di API Checkout',
                 );
             });
         });
     };

    return (
        <ScrollView contentContainerStyle={styles.scroll}>

            <View style={styles.page}>
            <Header 
                title="Izin"
                subTitle="Make Sure It's Valid"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.container}>

                <TextInput 
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap Anda"
                    value={profile.name}           
                />
                <Gap height={16} />

                <TextInput 
                    label="Tanggal awal"
                    placeholder="*yyyy/mm/dd"
                    value={form.tanggal_awal}
                    onChangeText={(value) => setForm('tanggal_awal', value)}              
                />
                <Gap height={16} />

                <TextInput 
                    label="Tanggal Akhir"
                    placeholder="*yyyy/mm/dd"
                    value={form.tanggal_akhir}
                    onChangeText={(value) => setForm('tanggal_akhir', value)}               
                />
                 <Gap height={16} />

                <SelectIzin 
                    label="Jenis Izin"
                    value={form.jenis_izin}
                    onSelectChange={(value) => setForm('jenis_izin', value)} 
                />
                <Gap height={16} />

                <SelectHari
                    label="Jenis Hari"
                    value={form.jenis_hari}
                    onSelectChange={(value) => setForm('jenis_hari', value)} 
                />
                <Gap height={24} />

                <Button 
                    text="Submit Izin"
                    onPress={onSubmit}
                />

            </View>

        </View>

    </ScrollView>
    );
};

export default Izin;

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
    },
    
    page: {flex: 1,},

    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },
});
