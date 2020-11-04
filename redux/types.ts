export const SET_REPOSITORIES_AND_ORGANIZATION = "SET_REPOSITORIES_AND_ORGANIZATION";

export  interface ReposAndOrganizationState{
    repos: [],
    organization: ""
}
interface SaveReposAndOrganizations {
    type: typeof SET_REPOSITORIES_AND_ORGANIZATION,
    payload: ReposAndOrganizationState
}

export type ReposAndOrganizationsType = SaveReposAndOrganizations;