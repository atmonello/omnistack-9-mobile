import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, AsyncStorage, Image, StyleSheet, StatusBar } from 'react-native';

import SpotList from '../components/SpotList';
import LogoutButton from '../components/LogoutButton';

import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storedTechs => {
      const techsArray = storedTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle='dark-content'
      />
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <LogoutButton style={styles.logout} />
      </View>
      <ScrollView>
        {techs.map((tech, index) => <SpotList key={index} tech={tech} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 10
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    flex: 1,
  },
})