import { GithubIssueLabelDto } from "./github-issue-label.dto";
import { GithubIssueUserDto } from "./github-issue-user.dto";

export interface GithubIssueDto {
  id: number;
  html_url: string;
  state: string;
  title: string;
  body: string;
  user: GithubIssueUserDto;
  labels: GithubIssueLabelDto[];
  created_at: string;
}
