import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Headings = () => {
  return (
    <View style={styles.headingsContainer}>
      <Text style={styles.heading}>Repositories </Text>
      <Text style={styles.heading}> Organization </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  headingsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Headings;
