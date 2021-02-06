import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { IGithubIssuesQueryOptions } from "../model/github-issue-query-options.interface";
import { GithubIssuesResponse } from "../model/github-issues-response.model";
import { GithubIssuesActionTypesEnum } from './github-issues-action-types.enum';

export class GetGithubIssuesListLoad implements Action {
  public readonly type = GithubIssuesActionTypesEnum.GetGithubIssuesListLoad;
}

export class GetGithubIssuesListSuccess implements Action {
  public readonly type = GithubIssuesActionTypesEnum.GetGithubIssuesListSuccess;

  constructor(public payload: GithubIssuesResponse) { }
}

export class GetGithubIssuesListError implements Action {
  public readonly type = GithubIssuesActionTypesEnum.GetGithubIssuesListError;

  constructor(public error: HttpErrorResponse) { }
}

export class ResetGithubIssuesList implements Action {
  public readonly type = GithubIssuesActionTypesEnum.ResetGithubIssuesList;
}

export class GetQueryOptions implements Action {
  public readonly type = GithubIssuesActionTypesEnum.GetQueryOptions;
}

export class ResetQueryOptions implements Action {
  public readonly type = GithubIssuesActionTypesEnum.ResetQueryOptions;
}

export class UpdateQueryOptions implements Action {
  public readonly type = GithubIssuesActionTypesEnum.UpdateQueryOptions;

  constructor(public queryOptions: IGithubIssuesQueryOptions) { }
}

export type GithubIssuesActions =
  GetGithubIssuesListLoad |
  GetGithubIssuesListSuccess |
  GetGithubIssuesListError |
  ResetGithubIssuesList |
  GetQueryOptions |
  ResetQueryOptions |
  UpdateQueryOptions;
