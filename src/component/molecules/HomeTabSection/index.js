import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItemListPresensi from '../ItemListPresensi';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getPresensi } from '../../../redux/action/presensi';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ fontFamily: 'Poppins-Medium', color: focused ? '#020202' : '#8D92A3'}}>
        {route.title}
      </Text>
    )}
  />
);


const Presensi = () => {

  const dispatch = useDispatch();
  const {presensi} = useSelector(state => state.presensiReducer);

  useEffect(() => {
    dispatch(getPresensi());
  }, []);
  
    return (
      <View style={styles.containerNewTaste}>
            {/* {
                presensi.map((items) => {
                  return (
                    <ItemListPresensi 
                        key={items.id}
                        text={items.types}
                        date1={items.created_at}
                      />
                  );
                })
            } */}
      </View>
    )
  };
 
const Izin = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.containerPopular}>

          <ItemListPresensi 
            text="Sakit"
            date1="Senin, 19 November 2021"
            date2="Senin, 19 November 2021"
            status="Disetujui"
            onPress={() => navigation.navigate('DetailIzin')}
          />

      </View>
    )
};
 
const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'Presensi' },
      { key: '2', title: 'Izin' },
    ]);

    const renderScene = SceneMap({
      1: Presensi,
      2: Izin,
    });
      
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    );

}

export default HomeTabSection;

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: 'white',
  },

  indicator: {
    backgroundColor: '#020202',
    height: 3,
  },

  tabBarStyle: {
      backgroundColor: 'white',
      borderBottomColor: '#F2F2F2',
  },

  tabStyle: {
    fontFamily: 'Poppins-Medium',
    color: '#8D92A3',
  },

  containerNewTaste: {
      paddingTop: 8,
      paddingHorizontal: 24,
  },

  containerPopular: {
    paddingTop: 8,
    paddingHorizontal: 24,
  },

});
