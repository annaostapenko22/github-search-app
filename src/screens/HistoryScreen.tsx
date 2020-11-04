import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useHistory} from 'react-router-dom';

const HistoryScreen = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={goBack} color="#841584" />
      </View>
      <Text style={styles.title}>History screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    width: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default HistoryScreen;
