import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {GithupServiceService} from "../githup-service.service";
import {Store} from "@ngrx/store";
import * as RepositorySelectors from "../data/repository.selector";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-show-code-repository',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './show-code-repository.component.html',
  styleUrl: './show-code-repository.component.css'
})
export class ShowCodeRepositoryComponent {

  username: string = '';
  repositories: any[] = [];
  repositoryContents: any[] = [];
  showvalue: any[] = [];
  constructor(private githubService: GithupServiceService, private store: Store) {}
  repositories$ = this.store.select(RepositorySelectors.selectRepositories);
  repositoryContents$ = this.store.select(RepositorySelectors.selectRepositoryContents);



  async showFileContent(downloadUrl: string) {
    try {
      const fileContent = await this.githubService.getFileContent(downloadUrl).toPromise();
      this.showvalue = fileContent;
    } catch (error) {
      console.error('Error fetching file content:', error);
    }
  }
}
