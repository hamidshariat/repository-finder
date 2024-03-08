import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { repositoryReducer } from '../data/repository.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('repository', repositoryReducer)
  ]
})
export class RepositoryStoreModule {}
