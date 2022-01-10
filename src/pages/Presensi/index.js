import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Button, Gap, Header, SelectPresensi, TextInput} from '../../component'
import { getData, showMessage, useForm } from '../../utils';


const Presensi = ({navigation, route}) => {

    const [form, setForm] = useForm({
       types: '',
    });

    const [profile, setProfile] = useState([]);
    
    useEffect(() => {
        getData('profile').then((res) => {
            console.log('Data Profile :', res);
            setProfile(res);
        })
    }, []);

    const onSubmit = () => {
        
        const dataSubmit = {
            user_id: profile.id,
            name: profile.name,
            types: form.types
        }

        getData('token').then((resToken) => {
            console.log(resToken);

            axios.post('http://10.0.2.2:8000/api/absensi', dataSubmit, {
                headers: {
                    Authorization : resToken.value,
                },
            }).then((response) => {
                console.log(response);
                navigation.reset({index: 0, routes: [{name: 'SuccessPage'}]}, dataSubmit);
            }).catch((err) => {
                showMessage(
                    `${err.response} on API` || 'Terjadi kesalahan di API',
                );
            });
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.scroll}>

            <View style={styles.page}>
            <Header 
                title="Presensi"
                subTitle="Make Sure It's Valid"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.container}>

                <TextInput 
                    label="Nama"
                    value={profile.name}           
                />
                <Gap height={16} />

                <SelectPresensi
                     label="Jenis Presensi"
                     value={form.types}
                     onSelectChange={(value) => setForm('types', value)} 
                />

                <Gap height={24} />
                <Button 
                    text="Present"
                    onPress={onSubmit}
                />

            </View>

        </View>

    </ScrollView>
    );
};

export default Presensi;

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
