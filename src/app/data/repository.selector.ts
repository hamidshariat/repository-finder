import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RepositoryState } from './repository.reducer';

export const selectRepositoryState = createFeatureSelector<RepositoryState>('repository');

export const selectRepositories = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.repositories
);

export const selectRepositoryContents = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.repositoryContents
);

export const selectSelectedRepository = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.selectedRepository
);

export const selectSelectedFileUrl = createSelector(
  selectRepositoryState,
  (state: RepositoryState) => state.selectedFileUrl
);
