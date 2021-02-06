import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, SecurityContext } from "@angular/core";
import { GithubIssue } from "../model/github-issue.model";
import { map } from 'rxjs/operators';
import { GithubIssueDto } from "../model/dto/github-issue.dto";
import { IGithubIssuesQueryOptions } from "../model/github-issue-query-options.interface";
import { GithubIssueUser } from "../model/github-issue-user.model";
import { GithubIssueLabel } from "../model/github-issue-label.model";
import { GithubIssuesResponse } from "../model/github-issues-response.model";

@Injectable()
export class GithubIssuesService {
  constructor(
    private httpClient: HttpClient
  ) {}

  getGithubIssues(queryOptions: IGithubIssuesQueryOptions) {
    const url = this.getApiUrl(queryOptions.url)
    const itemsPerPage = queryOptions?.itemsPerPage;
    const params: any = {
      page: queryOptions?.page,
      per_page: itemsPerPage,
      sort: 'updated'
    };

    return this.httpClient.get<GithubIssuesResponse[]>(url, {
      params
    }).pipe(
      map((res: any) => {
        const httpResponse = res || [];
        const response = new GithubIssuesResponse();

        response.githubIssuesList = httpResponse.map(el => this.mapIssueDtoToModel(el));
        response.hasMoreIssues = response.githubIssuesList.length > 0 && response.githubIssuesList.length === itemsPerPage;

        return response;
      })
    );
  }

  private getApiUrl(url: string) {
    const splittedUrl = url.split('/').filter(e => !!e);
    const owner = splittedUrl[2];
    const repository = splittedUrl[3];

    if (repository && owner) {
      return `https://api.github.com/repos/${owner}/${repository}/issues`;
    }
  }

  private mapIssueDtoToModel(el: GithubIssueDto) {
    const issue = new GithubIssue();

    issue.id = el.id;
    issue.state = el.state;
    issue.title = el.title;
    issue.url = el.html_url;
    issue.content = el.body.split('\n');
    issue.createdAt = new Date(el.created_at);

    issue.user = new GithubIssueUser();
    issue.user.id = el.user.id;
    issue.user.name = el.user.login;
    issue.user.imageUrl = el.user.avatar_url;
    issue.user.type = el.user.type;

    const labels = el.labels || [];

    issue.labels = labels.map(l => {
      const label = new GithubIssueLabel();

      label.id = l.id;
      label.name = l.name;
      label.color = l.color;
      label.description = l.description;

      return label;
    });

    return issue;
  }
}
