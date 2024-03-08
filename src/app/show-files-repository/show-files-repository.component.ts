import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {GithupServiceService} from "../githup-service.service";
import {Store} from "@ngrx/store";
import * as RepositoryActions from "../data/repository.action";
import {showFileContent} from "../data/repository.action";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-show-files-repository',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './show-files-repository.component.html',
  styleUrl: './show-files-repository.component.css'
})
export class ShowFilesRepositoryComponent {
  username: string = '';
  repositories: any[] = [];
  repositoryContents: any[] = [];

  constructor(private githubService: GithupServiceService, private store: Store) {}

  async showRepositoryContents(repoName: string) {
    try {
      this.repositoryContents = await this.githubService.getRepositoryContents(this.username, repoName).toPromise();
      this.store.dispatch(RepositoryActions.fetchRepositoryContentsSuccess({ repositoryContents: this.repositoryContents }));
    } catch (error) {
      console.error('Error fetching repository contents:', error);
    }
  }

  protected readonly showFileContent = showFileContent;
}
