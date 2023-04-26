import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { MD3DarkTheme, Searchbar } from 'react-native-paper';
import FeatureScreen from './src/screens/FeatureScreen';

const theme = {
  ...MD3DarkTheme,
};

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [content, setContent] = useState('');

  const handleOnChangeText = (query) => {
    setSearchText((prev) => query);
  };

  const handleIconPress = () => {
    setContent((prev) => searchText);
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.searchCtn}>
          <Searchbar
            mode="view"
            theme={theme}
            placeholder="Search"
            value={searchText}
            onChangeText={handleOnChangeText}
            onIconPress={handleIconPress}
            onEndEditing={handleIconPress}
          />
        </View>
        <View style={styles.contentCtn}>
          <FeatureScreen />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchCtn: {
    flexDirection: 'column',
  },
  contentCtn: {
    flex: 1,
  },
});
