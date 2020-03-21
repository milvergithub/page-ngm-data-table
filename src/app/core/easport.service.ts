import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {ApiResponse} from './api-response';
import {createRequestOption} from './utils';

@Injectable({
  providedIn: 'root'
})
export class EasportService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://api.github.com/search/repositories?';
  }

  getItems(options?: any): Observable<ApiResponse> {
    const params: HttpParams = createRequestOption(options);
    return this.http.get<ApiResponse>(`${this.URL}`, {params});
  }
}


