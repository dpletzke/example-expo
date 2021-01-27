import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordian from './components/Accordian'

export default function App() {
  return (
    <View style={styles.container}>
      <Accordian style={styles.accordian}></Accordian>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  accordian: {
    flex: 1,
    backgroundColor: '#2E0854',
    flexDirection: 'column'
  }
});
