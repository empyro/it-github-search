import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';

import { GithubIssuesListComponent } from './component/github-issues-list/github-issues-list.component';
import { GithubIssuesSearchViewComponent } from './component/github-issues-search-view/github-issues-search-view.component';
import { GithubIssueDescriptionModalComponent } from './component/github-issue-description-modal/github-issue-description-modal.component';

import { StoreModule } from '@ngrx/store';
import { githubIssuesReducer } from './store/github-issues.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GithubIssuesEffects } from './store/github-issues.effects';
import { GithubIssuesRoutingModule } from './github-issues-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GithubIssuesService } from './service/github-issues.service';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  providers: [
    GithubIssuesService
  ],
  declarations: [
    GithubIssuesListComponent,
    GithubIssuesSearchViewComponent,
    GithubIssueDescriptionModalComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('githubIssues', {
      githubIssues: githubIssuesReducer
    }),
    EffectsModule.forFeature([GithubIssuesEffects]),
    GithubIssuesRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    FlexModule,
    SharedModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class GithubIssuesModule { }
