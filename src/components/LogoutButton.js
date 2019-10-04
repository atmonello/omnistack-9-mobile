import React from 'react';
import { Alert, AsyncStorage, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation'


function LogoutButton({ navigation }) {
  async function handleButton() {
    Alert.alert(
      'Deseja realmente sair?',
      null,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          style: 'default',
          onPress: handleLogout
        }
      ]
    )
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  }

  return (
    <Icon 
      type="material-community" 
      name="logout" 
      color="#f05a5b" 
      onPress={handleButton}
    />
  );
}

export default withNavigation(LogoutButton);