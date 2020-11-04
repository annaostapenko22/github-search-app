import { ReposAndOrganizationsType, SET_REPOSITORIES_AND_ORGANIZATION, ReposAndOrganizationState } from "./types"

const initialState: ReposAndOrganizationState = {
    repos: [],
    organization: ""
}

export function reposOrganzationReducer(state = initialState, action: ReposAndOrganizationsType): ReposAndOrganizationState {
    switch (action.type) {
        case SET_REPOSITORIES_AND_ORGANIZATION: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}