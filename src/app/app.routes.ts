import { Routes } from '@angular/router';
import {ShowCodeRepositoryComponent} from "./show-code-repository/show-code-repository.component";
import {ShowFoldersRipositoryComponent} from "./show-folders-ripository/show-folders-ripository.component";
import{ShowFilesRepositoryComponent} from "./show-files-repository/show-files-repository.component";
import{SearchRepositoryComponent} from "./search-repository/search-repository.component";
export const routes: Routes = [
  { path : '' , redirectTo :'search' , pathMatch:'full'},
  {
    path: 'search',
    component: SearchRepositoryComponent,
    children: [
      { path: 'folders', component: ShowFoldersRipositoryComponent },
      { path: 'files', component: ShowFilesRepositoryComponent },
      { path: 'code', component: ShowCodeRepositoryComponent }
    ]
  }
];
