import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGithubIssueState } from "../model/github-issue-state.interface";

const getGithubIssuesState = createFeatureSelector<IGithubIssueState>('githubIssues');

export const allGithubIssues = createSelector(getGithubIssuesState, (state: IGithubIssueState) => {
  return state;
});
