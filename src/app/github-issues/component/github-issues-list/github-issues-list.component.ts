import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GithubIssue } from '../../model/github-issue.model';
import { GithubIssueDescriptionModalComponent } from '../github-issue-description-modal/github-issue-description-modal.component';

@Component({
  selector: 'app-github-issues-list',
  templateUrl: './github-issues-list.component.html',
  styleUrls: ['./github-issues-list.component.scss']
})
export class GithubIssuesListComponent implements OnInit {
  @Input()
  githubIssuesList: GithubIssue[];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDescriptionModal(githubIssue: GithubIssue) {
    this.dialog.open(GithubIssueDescriptionModalComponent, {
      data: githubIssue
    });
  }
}
