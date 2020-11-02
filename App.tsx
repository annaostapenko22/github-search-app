/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  ListRenderItem,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const searchRepos = async () => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}`,
    );
    setData(response.data.items);
  };
  const keyExtractor = (item: any, index: any) => index;
  return (
    <>
      <View style={{paddingVertical: 20, paddingHorizontal: 15}}>
        <Text style={{marginBottom: 10}}>Search repositories</Text>
        <TextInput placeholder="search" style={{borderWidth: 1}} />
        <Button title="click" onPress={searchRepos} />
        {data.length ? (
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={({item}: {item: {full_name: string | number}}) => {
            return <Text>{item.full_name}</Text>;
            }}
          />
        ): <Text>Nothing found</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
