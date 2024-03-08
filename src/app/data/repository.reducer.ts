import { createReducer, on } from '@ngrx/store';
import * as RepositoryActions from './repository.action';

export interface RepositoryState {
  repositories: any[];
  repositoryContents: any[];
  selectedRepository: string | null;
  selectedFileUrl: string | null;
}

export const initialState: RepositoryState = {
  repositories: [],
  repositoryContents: [],
  selectedRepository: null,
  selectedFileUrl: null
};

export const repositoryReducer = createReducer(
  initialState,
  on(RepositoryActions.fetchRepositoriesSuccess, (state, { repositories }) => ({
    ...state,
    repositories
  })),
  on(RepositoryActions.fetchRepositoryContentsSuccess, (state, { repositoryContents }) => ({
    ...state,
    repositoryContents
  })),
  on(RepositoryActions.showFileContent, (state, { fileUrl }) => ({
    ...state,
    selectedFileUrl: fileUrl
  })),
  on(RepositoryActions.showRepositoryContents, (state, { repositoryName }) => ({
    ...state,
    selectedRepository: repositoryName
  }))
);
