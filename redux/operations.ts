import axios from 'axios';
import { Dispatch } from 'redux';
import { saveReposAndOrganizations, } from "./actions";
import { ReposAndOrganizationState } from "./types"
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoredData {
    organization: string,
    repos: []
}
interface StoredDataList {
    data: StoredData[],
    push: Function
}
export const fetchReposAndOrganizations = (searchQuery: string) => async (dispatch: Dispatch) => {
    let storedData: string | null;
    const data: ReposAndOrganizationState = {
        repos: [],
        organization: "",
    }
    try {

        const repos = await axios.get(
            `https://api.github.com/search/repositories?q=${searchQuery}`,
        );
        data.repos = repos.data.items;
        const organization = await axios.get(
            `https://api.github.com/orgs/${searchQuery}`,
        );
        data.organization = organization.data.name;
        dispatch(saveReposAndOrganizations(data))
        storedData = await AsyncStorage.getItem("data");
        if (storedData) {
            const parsedStoredData: StoredDataList =  JSON.parse(storedData)
             parsedStoredData.push(data)
            await AsyncStorage.setItem("data", JSON.stringify(parsedStoredData))
        } else {
            storedData = JSON.stringify([data])
            await AsyncStorage.setItem("data", storedData)
        }
    } catch (err) {
        dispatch(saveReposAndOrganizations(data))
        storedData = await AsyncStorage.getItem("data");
        if (storedData) {
            const parsedStoredData: StoredDataList =  JSON.parse(storedData)
             parsedStoredData.push(data)
            await AsyncStorage.setItem("data", JSON.stringify(parsedStoredData))
        } else {
            storedData = JSON.stringify([data])
            await AsyncStorage.setItem("data", storedData)
        }
        console.log("err", err)
    }
}