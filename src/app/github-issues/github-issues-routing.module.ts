import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubIssuesSearchViewComponent } from './component/github-issues-search-view/github-issues-search-view.component';

const routes: Routes = [
  {
    path: 'issues-search',
    component: GithubIssuesSearchViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubIssuesRoutingModule { }
