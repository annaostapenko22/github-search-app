import React, {FunctionComponent, ReactText} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
interface FlatListProps {
  repositories: [];
}
const RepositoriesList: FunctionComponent<FlatListProps> = ({repositories}) => {
  return (
    <FlatList
      style={styles.flatList}
      data={repositories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}: {item: {full_name: ReactText}}) => {
        return <Text>{item.full_name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingBottom: 25,
    paddingTop: 10,
    height: 400,
    borderBottomWidth: 1
  },
});
export default RepositoriesList;
