import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { IGithubIssueState } from "../model/github-issue-state.interface";
import { GithubIssuesService } from "../service/github-issues.service";
import { GithubIssuesActionTypesEnum } from "./github-issues-action-types.enum";
import { GetGithubIssuesListError, GetGithubIssuesListSuccess, GetQueryOptions } from './github-issues.actions';

@Injectable()
export class GithubIssuesEffects {
  constructor(
    private actions$: Actions,
    private githubIssuesService: GithubIssuesService,
    private store: Store<IGithubIssueState>
  ) {
  }

  @Effect()
  getGithubIssuesList$: Observable<Action> = this.actions$.pipe(
    ofType(GithubIssuesActionTypesEnum.GetGithubIssuesListLoad),
    withLatestFrom(this.store),
    mergeMap((data) => {
      //TODO review this
      const state: any = data[1];
      return this.githubIssuesService.getGithubIssues(state?.githubIssues?.githubIssues?.queryOptions).pipe(
        map((issues) => new GetGithubIssuesListSuccess(issues)),
        catchError((error) => of(new GetGithubIssuesListError(error)))
      );
    })
  );
}
