import Axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Gap, TextInput, Header} from '../../component';
import { storeData, useForm } from '../../utils';
import { showMessage } from '../../utils/showMessage';

const SignIn = ({navigation}) => {

    const [form, setForm] = useForm({
        email:'',
        password:''
    });

    const onSubmit = () => {
        console.log("Form :", form);
        Axios.post('http://10.0.2.2:8000/api/login', form).then(res => {
            const profile = res.data.data.data;
            const token = `${res.data.data.token_type}  ${res.data.data.access_token}`;
            
            storeData('profile', profile)
            storeData('token', {value: token});
            console.log('Success', res);
            navigation.reset({index: 0, routes: [{name: 'Home'}]});
        }). catch(err => {
            console.log('Error', err);
            showMessage(err?.response?.message || 'Error Sign In');
        });
    };

    return (
        <View style={styles.page}>

        <Header 
        title="Masuk" 
        subTitle="Inputkan Data Anda! Untuk Melakukan Presensi"
        />

            <View style={styles.container}>
                <TextInput 
                    label="Email"
                    placeholder="Input Email Anda"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}
                />
                <Gap height={16} />

                <TextInput 
                    label="Kata Sandi"
                    placeholder="Kata Sandi"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry  
                />
                <Gap height={24} />

                <Button text="Masuk" 
                        onPress={onSubmit}
                />
                <Gap height={12} />

                <Button 
                    text="Buat Data Baru"
                    color='#8D92A3'
                    textColor="white"
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
    );
};

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    }
});
