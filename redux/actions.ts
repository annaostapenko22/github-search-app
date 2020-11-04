import { ReposAndOrganizationsType, ReposAndOrganizationState, SET_REPOSITORIES_AND_ORGANIZATION } from "./types";

export const saveReposAndOrganizations = (data: ReposAndOrganizationState): ReposAndOrganizationsType => ({
    type: SET_REPOSITORIES_AND_ORGANIZATION,
    payload: data
})