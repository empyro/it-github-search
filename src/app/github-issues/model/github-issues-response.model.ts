import { GithubIssue } from "./github-issue.model";

export class GithubIssuesResponse {
  githubIssuesList: GithubIssue[];
  hasMoreIssues: boolean;
}
