import { createAction, props } from '@ngrx/store';

export const searchRepositories = createAction(
  '[Repository] Search Repositories',
  props<{ username: string }>()
);

export const fetchRepositoriesSuccess = createAction(
  '[Repository] Fetch Repositories Success',
  props<{ repositories: any[] }>()
);

export const fetchRepositoryContents = createAction(
  '[Repository] Fetch Repository Contents',
  props<{ repositoryName: string }>()
);

export const fetchRepositoryContentsSuccess = createAction(
  '[Repository] Fetch Repository Contents Success',
  props<{ repositoryContents: any[] }>()
);

export const showFileContent = createAction(
  '[Repository] Show File Content',
  props<{ fileUrl: string }>()
);

export const showRepositoryContents = createAction(
  '[Repository] Show Repository Contents',
  props<{ repositoryName: string }>()
);
