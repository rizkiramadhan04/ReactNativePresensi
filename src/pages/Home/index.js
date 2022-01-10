import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {HomeProfile,Gap, HomeTabSection, ItemCard} from '../../component'
import { useDispatch, useSelector } from 'react-redux';
import { getPresensi } from '../../redux/action';
import { getData } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

  const dispatch = useDispatch();
  const {presensi} = useSelector(state => state.presensiReducer);
  const [profile, setProfile] = useState({});
  

  useEffect(() => {
    dispatch(getPresensi());
  }, []);

  console.log('list Presensi :', presensi);

  useEffect(() => {
    getData('profile').then((res) => {
        console.log('Data Profile :', res);
        setProfile(res);
    })
}, []);

const signOut = () => {
  AsyncStorage.multiRemove(['profile', 'token']).then(() => {
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  });
};

    return (
      <ScrollView vertical showsVerticalScrollIndicator={false}>
            <View style={styles.page}>

                <HomeProfile 
                  name={profile.name}
                  jabatan={profile.jabatan}
                  onPress={signOut}
                />

                <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.foodCardContainer}>
                      <Gap width={24}/>

                      <ItemCard
                          name="Presensi"
                          onPress={() => navigation.navigate('Presensi')}
                      />

                      <ItemCard
                          name="Izin"
                          onPress={() => navigation.navigate('Izin')}
                      />

                  </View>
              </ScrollView>
            </View>
        
            </View>

       </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  foodCardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 45,
  },

  tabContainer: {
    flex: 1,
  },

});
