import React, {useEffect, useState} from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';
import {useHistory} from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RepositoriesList from '../components/RepositoriesList';
import Organization from '../components/Organization';
import Headings from '../components/Headings';

interface StoredData {
  organization: string;
  repos: [];
}

const HistoryScreen = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    const innerFunction = async () => {
      const storedData = await AsyncStorage.getItem('data');
      if (storedData) {
        const parsedStoredData = JSON.parse(storedData);
        if (parsedStoredData.length > 5) {
          const lastItem: number = parsedStoredData.length - 1;
          const fifthItem: number = parsedStoredData.length - 6;
          const copy = parsedStoredData.slice(fifthItem, lastItem);
          setData(copy);
        } else {
          setData(parsedStoredData);
        }
      }
    };
    innerFunction();
  }, []);
  const goBack = () => {
    history.goBack();
  };
  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={goBack} color="#fff" />
      </View>
      <Text style={styles.title}>History screen</Text>
      <Headings />
      <View style={styles.reposOrganizationContainer}>
        <View style={{width: '50%'}}>
          {data.map((item: StoredData, index) => {
            if (item.repos && item.repos.length) {
              return <RepositoriesList repositories={item.repos} key={index} />;
            }
          })}
        </View>
        <View style={styles.organizationContainer}>
          {data.map((item: StoredData, index) => {
            if (item.organization) {
              return (
                <Organization organization={item.organization} key={index} />
              );
            }
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    width: 100,
    backgroundColor: '#008CBA',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  reposOrganizationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  organizationContainer: {
    width: '50%',
    alignItems: 'center',
  },
});
export default HistoryScreen;
