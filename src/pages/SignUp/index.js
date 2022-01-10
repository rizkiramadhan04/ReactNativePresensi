import Axios from 'axios';
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Button, Gap, Header, SelectJabatan, TextInput} from '../../component'
import { useForm, storeData } from '../../utils';
import { showMessage } from '../../utils/showMessage';

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        jabatan: 'Admin',
        phoneNumber: '',
    });

    const onSubmit = () => {
        console.log('Form :', form);
        Axios.post('http://10.0.2.2:8000/api/register', form).then(res => {

            const profile = res.data.data.data;
            const token = `${res.data.data.token_type}  ${res.data.data.access_token}`;

            storeData('profile', profile);
            storeData('token', {value: token});

            console.log('Success', res);
            navigation.reset({index: 0, routes: [{name: 'Home'}]});
        }). catch(err => {
            console.log('Error', err);
            showMessage(err?.response?.message || 'Error Sign Up');
        });
        navigation.replace('SuccessPage');
    }

    return (
        <ScrollView contentContainerStyle={styles.scroll}>

            <View style={styles.page}>
            <Header 
                title="Daftar"
                subTitle="Make Sure It's Valid"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.container}>

                <TextInput 
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap Anda"
                    value={form.name}
                    onChangeText={(value) => setForm('name', value)}        
                />
                <Gap height={16} />

                <TextInput 
                    label="Nomor Hp."
                    placeholder="Nomor Hp Anda"
                    value={form.phoneNumber}
                    onChangeText={(value) => setForm('phoneNumber', value)}               
                />
                <Gap height={16} />

                <SelectJabatan
                    label="Jabatan"
                    value={form.jabatan}
                    onSelectChange={(value) => setForm('jabatan', value)} 
                />
                <Gap height={16} />

                <TextInput 
                    label="Email"
                    placeholder="Alamat Email Anda"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}             
                />
                <Gap height={16} />

                <TextInput 
                    label="Password"
                    placeholder="Isi Passoword"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)} 
                    secureTextEntry         
                />
                <Gap height={16} />

                <TextInput 
                    label="Konfirmasi Password"
                    placeholder="Konfirmasi Password Anda"
                    value={form.password_confirmation}
                    onChangeText={(value) => setForm('password_confirmation', value)} 
                    secureTextEntry         
                />
                <Gap height={16} />

                <Gap height={24} />
                <Button 
                    text="Daftar"
                    onPress={onSubmit}
                />

            </View>

        </View>

    </ScrollView>
    );
};

export default SignUp;

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
