import { IGithubIssueState } from "../model/github-issue-state.interface";
import { GithubIssuesActionTypesEnum } from "./github-issues-action-types.enum";

const initialState: IGithubIssueState = {
  githubIssuesList: [],
  isLoading: false,
  hasMoreIssues: false,
  queryOptions: {
    itemsPerPage: 10,
    page: 1,
    url: '',
    sort: 'updated'
  }
}

export function githubIssuesReducer(state = initialState, action: any): IGithubIssueState {
  switch (action.type) {
    case GithubIssuesActionTypesEnum.GetGithubIssuesListLoad:
      return {
        ...state,
        isLoading: true
      };

    case GithubIssuesActionTypesEnum.GetGithubIssuesListSuccess:
      return {
        ...state,
        githubIssuesList: state.githubIssuesList.concat(action.payload.githubIssuesList),
        hasMoreIssues: action.payload.hasMoreIssues,
        isLoading: false
      };

    case GithubIssuesActionTypesEnum.GetGithubIssuesListError:
      return {
        ...state,
        isLoading: false
      };

    case GithubIssuesActionTypesEnum.ResetGithubIssuesList:
        return {
          ...state,
          githubIssuesList: [],
          hasMoreIssues: false
        };

    case GithubIssuesActionTypesEnum.GetQueryOptions:
      return {
        ...state
      };

    case GithubIssuesActionTypesEnum.ResetQueryOptions:
      return {
        ...state,
        queryOptions: initialState.queryOptions
      };

    case GithubIssuesActionTypesEnum.UpdateQueryOptions:
      const queryOptions = {};

      for (let key in state.queryOptions) {
        if (action.queryOptions.hasOwnProperty(key)) {
          queryOptions[key] = action.queryOptions[key];
        } else {
          queryOptions[key] = state.queryOptions[key];
        }
      }

      return {
        ...state,
        queryOptions
      };

    default:
      return state;
  }
}
