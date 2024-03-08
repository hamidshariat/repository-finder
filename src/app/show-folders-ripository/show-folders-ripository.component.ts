import {Component, OnInit} from '@angular/core';
import * as RepositoryActions from "../data/repository.action";
import {GithupServiceService} from "../githup-service.service";
import {Store} from "@ngrx/store";
import {MatCard, MatCardContent, MatCardFooter} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatSelectionList} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-show-folders-ripository',
  standalone: true,
  imports: [
    MatCard,
    MatCardFooter,
    MatIcon,
    MatListItem,
    MatSelectionList,
    NgForOf,
    NgIf,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './show-folders-ripository.component.html',
  styleUrl: './show-folders-ripository.component.css'
})
export class ShowFoldersRipositoryComponent{
  username: string = '';
  repositories: any[] = [];
  repositoryContents: any[] = [];

  constructor(private githubService: GithupServiceService, private store: Store) {}
  async showRepositoryContents(repoName: string) {
      this.repositoryContents = await this.githubService.getRepositoryContents(this.username, repoName).toPromise();
      this.store.dispatch(RepositoryActions.fetchRepositoryContentsSuccess({ repositoryContents: this.repositoryContents }));
  }

}
