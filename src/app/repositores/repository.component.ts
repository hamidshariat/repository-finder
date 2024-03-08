import { Component } from '@angular/core';
import { GithupServiceService } from '../githup-service.service';
import { Store } from '@ngrx/store';
import * as RepositoryActions from '../data/repository.action';
import * as RepositorySelectors from '../data/repository.selector';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatListItem, MatSelectionList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SearchRepositoryComponent} from "../search-repository/search-repository.component";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardTitle,
    MatFormField,
    FormsModule,
    MatCardFooter,
    MatSelectionList,
    MatListItem,
    MatIcon,
    MatInput,
    MatButton,
    NgForOf,
    MatCardContent,
    NgIf,
    RouterLink,
    SearchRepositoryComponent
  ],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {



}
