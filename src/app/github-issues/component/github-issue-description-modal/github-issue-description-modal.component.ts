import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GithubIssue } from '../../model/github-issue.model';

@Component({
  selector: 'app-github-issue-description-modal',
  templateUrl: './github-issue-description-modal.component.html',
  styleUrls: ['./github-issue-description-modal.component.scss']
})
export class GithubIssueDescriptionModalComponent implements OnInit {
  githubIssue;

  constructor(@Inject(MAT_DIALOG_DATA) public data: GithubIssue) {
    this.githubIssue = data;
  }

  ngOnInit(): void {
  }

}
