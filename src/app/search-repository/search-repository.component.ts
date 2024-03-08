import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatToolbar} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import * as RepositoryActions from "../data/repository.action";
import { GithupServiceService } from '../githup-service.service';
import { Store } from '@ngrx/store';
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatSelectionList} from "@angular/material/list";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-search-repository',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInput,
    MatToolbar,
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    MatCardFooter,
    MatIcon,
    MatListItem,
    MatSelectionList,
    NgForOf,
    NgIf
  ],
  templateUrl: './search-repository.component.html',
  styleUrl: './search-repository.component.css'
})
export class SearchRepositoryComponent {
  private router = inject(Router)
  username: string = '';
  repositories: any[] = [];


  constructor(private githubService: GithupServiceService,private store: Store) {}
  async fetchRepositories() {
    await this.router.navigate(['/search/folders'])
    try {
      this.repositories = await this.githubService.fetchRepositories(this.username).toPromise();
      this.store.dispatch(RepositoryActions.fetchRepositoriesSuccess({ repositories: this.repositories }));
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }

}

