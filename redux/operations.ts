import axios from 'axios';
import { Dispatch } from 'redux';
import { saveReposAndOrganizations, } from "./actions";
import { ReposAndOrganizationState } from "./types"

export const fetchReposAndOrganizations = (searchQuery: string) => async (dispatch: Dispatch) => {
    const data: ReposAndOrganizationState = {
        repos: [],
        organization: ""
    }
    try {
        const repos = await axios.get(
            `https://api.github.com/search/repositories?q=${searchQuery}`,
        );
        data.repos = repos.data.items;
        dispatch(saveReposAndOrganizations(data))
    } catch (err) {
        throw err;
    }
    try {
        const organization = await axios.get(
            `https://api.github.com/orgs/${searchQuery}`,
        );
        data.organization = organization.data.name;
        dispatch(saveReposAndOrganizations(data))
    } catch (err) {
        throw err;
    }
}