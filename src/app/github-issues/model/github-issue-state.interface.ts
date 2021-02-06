import { IGithubIssuesQueryOptions } from "./github-issue-query-options.interface";
import { GithubIssue } from "./github-issue.model";

export interface IGithubIssueState {
  githubIssuesList: GithubIssue[];
  isLoading: boolean;
  hasMoreIssues: boolean;
  queryOptions: IGithubIssuesQueryOptions;
}
