import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoFile } from './info-file';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Video {

  constructor(private http: HttpClient) { }

  public getInfo(): Observable<InfoFile> {
    return this.http.get<InfoFile>(`${environment.apiUrl}/video/info.json`, );
  }
}
