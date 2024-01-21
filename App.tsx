import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import ChipExample from './src/components/ChipExample';
import DefaultChipsExample from './src/components/DefaultChipsExample';
import FilterChipsExample from './src/components/FilterChipsExample';
import InputChipsExample from './src/components/InputChipsExample';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}>
        <ChipExample />
        <DefaultChipsExample />
        <FilterChipsExample />
        <InputChipsExample />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
});

export default App;
