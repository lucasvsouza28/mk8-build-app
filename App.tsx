import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import SelectedItemsContextProvider from './src/contexts/SelectedItemsContext';
import Home from './src/pages/Home'

export default function App() {
  return (
    <SelectedItemsContextProvider>
      <SafeAreaView style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SelectedItemsContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 15
  },
});
