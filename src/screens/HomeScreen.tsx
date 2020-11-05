import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import debounce from 'lodash.debounce';
import {Link} from 'react-router-native';
import {useHistory} from 'react-router-dom';

import {fetchReposAndOrganizations} from '../../redux/operations';
import {AppState} from '../../App';

import RepositoriesList from '../components/RepositoriesList';
import Organization from '../components/Organization';
import Headings from '../components/Headings';

const DefaultScreen = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const repositories = useSelector(
    (state: AppState) => state.reposOrganzation.repos,
  );
  const organization = useSelector(
    (state: AppState) => state.reposOrganzation.organization,
  );

  const goToHistory = () => {
    history.push('/history');
  };
  const debouncedSearch = useCallback(
    debounce(
      (query: string) => dispatch(fetchReposAndOrganizations(query)),
      500,
    ),
    [],
  );
  const onInputChange = async (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): Promise<void> => {
    const query: string = e.nativeEvent.text;
    debouncedSearch(query);
  };
  return (
    <>
      <View style={styles.container}>
        <Link to="/history" onPress={goToHistory}>
          <View style={styles.buttonContainer}>
            <Button title="history" onPress={goToHistory} color="#fff" />
          </View>
        </Link>
        <Text style={styles.mainTitle}>
          Search repositories and organizations
        </Text>
        <TextInput
          placeholder="search"
          style={styles.searchInput}
          onChange={onInputChange}
        />
        <Headings />
        <View style={styles.reposOrganizationContainer}>
          {repositories.length ? (
            <RepositoriesList repositories={repositories} />
          ) : (
            <View style={styles.flatList} />
          )}
          {organization ? (
            <Organization organization={organization} />
          ) : (
            <View style={styles.organizationContainer} />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flex: 1,
  },
  buttonContainer: {
    width: 100,
    backgroundColor: '#008CBA',
  },
  searchInput: {
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  button: {
    width: 100,
  },
  mainTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
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
  flatList: {
    paddingBottom: 25,
    height: 400,
  },
});
export default DefaultScreen;
