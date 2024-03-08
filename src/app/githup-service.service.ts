import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithupServiceService {
  constructor(private http: HttpClient) { }

  fetchRepositories(username: string): Observable<any> {
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get(url);
  }

  getRepositoryContents(username: string, repoName: string, path: string = ''): Observable<any> {
    const url = `https://api.github.com/repos/${username}/${repoName}/contents/${path}`;
    return this.http.get(url);
  }

  getFileContent(downloadUrl: string): Observable<any> {
    return this.http.get(downloadUrl, { responseType: 'text' });
  }
}
