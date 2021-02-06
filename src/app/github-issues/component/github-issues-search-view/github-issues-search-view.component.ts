import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IGithubIssuesQueryOptions } from '../../model/github-issue-query-options.interface';
import { IGithubIssueState } from '../../model/github-issue-state.interface';
import { GithubIssue } from '../../model/github-issue.model';
import { GetGithubIssuesListLoad, ResetGithubIssuesList, ResetQueryOptions, UpdateQueryOptions } from '../../store/github-issues.actions';
import { allGithubIssues } from '../../store/github-issues.selectors';

@Component({
  selector: 'app-github-issues-search-view',
  templateUrl: './github-issues-search-view.component.html',
  styleUrls: ['./github-issues-search-view.component.scss']
})
export class GithubIssuesSearchViewComponent implements OnInit, OnDestroy {
  githubIssuesList$;

  url;

  queryOptions: IGithubIssuesQueryOptions;
  githubIssuesList: GithubIssue[];
  isLoading: boolean;
  hasMoreIssues: boolean;
  isValidGithubRepoUrl: RegExp = new RegExp('^[ ]*https?://[^/]*github\.com/[^/]+/[^/]+.*', 'i');

  @ViewChild('searchIssuesForm')
  searchIssuesForm: NgForm;

  constructor(
    private store: Store<IGithubIssueState>
  ) {}

  ngOnInit(): void {
    this.clearAll();
    this.githubIssuesList$ = this.store.pipe(select(allGithubIssues));

    this.githubIssuesList$.subscribe(state => {
      const githubIssuesState = state.githubIssues;

      this.queryOptions = githubIssuesState.queryOptions;
      this.githubIssuesList = githubIssuesState.githubIssuesList;
      this.isLoading = githubIssuesState.isLoading;
      this.hasMoreIssues = githubIssuesState.hasMoreIssues;
    });
  }

  ngOnDestroy(): void {
    this.githubIssuesList$.unsubscribe();
  }

  getGithubIssues($event?) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }

    if (this.searchIssuesForm.valid && this.url) {
      this.store.dispatch(new UpdateQueryOptions({
        url: this.url
      }))
      this.store.dispatch(new GetGithubIssuesListLoad());
    }

    return false;
  }

  getMoreGithubIssues() {
    this.store.dispatch(new UpdateQueryOptions({
      page: this.queryOptions.page + 1
    }))
    this.getGithubIssues();
  }

  resetGithubIssues() {
    this.store.dispatch(new ResetGithubIssuesList());
  }

  clearForm() {
    this.url = '';
    this.store.dispatch(new ResetQueryOptions());
  }

  clearAll() {
    this.clearForm();
    this.resetGithubIssues();
  }
}
