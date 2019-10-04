import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, AsyncStorage, Image, StyleSheet } from 'react-native';

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
      <Image source={logo} style={styles.logo} />
      <Text>{techs}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
})