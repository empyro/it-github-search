import { SafeHtml } from "@angular/platform-browser";
import { GithubIssueLabel } from "./github-issue-label.model";
import { GithubIssueUser } from "./github-issue-user.model";

export class GithubIssue {
  id: number;
  title: string;
  state: string;
  url: string;
  content: string[];
  user: GithubIssueUser;
  labels: GithubIssueLabel[];
  createdAt: Date;
}
